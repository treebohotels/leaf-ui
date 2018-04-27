/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const ignoreFiles = [
  '.DS_Store',
  'scripts',
  'utils',
  'theme',
];

const platforms = [
  'web',
  'native',
  'amp',
];

// generate exports for components for all platforms
const srcPath = path.resolve(__dirname, '../');
const components = fs.readdirSync(srcPath)
  .filter((files) => !ignoreFiles.includes(files));
components.forEach((component) => {
  const componentDir = path.resolve(__dirname, `../../${component}`);
  mkdirp(componentDir, (mkdirpErr) => {
    if (mkdirpErr) throw mkdirpErr;
    platforms.forEach((platform) => {
      const componentFile = path.resolve(componentDir, `${platform}.js`);
      const componentContent = `export default from '../es/${component}/${platform}';\nexport * from '../es/${component}/${platform}';\n`;
      fs.writeFile(componentFile, componentContent, (writeFileErr) => {
        if (writeFileErr) throw writeFileErr;
        console.log(`generated: ${componentFile}`);
      });
    });
  });
});

// generate exports for theme
const themeFile = path.resolve(__dirname, '../../theme.js');
const themeContent = 'export default from \'./es/theme\';\nexport * from \'./es/theme\';\n';
fs.writeFile(themeFile, themeContent, (writeFileErr) => {
  if (writeFileErr) throw writeFileErr;
  console.log(`generated: ${themeFile}`);
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
