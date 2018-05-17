const path=require('path');
const fs=require('fs');
const compiler=require('./src/compiler.js');
const dist=path.join(__dirname,"dist",'acss.js');


//var data=fs.readFileSync('./old-ref/index.html', 'utf-8');
let acssCompiler={
	dist:function(path){
		fs.copyFileSync(dist, path);
	},
	classList:[],
	input:null,
	output:null,
	re:/[\s]+class=[\s]*['|"][\s]*([-|_|a-z0-9|\s]*)[\s]*['|"]/g,
	// compileStatement:"/* AliasCSS : This file is compile by AliasCSS Compiler*/\n\n\n",
	extractClassName:function(file){
			let data=fs.readFileSync(file, 'utf-8');
			let found;
			let that=this;
			let classList=[];
			while((found=this.re.exec(data))!==null){
				
				var result=found[1].trim().split(/\s+/);
				result.forEach(function(e){
					if(that.classList.indexOf(e)===-1){
						that.classList.push(e);
						classList.push(e);
					}
				})
			}

			return classList;
	},
	compile:function(file){
				let compileStatement=null;
				let that=this;
				const classList=this.extractClassName(file);
				
				if(classList.length){
					
					compileStatement=`\n/* AliasCSS : These are classnames compiled  from ${path.basename(file)}*/\n\n`,
					classList.forEach(function(e){

						if((statement=compiler.main(e))!==false){
							
							compileStatement=compileStatement+statement+"\n";
						}
						
					});

				}
				return compileStatement;
	},
	processArray:function(list){


	},
	processFolder:function(folder){
		const files=fs.readdirSync(folder);

			files.forEach((file)=>{
				const filepath=path.join(folder,file);

				fs.stat(filepath,(err,stats)=>{
					if(err) throw err;
					if(stats.isDirectory()){
						this.processFolder(filepath);
					}else if(stats.isFile()){
						this.writeToFile(filepath);
					}
					})
				})
			

	},
	writeToFile:function(file){

			if((compileStatement=this.compile(file))===null){
				return;
			}
			
			
			try {
				
		  		fs.appendFileSync(this.output, compileStatement);
		  		console.log("Successfully  compiled acss from " + file);
			} catch (err) {
			  console.log("Couldn't able to append compiled acss from " + file);
			  console.log(err);
			}
	},
	
	run:function(input,output,append){
		if(input){
			this.input=input;
		}
		if(output){
			this.output=output;
		}
		
		if(this.input && this.output){
			if(append!==true){
				if(fs.existsSync(this.output)){
					fs.truncateSync(this.output);
				}

				// fs.stat(this.output,(err,stats)=>{
				// 	if(!err){//} throw err;
				// 	if(stats.isFile()){
				// 		console.log('ready to truncate')
				// 		fs.truncateSync(this.output);
				// 	}
				// }
				// })
				
			}
		//case 1: if its array
		if(Array.isArray(this.input)){
			this.input.forEach((entry)=>{
				fs.stat(entry,(err,stats)=>{
					if(err) throw err;
					
					if(stats.isDirectory()){
						this.processFolder(entry);
						return;
					}
					if(stats.isFile()){
						this.writeToFile(entry);
						return;
					}
				});
			})
			return;
		}
		//case @: file or folder
		fs.stat(this.input,(err,stats)=>{
			if(err) throw err;
			
			if(stats.isDirectory()){
				this.processFolder(this.input);
				return;
			}
			if(stats.isFile()){
				this.writeToFile(this.input);
				return;
			}
		});
		
		}else{
			console.error("Please provide, entry or/and output file/s");
		}
		
	}


};module.exports=acssCompiler;//end of acssCompiler

/

