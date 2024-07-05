const fs = require('fs');
const path = require('path');

const filePath = 'D:\JS_ServerSide\NodeJS\file.txt';

const dirName = path.dirname(filePath);
console.log(dirName);

const extention = path.extname(filePath);
console.log(extention);

