var path=require('path');
var fs=require('fs');
var compiler=require('./src/compiler.js');

var data=fs.readFileSync('./old-ref/index.html', 'utf-8');
let acssCompiler={
	classList:[],
	input:null,
	output:null,
	re:/[\s]+class=[\s]*['|"][\s]*([-|_|a-z0-9|\s]*)[\s]*['|"]/g,
	compileStatement:"/* AliasCSS : This file is compile by AliasCSS Compiler*/\n\n\n",
	extractClassName:function(data){
			let found;
			let that=this;
			while((found=this.re.exec(data))!==null){
				
				var result=found[1].trim().split(/\s+/);
				result.forEach(function(e){
					if(that.classList.indexOf(e)===-1){
						that.classList.push(e);
					}
				})
			}

			return this;
	},
	compile:function(){
				let statement;
				let that=this;
				if(this.classList){

					this.classList.forEach(function(e){

						if((statement=compiler.main(e))!==false){
							
							that.compileStatement=that.compileStatement+statement+"\n";
						}
						
					});
					return this;
				}
	},
	run:function(input,output){
		if(input){
			this.input=input;
		}
		if(output){
			this.output=output;
		}
		if(this.input && this.output){
			this.extractClassName(input);
			this.compile();
			if(this.compileStatement){
				console.log(fs.writeFileSync(this.output, this.compileStatement));

			}
		}else{
			console.error("Please provide, entry or/and output file/s");
		}
		
	},


};module.exports=acssCompiler;//end of acssCompiler
acssCompiler.input=data;
acssCompiler.run(data,"./acss.css");

