---
title: "Stardew Valley on Mac: Restore the Previous Day’s Save"
description: "Undo the last saved day on Mac with a six-step Finder walkthrough, five original screenshots, and the exact names of both backup files to restore."
pubDate: 2026-10-26
updatedDate: 2026-10-26
category: "Getting Started"
tags: ["mac", "macos", "save files", "rollback", "previous day", "backup"]
---

Slept before you meant to, or saved a day you want to replay? Stardew Valley normally keeps a pair of files from the previous save alongside the current pair. If both backups are present, you can make that earlier day the one the game loads.

This walkthrough follows Holly’s Mac screenshots. Finder is in Chinese in the pictures, but the folder and file names match the English instructions below.

**Before starting, quit Stardew Valley completely.** This restores the available previous save; it cannot select any date from your farm’s history. Keep the game closed while changing files.

## 1. Open the .config folder in Finder

Open **Finder**, choose **Go → Go to Folder…** from the menu bar, and enter:

```text
~/.config
```

Press Return to open that folder. You can also open the dialog with **Command–Shift–G**. The `~` means your Mac user’s home folder.

<figure class="guide-screenshot">
  <a href="/images/guides/mac-restore-previous-day/01-go-to-config.png"><img src="/images/guides/mac-restore-previous-day/01-go-to-config.png" alt="Finder Go to Folder suggestions, with .config on the second row beneath .codex" width="920" height="360" loading="lazy" /></a>
  <figcaption>Step 1: choose <code>.config</code>, the second suggestion in this screenshot. Enter the complete path above to avoid accepting the highlighted <code>.codex</code> suggestion.</figcaption>
</figure>

## 2. Open StardewValley

Inside `.config`, double-click **StardewValley**, as indicated by the red arrow.

<figure class="guide-screenshot">
  <a href="/images/guides/mac-restore-previous-day/02-stardewvalley-folder.png"><img src="/images/guides/mac-restore-previous-day/02-stardewvalley-folder.png" alt="The .config folder in Finder, with a red arrow pointing to StardewValley" width="1120" height="602" loading="lazy" /></a>
  <figcaption>Step 2: open the StardewValley folder.</figcaption>
</figure>

## 3. Open Saves

Double-click **Saves**. Leave the other files in the StardewValley folder alone.

<figure class="guide-screenshot">
  <a href="/images/guides/mac-restore-previous-day/03-saves-folder.png"><img src="/images/guides/mac-restore-previous-day/03-saves-folder.png" alt="The StardewValley folder containing default_options, Saves, and startup_preferences; an arrow points to Saves" width="1086" height="616" loading="lazy" /></a>
  <figcaption>Step 3: open Saves to see the individual saved games.</figcaption>
</figure>

The full Mac path is `~/.config/StardewValley/Saves`. Pasting that into **Go to Folder…** takes you directly here if you repeat the process later.

## 4. Find the save and copy the whole folder

Each saved game has its own folder, usually beginning with your **farmer’s name**, followed by an underscore and a numeric ID. Use that name and ID to identify the right character; the farm’s display name may differ.

The example below is `lucky_451140984`. Your folder will have its own name and number.

<figure class="guide-screenshot">
  <a href="/images/guides/mac-restore-previous-day/04-select-save.png"><img src="/images/guides/mac-restore-previous-day/04-select-save.png" alt="Several save folders in Finder, with lucky_451140984 marked as the example to open" width="1372" height="760" loading="lazy" /></a>
  <figcaption>Step 4: identify the intended save folder before opening or changing its contents.</figcaption>
</figure>

**Copy this entire folder to your Desktop before continuing.** Keep that copy untouched and work in the original folder under `Saves`. It gives you a way to return to the current save if you choose the wrong files or decide against the rollback.

## 5. Replace the current pair with the _old pair

Open the original save folder. A save with the previous-day backups available normally contains these four files:

| File in this example | Role |
|---|---|
| `lucky_451140984` | Current game data |
| `SaveGameInfo` | Current load-menu information |
| `lucky_451140984_old` | Previous game data |
| `SaveGameInfo_old` | Previous load-menu information |

<figure class="guide-screenshot">
  <a href="/images/guides/mac-restore-previous-day/05-old-save-files.png"><img src="/images/guides/mac-restore-previous-day/05-old-save-files.png" alt="Four files inside lucky_451140984, with arrows identifying SaveGameInfo_old and lucky_451140984_old" width="1210" height="682" loading="lazy" /></a>
  <figcaption>Step 5: the two arrows identify the backup pair. Both names end in <code>_old</code>.</figcaption>
</figure>

First, move the two files **without** `_old` into a separate holding folder outside `Saves`. Keep the untouched whole-folder copy from Step 4 as well.

Then rename the two remaining files, removing only the final `_old`:

```text
lucky_451140984_old  →  lucky_451140984
SaveGameInfo_old     →  SaveGameInfo
```

In Finder, select one file and press Return to rename it. Repeat for the other. Preserve your own name and numbers exactly, and leave the enclosing folder’s name unchanged. The main save file and its folder must have matching names.

## 6. Launch the game and check the day

Start Stardew Valley, choose **Load**, and open that character. With a valid matching backup pair, the game should load the previous saved day. Check the in-game date before continuing to play.

Keep your Desktop backup until you are satisfied with the result. If you want to undo the change, quit the game and restore the untouched folder copy to its original location.

## If the expected files or day are missing

- **No complete `_old` pair:** stop before moving the current files. This method needs both available backups; it does not create missing ones.
- **The farm disappears from Load:** close the game and check both filenames. Restore both members of the same pair and keep the main filename identical to the enclosing folder.
- **You need an older date:** the `_old` pair is a single previous-save backup, not a calendar of older days. You would need a separate older backup for another date.

**Screenshots:** original Mac captures supplied by Holly, used in their original order. **References checked 26 October 2026:** the [official save-file troubleshooting guide](https://www.stardewvalley.net/missing-corrupt-save-file-troubleshooting-guide/) for the paired backups and naming rules, the [Wiki’s Mac save location](https://stardewvalleywiki.com/Saves#Mac), and [Apple’s Go to Folder instructions](https://support.apple.com/guide/mac-help/go-directly-to-a-specific-folder-mchlp1236/mac).
