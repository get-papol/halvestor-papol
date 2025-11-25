const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) convertFile(full);
  }
}

function convertFile(file) {
  let s = fs.readFileSync(file, 'utf8');
  // self-closing without props: <Icon /> -> <img src={Icon} alt=""/>
  s = s.replace(/<([A-Za-z0-9_]+)\s*\/>/g, '<img src={$1} alt=""/>');
  // self-closing with props: <Icon prop="x" /> -> <img src={Icon} alt="" prop="x" />
  s = s.replace(/<([A-Za-z0-9_]+)(\s+[^>]+?)\/>/g, '<img src={$1} alt=""$2/>');
  // open/close pair -> <img src={Icon} alt=""/>
  s = s.replace(/<([A-Za-z0-9_]+)[^>]*>[\s\S]*?<\/\1>/g, '<img src={$1} alt=""/>');
  if (s !== fs.readFileSync(file, 'utf8')) {
    fs.writeFileSync(file, s, 'utf8');
    console.log('converted', file);
  }
}

walk(path.join(process.cwd(), 'src'));
console.log('done');
