#!/usr/bin/env bash
set -e

# 1. move svg files to public/images
mkdir -p public/images
find src -type f -name '*.svg' -print0 | xargs -0 -I{} mv -f "{}" public/images/

# 2. find files that import .svg and convert import -> const path, and replace component usage with <img>
grep -RIl --include=\*.{ts,tsx,js,jsx} "from .*\.svg" src || true | while IFS= read -r file; do
  # replace import Default from ".../file.svg"; -> const Default = "/images/file.svg";
  perl -0777 -i -pe 's/import\s+([A-Za-z0-9_]+)\s+from\s+([\'"])(?:.*\/)?([^\/\'"]+\.svg)\2\s*;/const $1 = "\/images\/$3";/g' "$file"

  # replace component usages:
  #  <Icon />                 -> <img src={Icon} alt=""/>
  #  <Icon prop="x" />       -> <img src={Icon} alt="" prop="x" />
  #  <Icon>...</Icon>        -> <img src={Icon} alt=""/>
  perl -0777 -i -pe 's{<([A-Za-z0-9_]+)\s*\/>} {<img src={$1} alt=""/> }gs; s{<([A-Za-z0-9_]+)(\s+[^>]*)\/>} {<img src={$1} alt=""$2/>}gs; s{<([A-Za-z0-9_]+)[^>]*>.*?</\1>} {<img src={$1} alt=""/>}gs' "$file"
done

echo "done"
