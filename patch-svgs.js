const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) processFile(full);
  }
}

function processFile(file) {
  let s = fs.readFileSync(file, 'utf8');
  const re = /import\s+([A-Za-z0-9_]+)\s+from\s+(['"])(?:.*\/)?([^\/'"]+\.svg)\2\s*;/g;
  if (re.test(s)) {
    s = s.replace(re, (_, name, q, svgName) => `const ${name} = "/images/${svgName}";`);
    fs.writeFileSync(file, s, 'utf8');
    console.log('patched', file);
  }
}

walk(path.join(process.cwd(), 'src'));
console.log('done');
