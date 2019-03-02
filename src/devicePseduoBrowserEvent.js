exports.deviceAlias={
	match:/^(mob[-|_]|tab[-|_]|lab[-|_]|hd[-|_]|print[-|_]|xs[-|_]|sm[-|_]|md[-|_]|lg[-|_]|xl[-|_])/,
	"mob":"@media (max-width : 768px) {",
	"tab":"@media  (min-width : 768px){",
	"lap":"@media  (min-width : 992px) {",
	"desk":"@media  (min-width : 1200px) {",
	"hd":"@media  (min-width : 1408px) {",
	"print":"@media print{",
	"xs":"@media (max-width : 576px) {",
	"sm":"@media  (min-width : 576px) {",
	"md":"@media  (min-width : 768px) {",
	"lg":"@media  (min-width : 992px) {",
	"xl":"@media  (min-width : 1200px) {",
};
//Events to llok afterk
exports.eventAlias={
		match:/^(toggle|click|blur|change|dblclick|drag|keypress|scroll)[-|_]/,
		allowedEvents:['toggle','click','blur','change','dblclick','drag','keypress'],
};
//Pseduo Alias like :hover, :targetd, :after, :before etc
exports.pseudoAlias={
	 		matchit:/^(ck|en|v|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]/,
	 		alias:{afh:":after:hover",bfh:":before:hover",tg:"target",ck:"checked",dis:"disabled",
			en:"enabled",htg:"hover:target",lc:"last-child",fc:"first-child",nc:"nth-child",
			nlc:"nth-last-child",sel:":selection",flt:":first-letter",fln:":first-line",h:"hover",
			af:":after",bf:":before",haf:"hover::after",hbf:"hover::before",fo:"focus",ln:"link",a:"active",v:"visited"}
	 };

//browser Prefix	 
exports.browserPrefix=["-moz-","-webkit-","-ms-"];

//Each time compiler check and match the following pattern. if pattern matches then 
//Compiler will compile otherwise it will leaves it untouched.
//dont forget to take out pseduo , elements, device prefix before passing to main compiler onlt compiles 
//Raw and Pure classnames i.e which has just property and value
//Not used lately
exports.allowedPropertyAlias=/(aic|adu|tdu|bgp|bgs|bw|blw|brw|btw|btw|bbw|br|bblrs|btrrs|bblrs|btlrs|btm|bs|cw|cg|crw|fb|fs|fl[bcgis]|flse|h|l|lh|les|m|ma|mt|mr|mb|ml|xw|xh|mw|mh|mo|op|olw|olo|p|pa|pt|pr|pb|pl|pers|perso|r|t|tfo|ts|ti|va|w|ws|cc|fg|fs|o|ord|lh|orp|op|zib|brt|bl|bt|bb|ol|cr)[-]?[0-9]|c_|url[-_]|ff_|f_|(h|a|l|fo|af|bf)[-_]|bg[i]?(lg|rg)|tf|t_|an_/;
