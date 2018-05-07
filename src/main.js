const classPrinter=require("./classPrinter");

const acssLiveUpdate=require("./acssliveupdate");

window.openAcssLiveEditor=acssLiveUpdate;
classPrinter.launch();
window.classPrinter=classPrinter;
acssLiveUpdate();