//Q1
console.log('Hello World');
console.log('');

//Q2
const os = require('os'); //import a module
console.log('Architecture ' + os.arch()); //OS Architecture
console.log('CPUs ' + os.cpus().length); //num of CPU's in the terminal
console.log('Platform ' + os.platform()); //Platform

//Q3
const fs = require('fs'); //Read the file

const fileName = __dirname + '/text.txt'; //Get the file path

//Read the file and print
console.log(fileName);
fs.readFile(fileName,(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

//Q4
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

//Q5
const http = require('http');

