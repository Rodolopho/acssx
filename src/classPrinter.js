 //const compiler=require("./compiler.js");
 const ACSSMediaQuery=require("../extension/mediaquery");
 const ACSSClone=require("../extension/clone");
 const statementMaker=require("./statementMaker");
// -------------------------------------------printer
//view
window.compiler=statementMaker;
 window.unValidACSSClassNames=[];
 var classPrinter={
 	//classlist to avoid repetation
 	classListAll:[],

 	//property an d value for acss stylesheet compiler
 	propertyNValueList:{},
 	tagStyleExists:false,
 	styleTagHolder:null,
	//create DOM style tag to hold the class printed
	styleTag:function(){
		if(this.tagStyleExists==true){ return this.styleTagHolder;}
			var styleTag=document.createElement("style");
			styleTag.id="styleAlias";
			document.getElementsByTagName("head")[0].appendChild(styleTag);
			this.styleTagHolder=styleTag;
			this.tagStyleExists=true;
			return styleTag;
	},
	//you can always apend a class if you like modify the look here if you want
	appendToStyleTag:function(classStatement){
       var createNewClass=document.createTextNode(classStatement);
      this.styleTag().appendChild(createNewClass);

	},
	
	main:function(element){
		//checking of class existance
		if(element.hasAttribute("class")){
			//Has a group
			if(element.getAttribute('acss')){
				var result=statementMaker.gp(element.getAttribute('acss'),element.getAttribute("class").trim());
				if(result){
						classPrinter.appendToStyleTag(result);
						// return true;
					}
				}

			//get class and trim out whitespaces
			var tmpClassList=element.getAttribute("class").trim();
			//make array of classname out of string
			if(tmpClassList.length){
				tmpClassList=tmpClassList.split(/\s+/);

			//looping class
			tmpClassList.forEach(function(eachClass){
					//escape reppeated classname

					if(classPrinter.classListAll.indexOf(eachClass)==-1){
						//add to classlist for refrerence
						classPrinter.classListAll.push(eachClass);
						
						// var result=compiler.main(eachClass);
						 var result=statementMaker.main(eachClass);
						 // console.log(result);

						if(result){
								classPrinter.appendToStyleTag(result);
						}else{
								//not a valid ACSS clasNames
								if(unValidACSSClassNames.indexOf(eachClass)==-1){
									unValidACSSClassNames.push(eachClass);
								}

							}
					}
				});

			}

		 }//if element has class attribute
		 
	 //If elemet is cloning classnames
	ACSSClone(element);

	},//eomain
	styleSheetCompiler:function(content){
		//console.warn(content);
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
		var match=/[{][\w|#|\-|:|;|\.|\(|\)|\s|\\|\"|\%|\!|\,|\']+[}]/g;
		var m1=/(?<=[{][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		var m2=/(?<=[;][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		var m3=/(?<=[;][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;
		
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

		 	console.log(e);
		 	return e;
			
		 });

		//return e;
	},
	launch:function(el){
		var $root=el||document;
		
		//1. HANDLE ACSS STYLESHEETS
		if(document.querySelector("[type='text/acss']")){
			var content=document.querySelector("[type='text/acss']").innerText;
			var compiledcontent=this.styleSheetCompiler(content);
			
			if(document.querySelector("[data-stylesheets='acss']")){
				var styleTag=document.querySelector("[data-stylesheets='acss']");
				styleTag.appendChild(document.createTextNode(compiledcontent));
				
			}else{
				var styleTag=document.createElement("style");
				styleTag.appendChild(document.createTextNode(compiledcontent));
				styleTag.setAttribute("data-stylesheets","acss")
				document.getElementsByTagName("head")[0].appendChild(styleTag);
			}
			
		}

		//2. HANDLE ACSS CLASSNAMES
		
		Array.prototype.forEach.call($root.getElementsByTagName("*"),function(e){
		classPrinter.main(e);
	});



},
//show user alias css on browser 
compile:function(){
  var classes=document.getElementById('styleAlias');
  if(classes){
    var preetyPrint=classes.innerHTML.replace(/\}/g,"</br>}</br>").replace(/\{/g,"{</br>&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write(preetyPrint);
  }else{
  	console.warn("There is not ACSS used in this document!!");
  	alert("CoundNot found any ACSS in this Document!");
  }
}
};
module.exports=classPrinter;

//-----------------------------end ofPrinter



