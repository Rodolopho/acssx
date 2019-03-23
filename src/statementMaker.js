
//imports
// var aliasProperty=require('./propertyAlias');
 var staticClassNames=require("./staticClassNames")
// var prefixAlias=require("./devicePseduoBrowserEvent");
var prefixAlias=require("./devicePseduoElementify.js");
var compiler=require('./compilePropertyAndValue.js');

 statementMaker= {
 	staticClassNames:staticClassNames,
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
	gp:function(group,classnames){
		return this.group(classnames,group);
	},

	//end for lite version
	hasDevice:null,
	hasSuffix:"",
	statement:"",
	browserPrefix:prefixAlias.browserPrefix,
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
	

	main:function(classname,as,bool){
		this.statement=as?as:classname;
		if(classname.match(prefixAlias.deviceAlias.match)){
			let devicePrefix=classname.match(prefixAlias.deviceAlias.match)[0];
			this.hasDevice=devicePrefix;
			classname=classname.replace(devicePrefix,"");

		}else{
			this.hasDevice=null;
		}

		 let pseduohandler=prefixAlias.whileMatchNCall(classname);

		 classname=pseduohandler[0];
		 //this.hasBeforePrefix=pseduohandler[1];
    // Finally Handle Proeperty and Value
							
			var propertyNValue=this.getPropertyAndValue(classname.replace(/^[_-]/, ""));	

			if(bool===true){
				return [this.hasDevice,pseduohandler[1],propertyNValue]
			}									 

   	//return statement to class printer or caller
	    if(propertyNValue){
	    	//for group
	    	if(bool===true){
				return [this.hasDevice,pseduohandler[1],propertyNValue]
			}
			//--END for Group
	    	this.statement="."+this.statement+pseduohandler[1]+" { "+propertyNValue+"; } ";
	    	if(this.hasDevice){
	    		return prefixAlias.deviceHandler(this.hasDevice, this.statement);
				return this.hasDevice+'\n'+ this.statement+ "\n } ";
			}else{
				return this.statement;
			}
		}else{
			return false;
		}

},//end of main function
group:function(classname,as){
	if(!classname && !as) return false;
		let statement="\n";
		let statementPseudo="";

		
    var list=classname.trim().split(/\s+/);

    var _this=this;
    list.forEach(function(each){

    	var result=_this.main(each,as,true);
    	if(result[0] || result[1]){
    		let s="."+as+result[1]+"{"+result[2]+"; } ";
    		if(result[0]){
    			statementPseudo+=prefixAlias.deviceHandler(result[0], s)+"\n";
    			// statementPseudo+="."+as+pseduohandler[1]+" { "+propertyNValue+"; } ";
    		}else{
    			statementPseudo+=s+"\n";
    		}
    		

    	}else{
    		if(result[2]){
    			statement+=result[2]+";\n";
    		}
    	}
    	
    	
    });
    return "."+as+"{"+statement+"}\n"+statementPseudo;
							
},//end of group function

}//end of statementMaker;


 module.exports=statementMaker;





