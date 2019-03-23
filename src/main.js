const classPrinter=require("./classPrinter");
// var staticClassNames=require("./staticClassNames")
// const statementMaker=require("./statementMaker");
const acssLiveUpdate=require("./acssliveupdate");

window.openAcssLiveEditor=acssLiveUpdate;
window.closeAcssLiveEditor=function(){
	    var ele=document.getElementById("quickChangeBox");
    	ele.parentNode.removeChild(ele);
};

let ACSS={
compile:function(classname){
		return this.statementMaker.main(classname);
	},
toString:function(){return "ACSS Object";},
classPrinter:classPrinter,


statementMaker:classPrinter.statementMaker,
extend:function(a,b){
	if(typeof(a) ==='object' ){
		for(let key in a){
			if(this.statementMaker.staticClassNames.hasOwnProperty(key)){
				console.error(Key +": already  in use for '"+key+":"+this.statementMaker.staticClassNames[key]+"' Try with another classname" );
			}else{
				this.statementMaker.staticClassNames[key]=a[key];
			}
			
		}
	}else{
		if(a && b){
			if(this.statementMaker.staticClassNames.hasOwnProperty(a)){
				console.error(a+": already  in use for '"+a+":"+this.statementMaker.staticClassNames[a]+"' Try with another classname" );
			}else{
				this.statementMaker.staticClassNames[a]=b;
			}
		}
	}

},
liveEditor:acssLiveUpdate,
// push:false;

// push:function(l){
// 	if(l){
// 		this.pushURL=l;
// 	}else{
// 		this.pushURL=window.location.origin+"/live-update";
// 	}

// },
closeEditor:function(){
	    var ele=document.getElementById("quickChangeBox");
	    if(ele) ele.parentNode.removeChild(ele);
},

};

ACSS.classPrinter.launch();
if(!window.ACSS){
	window.ACSS=ACSS;
}
// module.exports=ACSS;
