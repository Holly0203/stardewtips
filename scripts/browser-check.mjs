import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile,stat,mkdir} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const guideCount=Object.keys(JSON.parse(await readFile(resolve(root,'src/data/guideIndex.json'),'utf8'))).length;
const moduleArg=process.argv.find(x=>x.startsWith('--playwright='))?.slice('--playwright='.length);
const {chromium}=await import(moduleArg?pathToFileURL(moduleArg).href:'playwright');
const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.xml':'application/xml'};
const server=createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'dist','.'+path);if(file!==resolve(root,'dist')&&!file.startsWith(resolve(root,'dist')+'/'))throw Error('bad path');if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.setHeader('Content-Type',mime[extname(file)]??'application/octet-stream');res.end(await readFile(file));}catch{res.statusCode=404;res.end('Not found');}});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin=`http://127.0.0.1:${server.address().port}`;
let browser;
try{
 browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE??'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-sandbox','--disable-crash-reporter','--disable-breakpad']});
 const context=await browser.newContext({viewport:{width:1365,height:1000},reducedMotion:'reduce'});
 await context.route('**/*',route=>new URL(route.request().url()).origin===origin?route.continue():route.abort());
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const loadImages=async(target=page)=>{await target.evaluate(async()=>{const images=[...document.images];for(const image of images)image.loading='eager';await Promise.all(images.map(image=>image.decode()));});assert(await target.locator('img').evaluateAll(images=>images.every(image=>image.complete&&image.naturalWidth>0)),'all images should load');};
 await page.goto(origin+'/');await page.locator('h1').waitFor();
 await mkdir('/private/tmp/stardew-deep-preview',{recursive:true});
 await loadImages();
 await page.screenshot({path:'/private/tmp/stardew-deep-preview/home-desktop.png',fullPage:true});
 await page.fill('#home-search','greenhouse');await page.locator('.search-form button').click();
 await page.waitForURL('**/guides/?q=greenhouse');await page.waitForFunction(total=>document.querySelector('#search-status')?.textContent?.includes('of '+total),guideCount);
 assert(await page.locator('.library-grid .post-card:visible').count()>0);
 await page.fill('#guide-search','');await page.selectOption('#category-filter','fishing');await page.selectOption('#stage-filter','Later game');
 assert.equal(await page.locator('.library-grid .post-card:visible').count(),1);
 assert((await page.locator('.library-grid .post-card:visible').textContent()).includes('Legendary Fish'));
 await page.reload();assert.equal(await page.locator('.library-grid .post-card:visible').count(),1);
 await page.fill('#guide-search','no-such-guide-test-value');await page.locator('#empty-results').waitFor({state:'visible'});
 await page.click('#clear-empty');await page.waitForFunction(total=>document.querySelectorAll('.library-grid .post-card:not([hidden])').length===total,guideCount);
 assert.equal(await page.locator('.library-grid .post-card:visible').count(),guideCount);
 await page.goto(origin+'/guides/greenhouse-guide/');assert.equal(await page.locator('.article-header h1').count(),1);assert.equal(await page.locator('.related-section .post-card').count(),3);
 assert(await page.locator('.prose img[src*="greenhouse-six"]').evaluate(el=>el.getBoundingClientRect().width)>500);
 await loadImages();
 await page.screenshot({path:'/private/tmp/stardew-deep-preview/article-desktop.png',fullPage:true});
 for(const width of [360,390,768]){
  await page.setViewportSize({width,height:844});
  for(const path of ['/','/guides/','/plans/','/guides/greenhouse-guide/','/guides/restore-previous-day-save-mac/']){
   await page.goto(origin+path);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${path} overflow at ${width}`);
  }
 }
 await page.setViewportSize({width:390,height:844});await page.goto(origin+'/guides/greenhouse-guide/');
 await page.locator('.mobile-contents summary').click();assert(await page.locator('.mobile-contents nav').isVisible());
 await loadImages();
 await page.screenshot({path:'/private/tmp/stardew-deep-preview/article-mobile.png',fullPage:true});
 await page.goto(origin+'/');await loadImages();await page.screenshot({path:'/private/tmp/stardew-deep-preview/home-mobile.png',fullPage:true});
 await page.goto(origin+'/guides/restore-previous-day-save-mac/');await loadImages();assert.equal(await page.locator('.guide-screenshot img').count(),5);assert(await page.locator('.guide-screenshot img').evaluateAll(images=>images.every(image=>image.getBoundingClientRect().width>250&&image.getBoundingClientRect().width<=innerWidth)));await page.screenshot({path:'/private/tmp/stardew-deep-preview/mac-save-mobile.png',fullPage:true});
 const desktop=await context.newPage();desktop.on('pageerror',e=>errors.push(e.message));await desktop.goto(origin+'/guides/restore-previous-day-save-mac/');await loadImages(desktop);await desktop.screenshot({path:'/private/tmp/stardew-deep-preview/mac-save-desktop.png',fullPage:true});await desktop.close();
 assert.deepEqual(errors,[]);await context.close();
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());const fallback=await nojs.newPage();await fallback.goto(origin+'/guides/');assert.equal(await fallback.locator('.library-grid .post-card').count(),guideCount);await nojs.close();
 console.log('PASS: browser search, combined filters, URL restore, empty-state reset, related links, diagram width, all five Mac screenshots, mobile TOC, no-JS listing, and layouts at 360/390/768/1365px.');
}finally{await browser?.close();await new Promise(resolve=>server.close(resolve));}
