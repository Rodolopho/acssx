const path=require('path');
const fs=require('fs');

//MAKES CSS STATEMENTS
const statementMaker=require('./src/statementMaker.js');
//
const dist=path.join(__dirname,"dist",'acss.js');


let acssCompiler={

	//cop file in given location
	dist:function(path){
		fs.copyFileSync(dist, path);
	},

	classList:[],
	propertyNValueList:{},
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
				
				let result=found[1].trim().split(/\s+/);
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

						if((statement=statementMaker.main(e))!==false){
							
							compileStatement=compileStatement+statement+"\n";
						}
						
					});

				}
				return compileStatement;
	},
	compileStyleSheetRaw:function(file){
		let content=fs.readFileSync(file, 'utf-8');
		var _this=this;
		function arranger(m){
				var result=null;
					if(_this.propertyNValueList.hasOwnProperty(m)){
						result=_this.propertyNValueList[m];
						return result 
					}else{
						result=statementMaker.getPropertyAndValue(m.trim());
						if(result){
							_this.propertyNValueList[m]=result;
							return result 

						}else{
							return m;
						}
					}
			
		}
		const match=/[{][\w|#|\-|:|;|$|\*|\/|\.|\(|\)|\s|\\|\"|\%|\!|\,|\']+[}]?/g;

		const m1=/(?<=[{][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m2=/(?<=[;][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m3=/(?<=[;][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;
		const m4=/(?<=[\/][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[;|}])/g;
		return content.replace(match,function(e){
		
			 //1.repalce {.....;
				e=e.replace(m1,function(m){
						return arranger(m);
				});
				//console.log(e);
			
			//2.replace ;.....;
			
			e=e.replace(m2,function(m){
					return arranger(m);
				});

			// console.log(e);
			// 3.replace ;..}	
			e=e.replace(m3,function(m){
					return arranger(m);
				});

			// 3.replace */..;|}	
			e=e.replace(m4,function(m){
					return arranger(m);
				});

		 	//console.log(e);
		 	return e;
			
		 });

	},
	compileStyleSheet:function(file,output){
		let compiledContent=this.compileStyleSheetRaw(file);

			try {
				
		  		fs.appendFileSync(output, compiledContent);
		  		console.log("Successfully  compiled stylesheet from " + file);
			} catch (err) {
			  console.log("Couldn't able to  compiled acss from " + file);
			  console.log(err);
			}

		//return e;
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
			let compileStatement=null;
			//For styleSheet .acs
			
			if(path.extname(file)=='.acss'){
				console.log('Compiling acss to css: '+ file);
				compileStatement=this.compileStyleSheetRaw(file);

			}else if((compileStatement=this.compile(file))===null){
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
		if(fs.existsSync(this.input)) console.log('file yes');
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


};
//-------------------Proccess.argv--------------
let argv=process.argv;
if(argv[2]){
	if(argv[3]){
		acssCompiler.run(argv[2],argv[3]);
	}else{
		acssCompiler.run(argv[2],'acss.css');
	}
}
//-----------------endPA

module.exports=acssCompiler;//end of acssCompiler



