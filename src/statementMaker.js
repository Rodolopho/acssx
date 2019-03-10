
//imports
var aliasProperty=require('./propertyAlias');
var staticClassNames=require("./staticClassNames")
var devicePesduoBrowserEventAlias=require("./devicePseduoBrowserEvent");
var compiler=require('./compilePropertyAndValue.js');

var statementMaker={
	//for lite Version
	allStaticClassStatements:function(){
		let statements="/*Acss Static Classname/*";
			for (key in staticClassNames){
				statements+="\n"+this.main(key);
			}

			return statements;
	},
	//shorthand for rename
	as:function(rename,classname){
		return this.main(classname, rename);
	},
	//shorthand for group function
	gp:function(group,classnames,prefix){
		return this.group(classnames,group,prefix);
	},

	//end for lite version
	hasDevice:null,
	hasSuffix:"",
	statement:"",
	browserPrefix:devicePesduoBrowserEventAlias.browserPrefix,
	//Get only properties and values
	getPropertyAndValue:function(eachClass){
		if(!eachClass) return false;
		//-------------Handle Suffix like !important default
		this.hasSuffix="",
		eachClass=this.handleSuffix(eachClass);


		// console.log(eachClass);

		var propertyNValue=null;
		eachClass=eachClass.trim();
		
//Case 1: Static Classname defination---------------------------------static className Handeler--------------------------------
					if(staticClassNames.hasOwnProperty(eachClass)){
					//console.log("ststic:"+eachClass);
					 propertyNValue=staticClassNames[eachClass]+this.hasSuffix;
					 return propertyNValue;
					
					}

//Case 2: Dynamic Classname Defination-----------------------------------------------------------------------------------------------------------------
					for (key in compiler.matchAndCall){

						if(eachClass.match(compiler.matchAndCall[key].match)){
							//console.log(eachClass);
							var result=compiler.matchAndCall[key].callFunction(eachClass);
							if(eachClass.match(/^(pers|perso|fl)/)){
							//if(eachClass.match(/^(tf|t_|pers|perso|fl|txs|bxs)/)){//check if its need prefix for property
								//var classname=stateModifier[0]+eachClass+stateModifier[1];
								var statementConcat="";//."+stateModifier[0]+eachClass+stateModifier[1]+"{";
								this.browserPrefix.forEach(function(prefix){
									statementConcat+=prefix+result[0]+":"+result[1]+";";

								});
								statementConcat+=result[0]+":"+result[1];
								propertyNValue=statementConcat;
								//value based prfirex
							}else if(eachClass.match(/^bg[i]?[l|r]g/)){
								//var className=stateModifier[0]+eachClass+stateModifier[1];
								var statementConcat="";//."+stateModifier[0]+eachClass+stateModifier[1]+"{";
								this.browserPrefix.forEach(function(prefix){
									statementConcat+=result[0]+":"+prefix+result[1]+";";

								});
								 statementConcat+=result[0]+":"+result[1];
								 propertyNValue = statementConcat;

								//compiler.appendToStyleTag(statementConcat);

							}else{//eoprfixissue
								propertyNValue = result[0]+":" + result[1];
								//compiler.appendToStyleTag("."+stateModifier[0]+eachClass+stateModifier[1]+"{"+result[0]+":"+result[1]+";}");
							}
							break;


							}
			      }//End of foreach
//------------------------------------------------------------------------------------------------------------------
		

		return propertyNValue? propertyNValue + this.hasSuffix:null;
	},//end of get proprty and value

	//Handle !important !default.....
	handleSuffix:function(classname){
			var match=/[-_]([id])$/
		if(classname.match(match)){
			if(classname.match(match)[1]=="i"){
				this.hasSuffix=" !important";
			}else if(classname.match(match)[1]=="d"){
				this.hasSuffix=" !default";
			}
			return classname.replace(match,'');

		}else{
			return classname;
		}
	},//end of Handle suffix

	main:function(cn,as){
		if(!cn) return false;
		//console.log(this.statement);
		this.statement=as?as:cn;

		//check and handle device's for responsive

		if(cn.match(devicePesduoBrowserEventAlias.deviceAlias.match)){
			// console.log(cn);
			//console.log(devicePesduoBrowserEventAlias.deviceAlias.match);
			//if(cn.match(devicePesduoBrowserEventAlias.deviceAlias.match)){
 				var prefix=cn.match(devicePesduoBrowserEventAlias.deviceAlias.match)[0];
 				cn=cn.replace(prefix,'');
 				if(prefix.match(/^[-|_]/)){
 					this.hasDevice=devicePesduoBrowserEventAlias.deviceAlias[prefix];

 				}else{
 					this.hasDevice=devicePesduoBrowserEventAlias.deviceAlias[prefix.replace(/[-|_]/,"")];
 				}
		//}

    	}else{ this.hasDevice=false;}//handle device done

    //handle elment prefix attribute prefix and psedo prefix
    while(cn.match(/^(ck|en|v|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]|^([-][a-z1-9|_]+[-])|^([_][a-z1-9|-]+[_])/)){
    	var prefix= cn.match(/^(ck|en|v|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]|([-][a-z1-9|_]+[-])|([_][a-z1-9|-]+[_])/)[0];
    	//case Pesudo clas and selector
    	if(prefix.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)){
				var psedoPrefix=prefix.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)[1];
				
				//handle nth child 
				if(psedoPrefix.match(/n[l]?c[0-9]+/)){
					var matchV=psedoPrefix.match(/(n[l]?c)([0-9]+[n]?)/);
					this.statement=this.statement+":"+devicePesduoBrowserEventAlias.pseudoAlias.alias[matchV[1]]+"("+matchV[2]+")";
				

				}else{//handle rest of pseduo..
					this.statement=this.statement+":"+devicePesduoBrowserEventAlias.pseudoAlias.alias[cn.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)[1]];
				}
				//need to udate incomplte this process
		}else if(prefix.match(/^([-][a-z1-9|_]+[-])/)){
					//this is sttribute
					attributePrefix=prefix.match(/^([-][a-z1-9|_]+[-])/)[0];
					attributePrefix=attributePrefix.replace(/____/,"*=");
					attributePrefix=attributePrefix.replace(/___/,"$=");
					attributePrefix=attributePrefix.replace(/__/,"^=");
					attributePrefix=attributePrefix.replace(/_/,"=");
					attributePrefix=attributePrefix.replace(/-/g,"");

					this.statement+= " ["+attributePrefix+"]";

		}else if(prefix.match(/^([_][a-z1-9|-]+[_])/)){
					//this is for element
					elementPrefix=prefix.match(/^([_][a-z1-9|-]+[_])/)[0];
					elementPrefix=prefix.replace(/----/g," ~ ");
					elementPrefix=prefix.replace(/---/g," + ");
					elementPrefix=prefix.replace(/--/g," > ");
					elementPrefix=prefix.replace(/-/g," ");
					this.statement+=" " + elementPrefix.replace(/_/g,'');
		}
    	cn=cn.replace(prefix,"")
    	//console.log(cn);
    }//end of while

    // Finally Handle Proeperty and Value
							
			var propertyNValue=this.getPropertyAndValue(cn);										 

   	//return statement to class printer or caller
	    if(propertyNValue){
	    	this.statement="."+this.statement+" { "+propertyNValue+"; } ";
	    	if(this.hasDevice){
	    		
				return this.hasDevice+'\n'+ this.statement+ "\n } ";
			}else{
				return this.statement;
			}
		}else{
			return false;
		}
  

    

},//end of main function
group:function(cn,as,prefixs){
	//cn is string of classnames 
		if(!cn) return false;
		if(!as) return false;
		//console.log(this.statement);
		this.statement=as;

		//check and handle device's for responsive
		if(prefixs){
			if(prefixs.match(devicePesduoBrowserEventAlias.deviceAlias.match)){
			//console.log(cn);
			//console.log(devicePesduoBrowserEventAlias.deviceAlias.match);
			//if(cn.match(devicePesduoBrowserEventAlias.deviceAlias.match)){
 				var prefix=prefixs.match(devicePesduoBrowserEventAlias.deviceAlias.match)[0];
 				prefixs=prefixs.replace(prefix,'');
 				if(prefix.match(/^[-|_]/)){
 					this.hasDevice=devicePesduoBrowserEventAlias.deviceAlias[prefix];

 				}else{
 					this.hasDevice=devicePesduoBrowserEventAlias.deviceAlias[prefix.replace(/[-|_]/,"")];
 				}
		//}

    	}else{ this.hasDevice=false;}//handle device done
    		//handle elment prefix attribute prefix and psedo prefix
    while(prefixs.match(/^(ck|en|v|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]|^([-][a-z1-9|_]+[-])|^([_][a-z1-9|-]+[_])/)){
    	var prefix= prefixs.match(/^(ck|en|v|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]|([-][a-z1-9|_]+[-])|([_][a-z1-9|-]+[_])/)[0];
    	//case Pesudo clas and selector
    	if(prefix.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)){
				var psedoPrefix=prefix.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)[1];
				
				//handle nth child 
				if(psedoPrefix.match(/n[l]?c[0-9]+/)){
					var matchV=psedoPrefix.match(/(n[l]?c)([0-9]+[n]?)/);
					this.statement=this.statement+":"+devicePesduoBrowserEventAlias.pseudoAlias.alias[matchV[1]]+"("+matchV[2]+")";
				

				}else{//handle rest of pseduo..
					this.statement=this.statement+":"+devicePesduoBrowserEventAlias.pseudoAlias.alias[prefixs.match(devicePesduoBrowserEventAlias.pseudoAlias.matchit)[1]];
				}
				//need to udate incomplte this process
		}else if(prefix.match(/^([-][a-z1-9|_]+[-])/)){
					//this is sttribute
					attributePrefix=prefix.match(/^([-][a-z1-9|_]+[-])/)[0];
					attributePrefix=attributePrefix.replace(/____/,"*=");
					attributePrefix=attributePrefix.replace(/___/,"$=");
					attributePrefix=attributePrefix.replace(/__/,"^=");
					attributePrefix=attributePrefix.replace(/_/,"=");
					attributePrefix=attributePrefix.replace(/-/g,"");

					this.statement+= " ["+attributePrefix+"]";

		}else if(prefix.match(/^([_][a-z1-9|-]+[_])/)){
					//this is for element
					elementPrefix=prefix.match(/^([_][a-z1-9|-]+[_])/)[0];
					elementPrefix=prefix.replace(/----/g," ~ ");
					elementPrefix=prefix.replace(/---/g," + ");
					elementPrefix=prefix.replace(/--/g," > ");
					elementPrefix=prefix.replace(/-/g," ");
					this.statement+=" " + elementPrefix.replace(/_/g,'');
		}
    	prefixs=prefixs.replace(prefix,"")
    	//console.log(cn);
    }//end of while

		}//end of if prefix
		

    

    // Finally Handle Proeperty and Value
    var list=cn.trim().split(/\s+/);
    var propertyNValues="";
    var _this=this;
    list.forEach(function(each){
    	var result=_this.getPropertyAndValue(each);
    	if(result){
    		console.log("hhhheeee");
    		propertyNValues+=result+";\n";
    	}
    	
    });
							
													 

   	//return statement to class printer or caller
	    if(propertyNValues){
	    	this.statement="."+this.statement+" { "+propertyNValues+" } ";
	    	if(this.hasDevice){
	    		
				return this.hasDevice+'\n'+ this.statement+ "\n } ";
			}else{
				return this.statement;
			}
		}else{
			return false;
		}
  

    

},//end of group function

}//end of statementMaker;

 module.exports=statementMaker;





