// Import the filesystem module
const fs = require('fs');
const path = require('path');
console.log('🚀 ~ path:', path.basename);
// Function to get current filenames
// in directory
// let filenames = fs.readdirSync(__dirname, {widthFiletypes:true});

let filenames = fs.readdirSync(
  './images',
  { widthFiletypes: true },
  'utf-8'
);
let id = 1,
  data = [];
for (let file of filenames) {
  const obj = { id: id, imgUrl: `./images/${file}` };
  data.push(obj);

  id++;
}

console.log('🚀 ~ data:', data);

const writeFileFunc = () => {
  const pathTexto = path.join(__dirname, './fileNameImage.txt');
  console.log('🚀 ~ writeFileFunc ~ pathTexto:', pathTexto);
  console.log('🚀 ~ writeFileFunc ~ data:', JSON.stringify(data));

  fs.writeFileSync(pathTexto, JSON.stringify(data), 'utf-8');
};

// writeFileFunc();

// const fs = require('fs')
// import { readdirSync } from 'fs';
// import path from 'path';
// const pathTexto = path.join(__dirname, './images/*.*');
// console.log("🚀 ~ pathTexto:", pathTexto)

// Function to get current filenames
// in directory
// const filenamesInDir = readdirSync(__dirname);
// console.log("🚀 ~ filenamesInDir:", filenamesInDir)

// var files = readdirSync('/assets/photos/');
