const fs = require('fs');

var filePath = "read_file.js";
// var fileData = "Testing asynchronous file write.\n";
// fs.writeFile(filePath, fileData, function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log("Successfully wrote to", filePath);
// });

var newData = '';
fs.readFile('read-file.txt', (err, data) => {
    if (err) throw err;
    newData += data;
    console.log(newData);
    console.log('times ran');
    // readData(data);
});


// let data = fs.readFileSync('./read_file.js');
//
// console.log(data);