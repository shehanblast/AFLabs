const os = require('os'),
      fs = require('fs');

const writeStream = fs.createWriteStream(__dirname + '/test.txt');

//Write on the file
writeStream.write('Welcome to the World of Node JS');
writeStream.write(os.EOL); //To brake a line
writeStream.write('NodeJS is Awesome');
writeStream.write('\n'); //To brake a line
writeStream.write('I love it!');
writeStream.close();

writeStream.on('close', () => {
    console.log("File write is completed");
})

const events = require('events');

class TestEvent extends events{

}

/*

const events = require('events');

class TestEvent extends events{
}

const testEvent = new TestEvent();

testEvent.on('event',data =>{
    console.log(`Hello ${data}`);
});

testEvent.on('event',data =>{
    console.log(`Bye ${data}`);
});

testEvent.emit('event','Node');
//Hello Node
//Bye Node

 */
/*

const cluster = require('cluster'), http = require('http'),os = require('os');

if(cluster.isMaster){
    console.log(`Master is running on ${process.pid}`);

    for(let i = 0; i < os.cpus().length; i++){
        cluster.fork();
    }

    cluster.on('error',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} exit with ${code}`);
    });

}else{
    console.log(`Worker ${process.pid}`);

}


 */


////////////////////////////////////////

const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>ekkw</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1> ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3001, (err) => {
    console.log('Server is listening to port 3000')
});