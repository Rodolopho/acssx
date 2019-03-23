const acss=require('./index.js');
const url=require('url');
const server=require('http').createServer();

server.on('request',(req,res)=>{

req.pipe(fs.createWriteStream('./public/css/ajax.css'));

});

server.listen(8010)
server.timeout=5000;

