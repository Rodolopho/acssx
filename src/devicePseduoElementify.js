
let deviceAlias={
	match:/^(mob|tab|lab|hd|print|xs|sm|md|lg|xl)(?=[-|_])/,
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
 exports.deviceAlias=deviceAlias;
 exports.browserPrefix=["-moz-","-webkit-","-ms-"];
let flag={
"--active":":active",//-a	
"--after":"::after",//-af
"--after-hover":"::after:hover",
"--before":"::before",//-bf	
"--before-hover":"::before:hover",//-bf	
"--checked":":checked",	//-ck
"--default":":default",	//-df
"--disabled":":disabled",//-ds	
"--empty":":empty",//-em	
"--enabled":":enabled",//-en
"--first-child":":first-child",	//-fc
"--first-letter":"::first-letter",//-fl
"--first-line":"::first-line",//-fln	
"--first-of-type":":first-of-type",	//-fot
"--focus":":focus",//-fo	
"--hover":":hover",//-ho
"--hover-after":":hover::after",//-ho
"--hover-before":":hover::before",//-ho
"--hover-target":":hover:target",
"--in-range":":in-range",//-ir	
"--indeterminate":":indeterminate",//idt
"--invalid":":invalid",	//-in
"--lang-":":lang(language)",//-ln
"--last-child":":last-child",//-lc	
"--last-of-type":":last-of-type",//-lot	
"--link":":link",//-l	
"--not-":":not",//-n-	
"--nth-child-":":nth-child",//	-nc2n
"--nth-last-child-":":nth-last-child",//-nlc2n
"--nth-last-of-type-":":nth-last-of-type",	//-nlot2n
"--nth-of-type-":":nth-of-type",//-not	
"--only-of-type":":only-of-type",//-oot	
"--only-child":":only-child",//-oc	
"--optional":":optional",//-o	
"--out-of-range":":out-of-range",//-oor	
"--placeholder":"::placeholder",//-ph	
"--read-only":":read-only",//-ro
"--read-write":":read-write",//-rw	
"--required":":required",//-rq	
"--root":":root",//-rt		
"--selection":"::selection",//-sl	
"--target":":target",//-tg
"--valid":":valid",//-vl
"--visited":":visited",//-vi	
//short flag
"-a":":active",//-a	
"-af":"::after",//-af
"-afh":"::after:hover",
"-bf":"::before",//-bf	
"-bfh":"::before:hover",//-bf	
"-ch":":checked",	//-ck
"-de":":default",	//-df
"-di":":disabled",//-ds	
"-em":":empty",//-em	
"-en":":enabled",//-en
"-fc":":first-child",	//-fc
"-fl":"::first-letter",//-fl
"-fln":"::first-line",//-fln	
"-fot":":first-of-type",	//-fot
"-fo":":focus",//-fo	
"-h":":hover",//-ho
"-haf":":hover::after",//-ho
"-hbf":":hover::before",//-ho
"-htg":":hover:target",
"-ir":":in-range",//-ir	
"-ind":":indeterminate",//idt
"-inv":":invalid",	//-in
"-lan-":":lang(language)",//-ln
"-lc":":last-child",//-lc	
"-lot":":last-of-type",//-lot	
"-ln":":link",//-l	
"-n-":":not",//-n-	
"-nc-":":nth-child",//	-nc2n
"-nlc-":":nth-last-child",//-nlc2n
"-nlot-":":nth-last-of-type",	//-nlot2n
"-not-":":nth-of-type",//-not	
"-oot":":only-of-type",//-oot	
"-oc":":only-child",//-oc	
"-op":":optional",//-o	
"-oor":":out-of-range",//-oor	
"-ph":"::placeholder",//-ph	
"-ro":":read-only",//-ro
"-rw":":read-write",//-rw	
"-r":":required",//-rq	
"-rt":":root",//-rt		
"-s":"::selection",//-sl	
"-tg":":target",//-tg
"-v":":valid",//-vl
"-vi":":visited",//-vi	
};

let matchAndCall={
	 element:{
	 	match:/^_[_]?[a-z0-9_]+(?=[_|-])/,
	 	callFunction:elementHandler,

	 },
	 pseduoFullFlag:{
	 	match:/(^--(?!n)[a-z0-9]+(-child|-of-range|-of-type|-before|-after|-hover|-letter|-line|-range|-target|-only|-write)?)(?=[-|_])/,
	 	callFunction:pseduoFullFlag
	 },
	 pseduoNot:{
	 	match:/(^--not-([a-z0-9]+)(?=[-|_]))/,
	 	callFunction:pseduoHandlerNot,
	 },
	pseduoNthChild:{
		match:/(^--nth(-child-|last-child-|last-of-type|of-type-))([0-9]+[n]?)(?=[-|_])/,
		callFunction:pseduoHandlerNthChild,
	},
	 pseduoShortNth:{
	 	match:/^(-(n|nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/,
	 	callFunction:pseduoShortNth,
	 },
	 pseduoShort:{
	 	match:/^(-(a|af|afh|bf|bfh|ch|de|di|em|en|fc|fl|fln|fot|fo|h|haf|abf|htg|ir|ind|inv|lc|lot|ln|oot|oc|oor|ph|ro|rw|r|rt|s|tg|v|vi))(?=[-|_])/,
	 	callFunction:pseduoShort,
	 }


}

function deviceHandler(alias, content){
	if( deviceAlias.hasOwnProperty(alias)){
		return deviceAlias[alias]+'\n'+ content+ "\n } ";
	}else{

	}
}
function pseduoFullFlag(classname){
	
		let alias=classname.match(matchAndCall.pseduoFullFlag.match)[0];
			if(flag.hasOwnProperty(alias)){
				pseduo=flag[alias];
				classname=classname.replace(alias,"");
				return [classname, flag[alias]];
			}

			return [classname,'']
	

}
function pseduoHandlerNthChild (classname){
			let pseduo="";
			let m=classname.match(matchAndCall.pseduoNthChild.match);
			let alias=m[1];
			let classnamepre=m[0];
			let n=m[3];

			if(flag.hasOwnProperty(alias)){
				pseduo=flag[alias]+"("+n+")";
				classname=classname.replace(classnamepre,"");
			}

		return [classname, pseduo];
}
function pseduoHandlerNot (classname){
			let alias=classname.match(matchAndCall.pseduoNot.match)[0];
			 let pseduo=":not("+classname.match(matchAndCall.pseduoNot.match)[2]+")";
 			classname=classname.replace(alias,"");

 			return [classname, pseduo]

			
}
function pseduoShortNth(classname){
	let match=classname.match(matchAndCall.pseduoShortNth.match);
			 if(flag.hasOwnProperty(match[1])){
			 	return [classname.replace(match[0],''), flag[match[1]]+"("+match[3]+")"];
			 }
 			

 			return [classname, ""];
} 
function pseduoShort(classname){
	let match=classname.match(matchAndCall.pseduoShort.match);
			 if(flag.hasOwnProperty(match[1])){
			 	return [classname.replace(match[0],''), flag[match[1]]];
			 }
 			

 			return [classname, ""];
} 
function elementHandler(classname){
	let alias=classname.match(matchAndCall.element.match)[0];
	if(alias){
		  let elfy=alias.replace(/____/g," ~ ")
						.replace(/___/g," + ")
						.replace(/__/g," ")
						.replace(/_/g," > ").trim()

		return [ classname.replace(alias,"")," "+elfy];
	}
	return [classname, ""];
}

// ---------------while-Match---

function whileMatchNCall(classname){
	let before='';
	
	while(classname){
		let match=false;
		for(let key in matchAndCall){
			if(classname.match(matchAndCall[key].match)){
				match=true;
				let result=matchAndCall[key].callFunction(classname);
				if(!result[1]){
					match=false; 
				} 
				classname=result[0];
				before+=result[1];
				break;
			}else{
				
			}
		}
		// console.log(match);
	if(!match) break; 
	}

	return [classname, before];
	
	
}

//-----------whiel-match-end
exports.whileMatchNCall=whileMatchNCall;
exports.pseduoFullFlag=pseduoFullFlag;
exports.pseduoShort=pseduoShort;
exports.pseduoShortNth=pseduoShortNth;
exports.deviceHandler=deviceHandler;
exports.elementHandler=elementHandler;
exports.pseduoHandlerNthChild=pseduoHandlerNthChild;
exports.pseduoHandlerNot=pseduoHandlerNot;
exports.matchAndCall;
