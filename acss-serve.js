const acss=require('./index.js');
const url=require('url');
const server=require('http').createServer();

server.on('request',(req,res)=>{
	let data=url.parse(req.url,true);
	if(data.pathname=='/live-update'){
		let compileClassName='';
		if(data.query){
			compileClassName=acss.compileAcssString(data.query.classNames);
		}
		console.log(data.query);
		res.writeHead('200',{'content-type':'text/plain'});
		res.end(compileClassName);
	}
});

server.listen(8010)
server.timeout=5000;