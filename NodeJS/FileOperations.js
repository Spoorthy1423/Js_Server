const fs = require('fs');
const path = 'NodeJS/file.txt';

// Check if the file exists before reading
if (fs.existsSync(path)) {
    const data = fs.readFileSync(path); // Read file.txt synchronously
    console.log(data.toString()); // Print the content of file.txt
} else {
    console.log('File does not exist');
}

// delay function to simulate async operation
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

fs.writeFile(path, 'Hello MoM!', 'utf-8', () => {
    console.log('File modified successfully');

    fs.appendFile(path, 'class is going on', 'utf-8', () => {
        console.log('Data appended successfully');

        setTimeout(() => {
            console.log(fs.readFileSync(path).toString()); // Print the content of file.txt
        }, 100);
    });
});

fs.mkdir('D:/JS_ServerSide/NodeJS/newDir', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Directory created successfully');

        fs.rmdir('D:/JS_ServerSide/NodeJS/newDir', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Directory deleted successfully');
            }
        });
    }
});

fs.rename(path, 'D:/JS_ServerSide/NodeJS/new-file.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File renamed successfully');

        delay(1000).then(() => {
            fs.rename('D:/JS_ServerSide/NodeJS/new-file.txt', path, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File renamed back successfully');
                }
            });
        });
    }
});
