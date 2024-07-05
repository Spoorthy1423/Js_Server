// create a dir named dir1 in the current dir
// copy file text.txt to dir1

const fs = require('fs');

const filePath = 'text.txt';

// Create the file
fs.writeFileSync(filePath, 'Hello World!');
console.log('File created');

const dirName = 'dir1';

// Check if directory exists before creating it
if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
    console.log('Dir created');
} else {
    console.log('Dir already exists');
}

// copy the file to dir1 not move
fs.copyFileSync(filePath, `${dirName}/${filePath}`);
console.log('File copied');

