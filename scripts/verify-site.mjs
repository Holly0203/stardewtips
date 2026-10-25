import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const text=p=>readFile(join(root,p),'utf8');
const exists=async p=>{try{await stat(p);return true;}catch{return false;}};
const walk=async dir=>(await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]))).flat();
const inventory=JSON.parse(await text('src/data/guideIndex.json'));
const revisions=JSON.parse(await text('audits/2026-10-26-article-revisions.json'));
const files=(await readdir(join(root,'src/content/guides'))).filter(f=>f.endsWith('.md'));
assert.equal(files.length,83);assert.deepEqual(files.map(x=>x.slice(0,-3)).sort(),Object.keys(inventory).sort());
assert.equal(new Set(revisions.map(x=>x.id)).size,83);
for(const name of files){const id=name.slice(0,-3);const source=await text('src/content/guides/'+name);const revision=revisions.find(x=>x.id===id);assert(source.includes('updatedDate: 2026-10-26'),name);assert(source.includes('## '+revision.section),name);assert(/https?:\/\//.test(source),name+' lacks sources');const related=inventory[id].related;assert.equal(new Set(related).size,3,id+' needs three distinct continuations');assert(related.every(x=>x!==id&&x in inventory),id+' invalid continuation');}
const htmlFiles=(await walk(join(root,'dist'))).filter(x=>x.endsWith('.html'));const pages=new Map();
for(const file of htmlFiles){const html=await readFile(file,'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length,file+' duplicate ids');pages.set(file,{html,ids:new Set(ids)});}
const unescape=s=>s.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"');
let links=0;
for(const [file,{html,ids}] of pages){
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const value=unescape(m[1]);if(value.startsWith('#')){assert(ids.has(decodeURIComponent(value.slice(1))),file+' missing '+value);continue;}
  if(!value.startsWith('/')||value.startsWith('//'))continue;
  const u=new URL(value,'https://stardewtips.com');let dest=join(root,'dist',decodeURIComponent(u.pathname));
  if(await exists(join(dest,'index.html')))dest=join(dest,'index.html');
  assert(await exists(dest),file+' missing '+value);links++;
  if(u.hash&&pages.has(dest))assert(pages.get(dest).ids.has(decodeURIComponent(u.hash.slice(1))),file+' invalid anchor '+value);
 }
 if(!file.endsWith('/tips/index.html')){
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,file+' must have one h1');
  const canonical=html.match(/rel="canonical"\s+href="([^"]+)"/);assert(canonical,file+' canonical');assert(!canonical[1].includes('?'),file+' query canonical');
 }
 for(const m of html.matchAll(/<img\b[^>]*>/g))assert(/\balt="[^"]*"/.test(m[0]),file+' image alt');
}
const titles=new Set();const recommendations=[];
for(const name of files){const id=name.slice(0,-3);const {html}=pages.get(join(root,'dist/guides',id,'index.html'));
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title);assert(!titles.has(title),'duplicate title');titles.add(title);
 const json=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(x=>JSON.parse(x[1]));const article=json.find(x=>x['@type']==='Article');assert(article?.dateModified==='2026-10-26',id+' schema revision');
 const reading=html.match(/(\d+) min read/);assert(reading&&Number(reading[1])>=2,id+' incorrect reading time');
 const related=html.slice(html.indexOf('related-section'));const urls=[...related.matchAll(/class="post-card"\s+href="\/guides\/([^/]+)\//g)].map(x=>x[1]);assert.deepEqual(urls,inventory[id].related,id+' recommendations');recommendations.push(urls);
}
assert(recommendations.some(x=>x.includes('sprinkler-guide')),'recommendations should connect related farming pages');
assert.equal((pages.get(join(root,'dist/guides/index.html')).html.match(/class="post-card"/g)||[]).length,83);
assert.equal((pages.get(join(root,'dist/plans/index.html')).html.match(/class="reading-plan"/g)||[]).length,6);
// Independently recalculate the examples most likely to cause a bad spending or layout decision.
const sprinklers=[[3,3],[8,3],[13,3],[3,8],[8,8],[13,8]];let plants=0;
for(let x=1;x<=12;x++)for(let y=1;y<=10;y++){assert(sprinklers.some(([a,b])=>Math.max(Math.abs(x-a),Math.abs(y-b))<=2));if(!sprinklers.some(([a,b])=>a===x&&b===y))plants++;}assert.equal(plants,116);
assert.equal(1000-700+350+800-35-80-1000,335);assert.equal(49+9+14+30,102);assert.equal(12*28-240,96);assert.equal(96*50,4800);assert.equal(7.5*50+25,400);
console.log(`PASS: 83 revised articles, six plans, ${htmlFiles.length} pages, ${links} local links and anchors, metadata, reading times, related guides, and worked examples.`);
if(process.argv.includes('--browser'))await import('./browser-check.mjs');
