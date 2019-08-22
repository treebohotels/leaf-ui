/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const ignoreFiles = [
  '.DS_Store',
  'scripts',
  'utils',
];

// generate exports for all platforms
const srcPath = path.resolve(__dirname, '../');
const components = fs.readdirSync(srcPath)
  .filter((files) => !ignoreFiles.includes(files));
components.forEach((component) => {
  const componentDir = path.resolve(__dirname, `../../${component}`);
  mkdirp(componentDir, (mkdirpErr) => {
    if (mkdirpErr) throw mkdirpErr;
    const componentFile = path.resolve(componentDir, 'index.js');
    const componentContent = `export { default } from '../es/${component}';\nexport * from '../es/${component}';\n`;
    fs.writeFile(componentFile, componentContent, (writeFileErr) => {
      if (writeFileErr) throw writeFileErr;
      console.log(`generated: ${componentFile}`);
    });
  });
});

// generate package.json
const packageJsonPath = path.resolve(__dirname, '../../package.json');
fs.readFile(packageJsonPath, 'utf-8', (readFileErr, packageJsonData) => {
  if (readFileErr) throw readFileErr;
  const packageJson = JSON.parse(packageJsonData);
  const newPackageJson = Object.assign({}, packageJson, {
    files: [
      'cjs/**/*',
      'es/**/*',
      ...components.map((component) => `${component}/**/*`),
      'theme.js',
    ],
  });
  fs.writeFile(packageJsonPath, JSON.stringify(newPackageJson, null, 2), (writeFileErr) => {
    if (writeFileErr) throw writeFileErr;
    console.log('generated: package.json');
  });
});
