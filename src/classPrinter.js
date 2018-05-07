 const compiler=require("./compiler.js");
 const ACSSMediaQuery=require("../extension/mediaquery");
 const ACSSClone=require("../extension/clone");
// -------------------------------------------printer
//view
window.compiler=compiler;
 var unValidACSSClassNames=[];
 
 var classPrinter={
 	//classlist to avoid repetation
 	classListAll:[],
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
						
						var result=compiler.main(eachClass);

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
		 
		 //Pseduo not supported at the time
		 if(element.hasAttribute("mq")){

			 	var getQuery=element.getAttribute("mq").trim();
			 	var queryPattern=/[\w|-]+:.+\[[\w|\s|-]+\]/;
			 	if(getQuery.match(queryPattern)){
			 		var query= new ACSSMediaQuery(getQuery);
			 		var mqstatememt=query.setQuery();
			 		if(mqstatememt){
			 		var mqClassName=query.className;
			 		var mqClassList=query.classList;
			 		var elementify="";

 					//Elementify class name
						if(mqClassName.match(/^_[a-z1-6|-]+_/)){
							elementify=" "+mqClassName.match(/^_[a-z1-6|-]+_/)[0].replace(/_/g,"").replace(/-/g," ")+" ";
					}//eoelementify


			 		var mainStatement="@media " + mqstatememt+"{\r\n" + "." + mqClassName+elementify+ "{\r\n";
			 		    if(mqClassList){
			 		    	var pseduoQ=[];
			 		    	var classArr=mqClassList.replace(/\s+/g," ").split(" ");

			 		    	classArr.forEach(function(e){

			 		    			var result=compiler.main(e);
			 		    			if(result){
			 		    				if(result[0].match(":")){
			 		    					pseduoQ.push(result);
			 		    				}else{
			 		    				mainStatement+=result[1]+";\r\n";
			 		    				}

			 		    			}

			 		    	});
			 		    	mainStatement+="\r\n" + "}\r\n";
			 		    	pseduoQ.forEach(function(e){
			 		    	var pseduo=e[0].split(/\w+:/)[1];
			 		    	mainStatement+="." + mqClassName+":"+pseduo+elementify+"{\r\n";

			 		    			mainStatement+=e[1]+";\r\n";

			 		    		mainStatement+="\r\n" + "}";

			 		    	});

			 		    mainStatement+="\r\n"+"}\r\n";
			 		    }

			 		    classPrinter.appendToStyleTag(mainStatement);
			 		}//if setquert()

			 	}






		}//if it has attribute for media query :mq

		ACSSClone(element);

	},//eomain
	launch:function(el){
		var $root=el||document;
		Array.prototype.forEach.call($root.getElementsByTagName("*"),function(e){
		classPrinter.main(e);
	});



},
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



