const classPrinter=require("./classPrinter");

const acssLiveUpdate=require("./acssliveupdate");

window.openAcssLiveEditor=acssLiveUpdate;
window.closeAcssLiveEditor=function(){
	    var ele=document.getElementById("quickChangeBox");
    	ele.parentNode.removeChild(ele);
};

classPrinter.launch();
window.classPrinter=classPrinter;
