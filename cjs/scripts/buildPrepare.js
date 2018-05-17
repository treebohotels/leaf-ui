'use strict';

/* eslint-disable no-console */
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var ignoreFiles = ['.DS_Store', 'scripts', 'utils', 'theme'];

var platforms = ['web', 'native', 'amp'];

// generate exports for components for all platforms
var srcPath = path.resolve(__dirname, '../');
var components = fs.readdirSync(srcPath).filter(function (files) {
  return !ignoreFiles.includes(files);
});
components.forEach(function (component) {
  var componentDir = path.resolve(__dirname, '../../' + component);
  mkdirp(componentDir, function (mkdirpErr) {
    if (mkdirpErr) throw mkdirpErr;
    platforms.forEach(function (platform) {
      var componentFile = path.resolve(componentDir, platform + '.js');
      var componentContent = 'export { default } from \'../es/' + component + '/' + platform + '\';\nexport * from \'../es/' + component + '/' + platform + '\';\n';
      fs.writeFile(componentFile, componentContent, function (writeFileErr) {
        if (writeFileErr) throw writeFileErr;
        console.log('generated: ' + componentFile);
      });
    });
  });
});

// generate exports for theme
var themeFile = path.resolve(__dirname, '../../theme.js');
var themeContent = 'export { default } from \'./es/theme\';\nexport * from \'./es/theme\';\n';
fs.writeFile(themeFile, themeContent, function (writeFileErr) {
  if (writeFileErr) throw writeFileErr;
  console.log('generated: ' + themeFile);
});

// generate package.json
var packageJsonPath = path.resolve(__dirname, '../../package.json');
fs.readFile(packageJsonPath, 'utf-8', function (readFileErr, packageJsonData) {
  if (readFileErr) throw readFileErr;
  var packageJson = JSON.parse(packageJsonData);
  var newPackageJson = Object.assign({}, packageJson, {
    files: ['cjs/**/*', 'es/**/*'].concat(components.map(function (component) {
      return component + '/**/*';
    }), ['theme.js'])
  });
  fs.writeFile(packageJsonPath, JSON.stringify(newPackageJson, null, 2), function (writeFileErr) {
    if (writeFileErr) throw writeFileErr;
    console.log('generated: package.json');
  });
});