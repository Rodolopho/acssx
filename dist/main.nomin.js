/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//var AliasProperty={
	module.exports={

	//Property Alias Object

		"an":"animation",//-------------##
		"adl":"animation-delay",//----------------##
		"adu":"animation-duration",//-------------##
		"aic":"animation-iteration-count",
		//"an":"animation-name",
		"all":"all",
		"atf":"animation-timimg-function",//atfcb0d1-0d7-1-0d1=animation-timimg-function:cubic-bezeir(0.1,0.7,1,0.1) for negative value use -- or _-1d5//
		"b"  :"border",
		"bb"  :"border-bottom",
		"bbc"  :"border-bottom-color",
		"bblr":"border-bottom-left-radius",
		"bbrr": "border-bottom-right-radius",
		"bbw"  :"border-bottom-width",
		"bc" :"border-color",
		"bg"  :"background",//-------
		"bgc"  :"background-color",//-----------
		"bgi"  :"background-image",//----------
		"bgp"  :"background-position",//----------
		"bgs":"background-size",//-----------
		"bl"  :"border-left",
		"blc"  :"border-left-color",
		"brt"  :"border-right",//--------------#
		"brc"  :"border-right-color",//---------------
		"br"  :"border-radius",
		"brw"  :"border-right-width",
		"bs"  :"border-spacing",
		"bt"  :"border-top",
		"btc"  :"border-top-color",
		"btlr":"border-top-left-radius",
		"btm"  :"bottom",//-----------------------#
		"btrr": "border-top-right-radius",
		"btw"  :"border-top-width",
		"bw"  :"border-width",
		"bxs":"box-shadow",//----------------------------#
		"c"  :"color",
		"cc":"column-count",
		"cg":"column-gap",
		"ci"  :"counter-increment",
		"cols":"columns",//------------#
		"con"  :"content",//string//------------#
		"cp"  :"clip",//-----------
		"cr"   :"counter-reset",//----------
		"cr2":"column-rule",//-----------#
		"crc":"column-rule-color",//#
		"crw":"column-rule-width",//#
		//"c"  :"cursor",
		"cw":"column-width",
		"f_"    :"font",
		"f":"flex",
		"fb":"flex-basis",
		"ff"  :"font-family",
		"fg":"flex-grow",
		"fl":"filter",//--------------
		"fs"  :"font-size",
		"fsk":"flex-shrink",//--------------
		"fsa":"font-size-adjust",
		"h":"height",
		"i":"icon",
		"io":"image-orientation",
		"ir":"image-resolution",
		"key":"@keyframes",
		"l"  :"left",
		"les"  :"letter-spacing",//--------
		"lh"  :"line-height",
		"ls"  :"list-style",
		"lsi"  :"list-style-image",
		"m"  :"margin",
		"ma" :"margin",
		"mb"  :"margin-bottom",
		"mh"  :"min-height",
		"ml"  :"margin-left",
		"mo"  :"marker-offset",
		"mr"  :"margin-right",
		"mt"  :"margin-top",
		"mw"  :"min-width",
		"ord":"order",//-------
		"ol"  :"outline",//-------
		"olc"  :"outline-color",//-----
		"olo":"outline-offset",//---------
		"olw"  :"outline-width",//--------
		"op":"object-position",//-----------
		"o":"opacity",
		"orp":"orphans",//------
		"p"  :"padding",
		"pb"  :"padding-bottom",
		"pers":"perspective",//--------
		"perso":"perspective-origin",
		"pl"  :"padding-left",
		"pr"  :"padding-right",
		"pt"  :"padding-top",
		"q"    :"quotes",//string
		"r"  :"right",
		"t"  :"top",
		"t_": "transition",//---------
		"tdl":"transition-delay",//---
		"tdu":"transition-duration",//-----
		"tf":"transform",//----
		"tfo":"transform-origin",//--------
		"tbs":"tab-size",//------------*
		"ttf":"transition-timing-function",
		"ta":"text-align",//string
		"tdc":"text-decoration-color",
		"te":"text-emphasis",
		"tec":"text-emphasis-color",
		"ti" : "text-indent",
		"to":"text-overflow",//string
		"ts" :"text-shadow",
		"va":"vertical-align"	,
		"w" :"width",
		"ws":"word-spacing",
		"xh"  :"max-height",//------
		"xw"  :"max-width",//----------------
		"zi":"z-index",
		


};//endof Property Alias

/***/ }),
/* 1 */
/***/ (function(module, exports) {



//Static ClassName Defination
module.exports={
	
acfe:"-webkit-align-content: flex-end;-ms-flex-line-pack: end;align-content: flex-end",//
acfs:"-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start",
acsa:"-webkit-align-content: space-around;-ms-flex-line-pack: distribute;align-content: space-around",
acsb:"-webkit-align-content: space-between;-ms-flex-line-pack: justify;align-content: space-between",
acs:"-webkit-align-content: stretch;-ms-flex-line-pack: stretch;align-content: stretch",
adar:"-webkit-animation-direction: alternate-reverse;animation-direction: alternate-reverse",
ada:"-webkit-animation-direction: alternate;animation-direction: alternate",
adnl:"-webkit-animation-direction: normal;animation-direction: normal",
adn:"-webkit-animation-direction: normal;animation-direction: normal",
adr:"-webkit-animation-direction: reverse;animation-direction: reverse",
afmb:"-webkit-animation-fill-mode: backwards;animation-fill-mode: backwards",
afmbo:"-webkit-animation-fill-mode: both;animation-fill-mode: both",
afmb2:"-webkit-animation-fill-mode: both;animation-fill-mode: both",
afmf:"-webkit-animation-fill-mode: forwards;animation-fill-mode: forwards",
afmn:"-webkit-animation-fill-mode: none;animation-fill-mode: none",
aib:"-webkit-align-items: baseline;-ms-flex-align: baseline;align-items: baseline",
aici:"-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite",
aic:"-webkit-align-items: center;-ms-flex-align: center;align-items: center",
aife:"-webkit-align-items: flex-end;-ms-flex-align: end;align-items: flex-end",
aifs:"-webkit-align-items: flex-start;-ms-flex-align: start;align-items: flex-start",
ain:"all: inherit",
ais:"-webkit-align-items: stretch;-ms-flex-align: stretch;align-items: stretch",
ai:"all: initial",
ann:"-webkit-animation-name: none;animation-name: none",
apsp:"-webkit-animation-play-state: paused;animation-play-state: paused",
apsr:"-webkit-animation-play-state: running;animation-play-state: running",
asa:"-webkit-align-self: auto;-ms-flex-item-align: auto;align-self: auto",
asb:"-webkit-align-self: baseline;-ms-flex-item-align: baseline;align-self: baseline",
asc:"-webkit-align-self: center;-ms-flex-item-align: center;align-self: center",
asfe:"-webkit-align-self: flex-end;-ms-flex-item-align: end;align-self: flex-end",
asfs:"-webkit-align-self: flex-start;-ms-flex-item-align: start;align-self: flex-start",
ass:"-webkit-align-self: stretch;-ms-flex-item-align: stretch;align-self: stretch",
atfeio:"-webkit-animation-timing-function: ease-in-out;animation-timing-function: ease-in-out",
atfei:"-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in",
atfeo:"-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out",
atfe:"-webkit-animation-timing-function: ease;animation-timing-function: ease",
atfl:"-webkit-animation-timing-function: linear;animation-timing-function: linear",
atfse:"-webkit-animation-timing-function: step-end;animation-timing-function: step-end",
atfss:"-webkit-animation-timing-function: step-start;animation-timing-function: step-start",
au:"all: unset",
b0:"border:0",
baac:"-webkit-column-break-after: avoid-column;page-break-after: avoid-column;break-after: avoid-column",

baf:"box-align: after",
baal:"-webkit-column-break-after: always;page-break-after: always;break-after: always",
baa3:"-webkit-column-break-after: always;page-break-after: always;break-after: always",
baap:"-webkit-column-break-after: avoid;page-break-after: avoid;break-after: avoid-page",
baa:"-webkit-column-break-after: auto;page-break-after: auto;break-after: auto",
baav:"-webkit-column-break-after: avoid;page-break-after: avoid;break-after: avoid",
baa2:"-webkit-column-break-after: avoid;page-break-after: avoid;break-after: avoid",
babl:"box-align: baseline",
bab2:"box-align: baseline",
bab:"box-align: before",
bac:"-webkit-column-break-after: column;page-break-after: column;break-after: column",
bal:"-webkit-column-break-after: left;page-break-after: left;break-after: left",
bam:"box-align: middle",
bap:"-webkit-column-break-after: page;page-break-after: page;break-after: page",
bar:"-webkit-column-break-after: right;page-break-after: right;break-after: right",
btma:"bottom: auto",
ba:"bottom: auto",
bas:"box-align: stretch",
bbac:"-webkit-column-break-before: avoid-column;page-break-before: avoid-column;break-before: avoid-column",
bbal:"-webkit-column-break-before: always;page-break-before: always;break-before: always",
bba3:"-webkit-column-break-before: always;page-break-before: always;break-before: always",
bbap:"-webkit-column-break-before: avoid;page-break-before: avoid;break-before: avoid-page",
bba:"-webkit-column-break-before: auto;page-break-before: auto;break-before: auto",
bbav:"-webkit-column-break-before: avoid;page-break-before: avoid;break-before: avoid",
bba2:"-webkit-column-break-before: avoid;page-break-before: avoid;break-before: avoid",
bbc_t:"border-bottom-color: transparent",
bbct:"border-bottom-color: transparent",
bbcn:"border-bottom-color:none",
bbcin:"border-bottom: inherit",
bbc_in:"border-bottom: inherit",
bbc:"-webkit-column-break-before: column;page-break-before: column;break-before: column",
bbl:"-webkit-column-break-before: left;page-break-before: left;break-before: left",
bbp:"-webkit-column-break-before: page;page-break-before: page;break-before: page",
bbr:"-webkit-column-break-before: right;page-break-before: right;break-before: right",
bbsdb:"border-bottom-style: double",
bbsds:"border-bottom-style: dashed",
bbsdt:"border-bottom-style: dotted",
bbsd2:"border-bottom-style: double",
bbsd:"border-bottom-style: dashed",
bbsd3:"border-bottom-style: dotted",
bbsg:"border-bottom-style: groove",
bbsh:"border-bottom-style: hidden",
bbsi:"border-bottom-style: inset",
bbsn:"border-bottom-style: none",
bbso:"border-bottom-style: outset",
bbsr:"border-bottom-style: ridge",
bbss:"border-bottom-style: solid",
bbwm:"border-bottom-width: medium",
bbwt:"border-bottom-width: thick",
bbwtn:"border-bottom-width: thin",
bbwt2:"border-bottom-width: thin",//------------
bc_t:"border-color: transparent",
bct:"border-color: transparent",
bcin:"border-color: inherit",
bci:"border-color: inherit",
bci2:"border-color: initial",//--------
bc_in:"border-color: inherit",
bcn:"border-color:none",
bcc:"border-collapse: collapse",
bcs:"border-collapse: separate",
bdbc:"-webkit-box-decoration-break: clone;box-decoration-break: clone",
bdbs:"-webkit-box-decoration-break: slice;box-decoration-break: slice",
bgaf:"background-attachment: fixed",
bgal:"background-attachment: local",
bgas:"background-attachment: scroll",
bgcbb:"background-clip: border-box",
bgccb:"background-clip: content-box",
bgcin:"background-color:inherit",
bgc_in:"background-color:inherit",
bgcpb:"background-clip: padding-box",
bgct:"background-color: transparent",
bgt:"background: transparent",
bgn:"background:none",
bgcn:"background-color:none",
bgc_t:"background-color: transparent",
bgin:"background-image: none",
bgobb:"background-origin: border-box",
bgocb:"background-origin: content-box",
bgoin:"background-origin: inherit",
bgopb:"background-origin: padding-box",
bgpc:"background-position: center center",
bgpl:"background-position: left top",
bgpr:"background-position: right bottom",
bgrn:"background-repeat: no-repeat",
bgrnr:"background-repeat: no-repeat",
bgrrn:"background-repeat: repeat no-repeat",
bgrrnr:"background-repeat: repeat no-repeat",
bgpct:"background-position: center center",
bgplt:"background-position: left top",
bgprb:"background-position: right bottom",
bgnr:"background-repeat: no-repeat",
bgrnr:"background-repeat: repeat no-repeat",
bgrr:"background-repeat: repeat",
bgrro:"background-repeat: round",
bgrs:"background-repeat: space",
bgrx:"background-repeat: repeat-x",
bgrrx:"background-repeat: repeat-x",
bgry:"background-repeat: repeat-y",
bgrry:"background-repeat: repeat-y",
bgsa:"background-size: auto",
bgscon:"background-size: contain",
bgsc:"background-size: cover",
bgsc2:"background-size:contain",
biac:"-webkit-column-break-inside: avoid;page-break-inside: avoid;break-inside: avoid-column",
biap:"page-break-inside: avoid;break-inside: avoid-page",
bia:"-webkit-column-break-inside: auto;page-break-inside: auto;break-inside: auto",
biav:"-webkit-column-break-inside: avoid;page-break-inside: avoid;break-inside: avoid",
bia2:"-webkit-column-break-inside: avoid;page-break-inside: avoid;break-inside: avoid",
birro:"border-image-repeat: round",
birr:"border-image-repeat: repeat",
bir2:"border-image-repeat: repeat",//--------------
birsth:"border-image-repeat: stretch",
birs2:"border-image-repeat: stretch",
birs:"border-image-repeat: space",
bisn:"border-image-source: none",
blc_t:"border-left-color: transparent",
blct:"border-left-color: transparent",
blcn:"border-left-color: none",
blsdb:"border-left-style: double",
blsds:"border-left-style: dashed",
blsdt:"border-left-style: dotted",
blsd2:"border-left-style: double",//------------
blsd:"border-left-style: dashed",
blsd3:"border-left-style: dotted",
blsg:"border-left-style: groove",
blsh:"border-left-style: hidden",
blsi:"border-left-style: inset",
blsn:"border-left-style: none",
blso:"border-left-style: outset",
blsr:"border-left-style: ridge",
blss:"border-left-style: solid",
blwm:"border-left-width: medium",
blwt:"border-left-width: thick",
blwtn:"border-left-width: thin",
blwt2:"border-left-width: thin",
bn:"border:none",
bbn:"border-bottom:none",
brn:"border-right:none",
btno:"border-top:none",//conflict with bootrap
bln:"border-left:none",
brcn:"border-right-color: none",
brc_t:"border-right-color: transparent",
brct:"border-right-color: transparent",
brsdb:"border-right-style: double",
brsds:"border-right-style: dashed",
brsdt:"border-right-style: dotted",
brsd2:"border-right-style: double",//-----------------
brsd:"border-right-style: dashed",
brsd3:"border-right-style: dotted",
brsg:"border-right-style: groove",
brsh:"border-right-style: hidden",
brsi:"border-right-style: inset",
brsn:"border-right-style: none",
brso:"border-right-style: outset",
brsr:"border-right-style: ridge",
brss:"border-right-style: solid",
brwm:"border-right-width: medium",
brwt:"border-right-width: thick",
brwtn:"border-right-width: thin",
brwt2:"border-right-width: thin",
bsbb:"box-sizing: border-box",
bscb:"box-sizing: content-box",
bsdb:"border-style: double",
bsds:"border-style: dashed",
bsdt:"border-style: dotted",
bsd2:"border-style: double",//--------------
bsd:"border-style: dashed",
bsd3:"border-style: dotted",
bsg:"border-style: groove",
bsh:"border-style: hidden",
bsi:"border-style: inset",
bsin:"box-sizing:inherit",
bsi2:"box-sizing:inherit",
bsn:"border-style: none",
bxsn:"box-shadow: none",
bso:"border-style: outset",
bspb:"box-sizing: padding-box",
bspb:"box-sizing: padding-box",
bsr:"border-style: ridge",
bss:"border-style: solid",
btc_t:"border-top-color: transparent",
btct:"border-top-color: transparent",
btcn:"border-top-color: none",
btsdb:"border-top-style: double",
btsds:"border-top-style: dashed",
btsdt:"border-top-style: dotted",
btsd2:"border-top-style: double",
btsd:"border-top-style: dashed",
btsd3:"border-top-style: dotted",
btsg:"border-top-style: groove",
btsh:"border-top-style: hidden",
btsi:"border-top-style: inset",
btsn:"border-top-style: none",
btso:"border-top-style: outset",
btsr:"border-top-style: ridge",
btss:"border-top-style: solid",
btwm:"border-top-width: medium",
btwt:"border-top-width: thick",
btwtn:"border-top-width: thin",
btwt2:"border-top-width: thin",//------------------
bvh:"-webkit-backface-visibility: hidden;backface-visibility: hidden",
bvv:"-webkit-backface-visibility: visible;backface-visibility: visible",
bwm:"border-width: medium",
bwt:"border-width: thick",
bwtn:"border-width: thin",
bwt2:"border-width: thin",
ccc:"color:currentColor",
cc:"color:currentColor",//-------------
c_cc:"color:currentColor",
c_in:"color:inherit",
ci:"color:inherit",
cab:"clear-after: both",
cabtm:"clear-after: bottom",
cab2:"clear-after: bottom",
cad:"clear-after: descendants",
cae:"clear-after: end",
cai:"clear-after: inside",
cal:"clear-after: left",
can:"clear-after: none",
cao:"clear-after: outside",
car:"clear-after: right",
cast:"clear-after: start",
cas2:"clear-after: start",
cas:"cursor: all-scroll",
cat:"clear-after: top",
cla:"clip: auto",
ca3:"clip: auto",
cal:"cursor: alias",
ca2:"cursor: alias",
ca:"cursor: auto",
cb:"clear: both",
cca:"-webkit-column-count: auto;-moz-column-count: auto;column-count: auto",
cch:"cursor: crosshair",
ccl:"cursor: cell",
ccm:"cursor: context-menu",
concq:"content: close-quote",
ccr:"cursor: col-resize",
cc:"cursor: copy",
cd:"cursor: default",
cer:"cursor: e-resize",
cewr:"cursor: ew-resize",
cfa:"-webkit-column-fill: auto;-moz-column-fill: auto;column-fill: auto",
cfb:"-webkit-column-fill: balance;-moz-column-fill: balance;column-fill: balance",
cgnl:"-webkit-column-gap: normal;-moz-column-gap: normal;column-gap: normal",
ch:"cursor: help",
c_honeydew:"color:honeydew",
ciin:"counter-increment: inherit",
cii:"counter-increment: inherit",
cili:"counter-increment: list-item",
cin:"counter-increment: none",
coni:"content: icon",
ci2:"content: icon",//-------------------------
cl:"clear: left",
cm:"cursor: move",
cna:"cursor: not-allowed",
conncq:"content: no-close-quote",
cncq:"content: no-close-quote",
cnd:"cursor: no-drop",
cner:"cursor: ne-resize",
cnr8:"cursor: ne-resize",
cnr7:"cursor: ne-resize",
cneswr:"cursor: nesw-resize",
cnr6:"cursor: nesw-resize",
cnr5:"cursor: nesw-resize",
connl:"content: normal",
cn4:"content: normal",
connoq:"content: no-open-quote",
cnoq:"content: no-open-quote",
//cnrr:"cursor: n-resize",
cnsr:"cursor: ns-resize",
cnwr:"cursor: nw-resize",
cnwser:"cursor: nwse-resize",
cnr:"cursor: n-resize",
cnr2:"cursor: ns-resize",
cnr3:"cursor: nw-resize",
cnr4:"cursor: nwse-resize",
cn:"clear: none",
con:"content:\"\"",//-------------------
conn:"content: none",
cn3:"content: none",
cnone:"cursor: none",
cn2:"cursor: none",
coq:"content: open-quote",
cpg:"cursor: progress",
cp2:"cursor: progress",//-------------

cp:"cursor: pointer",
crin:"counter-reset: inherit",
cri:"counter-reset: inherit",
crli:"counter-reset: list-item",
crn:"counter-reset: none",
crr:"cursor: row-resize",
crsdb:"-webkit-column-rule-style: double;-moz-column-rule-style: double;column-rule-style: double",
crsd2:"-webkit-column-rule-style: double;-moz-column-rule-style: double;column-rule-style: double",
crsds:"-webkit-column-rule-style: dashed;-moz-column-rule-style: dashed;column-rule-style: dashed",
crsd:"-webkit-column-rule-style: dashed;-moz-column-rule-style: dashed;column-rule-style: dashed",
crsdt:"-webkit-column-rule-style: dotted;-moz-column-rule-style: dotted;column-rule-style: dotted",
crsd3:"-webkit-column-rule-style: dotted;-moz-column-rule-style: dotted;column-rule-style: dotted",
crsg:"-webkit-column-rule-style: groove;-moz-column-rule-style: groove;column-rule-style: groove",
crsh:"-webkit-column-rule-style: hidden;-moz-column-rule-style: hidden;column-rule-style: hidden",
crsi:"-webkit-column-rule-style: inset;-moz-column-rule-style: inset;column-rule-style: inset",
crsn:"-webkit-column-rule-style: none;-moz-column-rule-style: none;column-rule-style: none",
crso:"-webkit-column-rule-style: outset;-moz-column-rule-style: outset;column-rule-style: outset",
crsr:"-webkit-column-rule-style: ridge;-moz-column-rule-style: ridge;column-rule-style: ridge",
crss:"-webkit-column-rule-style: solid;-moz-column-rule-style: solid;column-rule-style: solid",
crwm:"-webkit-column-rule-width: medium;-moz-column-rule-width: medium;column-rule-width: medium",
crwt:"-webkit-column-rule-width: thick;-moz-column-rule-width: thick;column-rule-width: thick",
crwtn:"-webkit-column-rule-width: thin;-moz-column-rule-width: thin;column-rule-width: thin",
crwt2:"-webkit-column-rule-width: thin;-moz-column-rule-width: thin;column-rule-width: thin",
cr:"clear: right",
csa:"-webkit-column-span: all;-moz-column-span: all;column-span: all",
csbtm:"caption-side: bottom",
cser:"cursor: se-resize",
csr3:"cursor: se-resize",//--------------
csn:"-webkit-column-span: none;-moz-column-span: none;column-span: none",
csr:"cursor: s-resize",
cst:"caption-side: top",
cswr:"cursor: sw-resize",
csr2:"cursor: sw-resize",
c_t:"color:transparent",
ct2:"color:transparent",
ct:"cursor: text",
cvt:"cursor: vertical-text",
cwa:"-webkit-column-width: auto;-moz-column-width: auto;column-width: auto",
cwr:"cursor: w-resize",
cw:"cursor: wait",
czi:"cursor: -webkit-zoom-in;cursor: zoom-in",
czo:"cursor: -webkit-zoom-out;cursor: zoom-out",
db:"display: block",
dcp:"display: compact",
dc2:"display: compact",
dc:"display: container",
df:"display: -webkit-flex;display: -ms-flexbox;display: flex",
dib:"display: inline-block",
dif:"display: -webkit-inline-flex;display: -ms-inline-flexbox;display: inline-flex",
dit:"display: inline-table",
di:"display: inline",
dli:"display: list-item",
dn:"display: none",
dri:"display: run-in",
dtcg:"display: table-column-group",
dtcl:"display: table-cell",
dtc3:"display: table-cell",
dtcp:"display: table-caption",
dtc2:"display: table-caption",
dtc:"display: table-column",
dtfg:"display: table-footer-group",
dthg:"display: table-header-group",
dtrg:"display: table-row-group",
dtr:"display: table-row",
dt:"display: table",
ech:"empty-cells: hide",
ecs:"empty-cells: show",
fa:"-webkit-flex: auto;-ms-flex: auto;flex: auto",
fb0:"-webkit-flex-basis: 0;-ms-flex-preferred-size: 0;flex-basis: 0",
fba:"-webkit-flex-basis: auto;-ms-flex-preferred-size: auto;flex-basis: auto",
fbc:"-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content",
fbin:"-webkit-flex-basis: inherit;-ms-flex-preferred-size: inherit;flex-basis: inherit",
ffc:"-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column",
fdc:"-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column",
ffcn:"-webkit-flex-flow: column nowrap;-ms-flex-flow: column nowrap;flex-flow: column nowrap",
ffcr:"-webkit-flex-direction: column-reverse;-ms-flex-direction: column-reverse;flex-direction: column-reverse",
fdcr:"-webkit-flex-direction: column-reverse;-ms-flex-direction: column-reverse;flex-direction: column-reverse",
ffcrn:"-webkit-flex-flow: column-reverse nowrap;-ms-flex-flow: column-reverse nowrap;flex-flow: column-reverse nowrap",
ffcrwr:"-webkit-flex-flow:column-reverse wrap-reverse;-ms-flex-flow:column-reverse wrap-reverse;flex-flow:column-reverse wrap-reverse",
ffcrw:"-webkit-flex-flow: column-reverse wrap;-ms-flex-flow: column-reverse wrap;flex-flow: column-reverse wrap",
ffcu:"font-family: cursive",
ffcwr:"-webkit-flex-flow: column wrap-reverse;-ms-flex-flow: column wrap-reverse;flex-flow: column wrap-reverse",
ffcw:"-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap",
fff:"font-family: fantasy",
ffin:"font-family: inherit",
ffin2:"font-family: initial",//-----------
ffi:"font-family: inherit",//---------
ffi2:"font-family:initial",
ffm:"font-family: monospace",
ffn:"-webkit-flex-wrap: nowrap;-ms-flex-wrap: nowrap;flex-wrap: nowrap",
fwn:"-webkit-flex-wrap: nowrap;-ms-flex-wrap: nowrap;flex-wrap: nowrap",
ffr:"-webkit-flex-direction: row;-ms-flex-direction: row;flex-direction: row",
fdr:"-webkit-flex-direction: row;-ms-flex-direction: row;flex-direction: row",
ffrn:"-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap",
ffrr:"-webkit-flex-direction: row-reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse",
fdrr:"-webkit-flex-direction: row-reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse",
ffrrn:"-webkit-flex-flow: row-reverse nowrap;-ms-flex-flow: row-reverse nowrap;flex-flow: row-reverse nowrap",
ffrrwr:"-webkit-flex-flow: row-reverse wrap-reverse;-ms-flex-flow: row-reverse wrap-reverse;flex-flow: row-reverse wrap-reverse",
ffrrw:"-webkit-flex-flow:row-reverse wrap;-ms-flex-flow:row-reverse wrap;flex-flow:row-reverse wrap",
ffrwr:"-webkit-flex-flow:row wrap-reverse;-ms-flex-flow:row wrap-reverse;flex-flow:row wrap-reverse",
ffrw:"-webkit-flex-flow: row wrap;-ms-flex-flow: row wrap;flex-flow: row wrap",
ffss:"font-family: sans-serif",
ffs:"font-family: serif",
ffw:"-webkit-flex-flow-wrap: wrap;-ms-flex-flow-wrap: wrap;flex-flow-wrap: wrap",//flex-flow
fww:"-webkit-flex-wrap: wrap;-ms-flex-wrap: wrap;flex-wrap: wrap",
ffwp:"-webkit-flex-flow-wrap: wrap-reverse;-ms-flex-flow-wrap: wrap-reverse;flex-flow-wrap: wrap-reverse",
fwwr:"-webkit-flex-wrap: wrap-reverse;-ms-flex-wrap: wrap-reverse;flex-wrap: wrap-reverse",
fgin:"-webkit-flex-grow:inherit;-ms-flex-positive:inherit;flex-grow:inherit",
fgi:"-webkit-flex-grow:inherit;-ms-flex-positive:inherit;flex-grow:inherit",
fiaa:"flex-item-align: auto",
fiab:"flex-item-align: baseline",
fiac:"flex-item-align: center",
fiae:"flex-item-align: end",
fiasth:"flex-item-align: stretch",
fias2:"flex-item-align: stretch",
fias:"flex-item-align: start",
fi2:"-webkit-flex: initial;-ms-flex: initial;flex: initial",
fin:"font:inherit",
fi:"font:inherit",
fka:"-webkit-font-kerning: auto;font-kerning: auto",
fknl:"-webkit-font-kerning: normal;font-kerning: normal",
fkn2:"-webkit-font-kerning: normal;font-kerning: normal",
fkn:"-webkit-font-kerning: none;font-kerning: none",
flin:"filter: inherit",//-------------------
fli:"filter: initial",
flu:"filter: unset",
fi4:"filter: inherit",
fi3:"filter: initial",
fu:"filter: unset",
flpc:"flex-line-pack: center",
flpd:"flex-line-pack: distribute",
flpe:"flex-line-pack: end",
flpj:"flex-line-pack: justify",
flpsth:" flex-line-pack: stretch",
flps2:" flex-line-pack: stretch",
flps:"flex-line-pack: start",
fl:"float: left",
/*flex: none;*/
fn:"float: none",
fr:"float: right",
fsain:"font-size-adjust: inherit",
fsai:"font-size-adjust: inherit",//-------------
fsan:"font-size-adjust: none",
fsc:"font-stretch: condensed",
fsec:"font-stretch: extra-condensed",
fsee:"font-stretch: extra-expanded",
fse:"font-stretch: expanded",
fskin:"-webkit-flex-shrink:inherit;-ms-flex-negative:inherit;flex-shrink:inherit",
fsi3:"-webkit-flex-shrink:inherit;-ms-flex-negative:inherit;flex-shrink:inherit",
fsin:"font-size:inherit",
fsi2:"font-size:inherit",
fsi:"font-style: italic",
fslr:"font-size: larger",
fsl2:"font-size: larger",
fsl:"font-size: large",
fsm:"font-size: medium",
fsnml:"font-stretch: normal",
fsn3:"font-stretch: normal",//-----------------
fsnl:"font-style: normal",
fsn2:"font-style: normal",
fsn:"font-synthesis: none",
fso:"font-style: oblique",
fssc:"font-stretch: semi-condensed",
fsse:"font-stretch: semi-expanded",
fssr:"font-size: smaller",
fss2:"font-size: smaller",//-------------------
fss:"font-size: small",
/*font-synthesis: style;*/
fsuc:"font-stretch: ultra-condensed",
fsue:"font-stretch: ultra-expanded",
fsws:"font-synthesis: weight style",
fsw:"font-synthesis: weight",
fsxl:"font-size: x-large",
fsxs:"font-size: x-small",
fsxxl:"font-size: xx-large",
fsxl2:"font-size: xx-large",
fsxxs:"font-size: xx-small",
fsxs2:"font-size: xx-small",//------------
fvapc:"font-variant: all-petite-caps",
fvasc:"font-variant: all-small-caps",
fvcapc:"font-variant-caps: all-petite-caps",
fvcasc:"font-variant-caps: all-small-caps",
fvcn:"font-variant-caps: normal",//-----------------
fvcnl:"font-variant-caps: normal",
fvcpc:"font-variant-caps: petite-caps",
fvcsc:"font-variant-caps: small-caps",
fvctc:"font-variant-caps: titling-caps",
fvcu:"font-variant-caps: unicase",
fvnl:"font-variant: normal",
fvpc:"font-variant: petite-caps",
fvsc:"font-variant: small-caps",
fvtc:"font-variant: titling-caps",
fvu:"font-variant: unicase",
fw1:"font-weight: 100",
fw2:"font-weight: 200",
fw3:"font-weight: 300",
fw4:"font-weight: 400",
fw5:"font-weight: 500",
fw6:"font-weight: 600",
fw7:"font-weight: 700",
fw8:"font-weight: 800",
fw9:"font-weight: 900",
fwb:"font-weight: bold",
fwbr:"font-weight: bolder",
fwb2:"font-weight: bolder",
fwl:"font-weight: lighter",
fwnl:"font-weight: normal",
fwn:"font-weight: normal",
/*height: auto;*/
ha:"-webkit-hyphens: auto;-moz-hyphens: auto;-ms-hyphens: auto;hyphens: auto",
hm:"-webkit-hyphens: manual;-moz-hyphens: manual;-ms-hyphens: manual;hyphens: manual",
hn:"-webkit-hyphens: none;-moz-hyphens: none;-ms-hyphens: none;hyphens: none",
hpae:"hanging-punctuation: allow-end",
hpfae:"hanging-punctuation: first allow-end",
hpfe:"hanging-punctuation: force-end",
hpffe:"hanging-punctuation: first force-end",
hpf:"hanging-punctuation: first",
hplae:"hanging-punctuation: last allow-end",
hplfe:"hanging-punctuation: last force-end",
hpl:"hanging-punctuation: last",
hpn:"hanging-punctuation: none",
ia:"icon: auto",
iof:"image-orientation: flip",
ioin:"image-orientation: inherit",
ioi:"image-orientation: inherit",
jcc:"-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center",
jcfe:"-webkit-justify-content: flex-end;-ms-flex-pack: end;justify-content: flex-end",
jcfs:"-webkit-justify-content: flex-start;-ms-flex-pack: start;justify-content: flex-start",
jcsa:"-webkit-justify-content: space-around;-ms-flex-pack: distribute;justify-content: space-around",
jcsb:"-webkit-justify-content: space-between;-ms-flex-pack: justify;justify-content: space-between",
la:"left: auto",
lba:"line-break: auto",
lbl:"line-break: loose",
lbnl:"line-break: normal",
lbn:"line-break: normal",//-----------------------------
lbs:"line-break: strict",
lhnl:"line-height: normal",
lhn:"line-height: normal",
lhin:"line-height:inherit",
lhi:"line-height:inherit",
lhi2:"line-height:initial",
lsa:"list-style-type: armenian",
lsta:"list-style-type: armenian",
lsc:"list-style-type: circle",
lstc:"list-style-type: circle",
lsd:"list-style-type: disc",
lstd:"list-style-type: disc",
lsdc:"list-style-type: decimal",
lsd2:"list-style-type: decimal",
lsdc:"list-style-type: decimal",
lstd2:"list-style-type: decimal",
lsdlz:"list-style-type: decimal-leading-zero",
lstdlz:"list-style-type: decimal-leading-zero",
lsg:"list-style-type: georgian",
lstg:"list-style-type: georgian",
lsin:"list-style-image: none",
lsla:"list-style-type: lower-alpha",
lstla:"list-style-type: lower-alpha",
lslg:"list-style-type: lower-greek",
lstlg:"list-style-type: lower-greek",
lsll:"list-style-type: lower-latin",
lstll:"list-style-type: lower-latin",
lslr:"list-style-type: lower-roman",
lstlr:"list-style-type: lower-roman",
lsn:"list-style: none",
lstn:"list-style-type: none",
lesnl:"letter-spacing: normal",//---------------
lsnl:"letter-spacing: normal",
lsn2:"letter-spacing: normal",
lspi:"list-style-position: inside",
lspo:"list-style-position: outside",
lss:"list-style-type: square",
lsts:"list-style-type: square",
lsua:"list-style-type: upper-alpha",
lstua:"list-style-type: upper-alpha",
lsul:"list-style-type: upper-latin",
lstul:"list-style-type: upper-latin",
lsur:"list-style-type: upper-roman",
lstur:"list-style-type: upper-roman",
mba:"margin-bottom: auto",
mha:"min-height: auto",
mla:"margin-left: auto",
mra:"margin-right: auto",
mta:"margin-top: auto",
mwa:"min-width: auto",
mwa:"min-width: auto",
o0:"opacity:0",
o1:"opacity:1",
// o1:"opacity:0.1",
// o2:"opacity:0.2",
// o3:"opacity:0.3",
// o4:"opacity:0.4",
// o5:"opacity:0.5",
// o6:"opacity:0.6",
// o7:"opacity:0.7",
// o8:"opacity:0.8",
// o0d9:"opacity:0.9",
// o0:"opacity:0",
//o10:"opacity:1",
o0d1:"opacity:0.1",
o0d2:"opacity:0.2",
o0d3:"opacity:0.3",
o0d4:"opacity:0.4",
o0d5:"opacity:0.5",
o0d6:"opacity:0.6",
o0d7:"opacity:0.7",
o0d8:"opacity:0.8",
o0d9:"opacity:0.9",
oa:"overflow: auto",
ol0:"outline:0",//--------------
oln:"outline:none",
olci:"outline-color: invert",
oci:"outline-color: invert",
oci2:"outline-color: inherit",

oct:"outline-color:transparent",
olct:"outline-color:transparent",
olc_t:"outline-color:transparent",
oc_t:"outline-color:transparent",

olc_in:"outline-color:inherit",
oc_in:"outline-color:inherit",
ofcon:"object-fit: contain",
ofc:"object-fit: cover",
off:"object-fit: fill",
ofn:"object-fit: none",
ofsd:"object-fit: scale-down",
oh:"overflow: hidden",
ooin:"outline-offset: inherit",
ooi:"outline-offset: inherit",

opcc:"object-position: center center",
oplt:"object-position: left top",
oprb:"object-position: right bottom",
ordin:"-webkit-order:inherit;-ms-flex-order:inherit;order:inherit",
orpin:"orphans: inherit",
osa:"outline-style: auto",
osdb:"outline-style: double",
osds:"outline-style: dashed",
osdt:"outline-style: dotted",
osd2:"outline-style: double",
osd:"outline-style: dashed",
osd3:"outline-style: dotted",//-------------
osg:"outline-style: groove",
osi:"outline-style: inset",
osn:"outline-style: none",
oso:"outline-style: outset",
osr:"outline-style: ridge",
oss:"outline-style: solid",
os:"overflow: scroll",
ov:"overflow: visible",
owbw:"overflow-wrap: break-word",
owm:"outline-width: medium",
ownl:"overflow-wrap: normal",
own:"overflow-wrap: normal",

owt:"outline-width: thick",
owtn:"outline-width: thin",//-------------------
owt2:"outline-width: thin",
owww:"overflow-wrap: word-wrap",
oxa:"overflow-x: auto",
oxh:"overflow-x: hidden",
oxs:"overflow-x: scroll",
oxv:"overflow-x: visible",
oya:"overflow-y: auto",
oyh:"overflow-y: hidden",
oys:"overflow-y: scroll",
oyv:"overflow-y: visible",
pa:"position: absolute",
pbaal:"page-break-after: always",
pbaa3:"page-break-after: always",
pbaav:"page-break-after: avoid",
pbaa2:"page-break-after: avoid",
pbaa:"page-break-after: auto",
pbal:"page-break-after: left",
pbar:"page-break-after: right",
pbbal:"page-break-before: always",
pbba3:"page-break-before: always",
pbbav:"page-break-before: avoid",
pbba2:"page-break-before: avoid",//--------------
pbba:"page-break-before: auto",
pbbl:"page-break-before: left",
pbbr:"page-break-before: right",
pbia:"page-break-inside: auto",
pbiav:"page-break-inside: avoid",
pbia2:"page-break-inside: avoid",
pc:"position: center",
pea:"pointer-events: auto",
pen:"pointer-events: none",
pf:"position: fixed",
pin:"-webkit-perspective: inherit;perspective: inherit",
pi:"-webkit-perspective: inherit;perspective: inherit",//--------------
pn:"-webkit-perspective: none;perspective: none",
pobl:"-webkit-perspective-origin: bottom left;perspective-origin: bottom left",
pobr:"-webkit-perspective-origin: bottom right;perspective-origin: bottom right",
pobtm:"-webkit-perspective-origin: bottom;perspective-origin: bottom",
pob:"-webkit-perspective-origin: bottom;perspective-origin: bottom",
poc:"-webkit-perspective-origin: center;perspective-origin: center",
poin:"-webkit-perspective-origin: inherit;perspective-origin: inherit",
poi:"-webkit-perspective-origin: inherit;perspective-origin: inherit",
pol:"-webkit-perspective-origin: left;perspective-origin: left",
por:"-webkit-perspective-origin: right;perspective-origin: right",
potl:"-webkit-perspective-origin: top left;perspective-origin: top left",
potr:"-webkit-perspective-origin: top right;perspective-origin: top right",
pot:"-webkit-perspective-origin: top;perspective-origin: top",
pp:"position: page",
pr:"position: relative",
ps:"position: static",
pst:"position: -webkit-sticky;position: sticky",
ps2:"position: -webkit-sticky;position: sticky",//-------------
qn:"quotes: none",
ra:"right: auto",
rb:"resize: both",
rh:"resize: horizontal",
rv:"resize: vertical",
tac:"text-align: center",
tae:"text-align: end",
taj:"text-align: justify",
tala:"-moz-text-align-last: auto;text-align-last: auto",
talc:"-moz-text-align-last: center;text-align-last: center",
tale:"-moz-text-align-last: end;text-align-last: end",
talj:"-moz-text-align-last: justify;text-align-last: justify",
tall:"-moz-text-align-last: left;text-align-last: left",
talr:"-moz-text-align-last: right;text-align-last: right",
tals:"-moz-text-align-last: start;text-align-last: start",
tal:"text-align: left",
tamp:"text-align: match-parent",
tar:"text-align: right",
tase:"text-align: start end",
tas:"text-align: start",
ta:"top: auto",
tcha:"text-combine-horizontal: all",
tchd:"text-combine-horizontal: digits ",
tchn:"text-combine-horizontal: none",
tdds:"text-decoration: dashed",
tdsds:"text-decoration: dashed",
tdd:"text-decoration: dashed",//-----------------------
tdsd:"text-decoration-style: dashed",
tdb:"text-decoration: blink",
tdlb:"text-decoration-line: blink",
tdc_in:"-webkit-text-decoration-color: inherit;text-decoration-color: inherit",
tdcin:"-webkit-text-decoration-color: inherit;text-decoration-color: inherit",
tdc_t:"-webkit-text-decoration-color: transparent;text-decoration-color: transparent",
tdct:"-webkit-text-decoration-color: transparent;text-decoration-color: transparent",
tddb:"text-decoration: double",
tdsdb:"text-decoration: double",
tddt:"text-decoration: dotted",
tdsdt:"text-decoration: dotted",
tdd2:"text-decoration: double",
tdsd2:"text-decoration-style: double",
tdd3:"text-decoration: dotted",
tdsd3:"text-decoration-style: dotted",
tdin:"text-decoration:inherit; ",
tdi:"text-decoration:inherit;",
tduin:"transition-duration: inherit",
tdui2:"transition-duration: inherit",
tdli:"transition-delay: initial",//-----------------

tdlt:"text-decoration: line-through",
// tdllt:"text-decoration: line-through",
tdn:"text-decoration: none",
tdo:"text-decoration: overline",
tdlo:"text-decoration: overline",
tdsbd:"text-decoration-skip: box-decoration",
tdsdb:"-webkit-text-decoration-style: double;text-decoration-style: double",
tdsds:"-webkit-text-decoration-style: dashed;text-decoration-style: dashed",
tdsdt:"-webkit-text-decoration-style: dotted;text-decoration-style: dotted",
tdsd:"-webkit-text-decoration-style: double;text-decoration-style: double",
tdsd2:"-webkit-text-decoration-style: dashed;text-decoration-style: dashed",
tdsd3:"-webkit-text-decoration-style: dotted;text-decoration-style: dotted",
tdse:"text-decoration-skip: edges",
tdsi:"text-decoration-skip: ink",
tdsn:"text-decoration-skip: none",
tdso:"text-decoration-skip: objects",
tdssp:"text-decoration-skip: spaces",
tdss:"-webkit-text-decoration-style: solid;text-decoration-style: solid",
tdsw:"-webkit-text-decoration-style: wavy;text-decoration-style: wavy",
tdu:"text-decoration: underline",
tdlu:"text-decoration: underline",/*text-decoration-line*/
tdus:"text-decoration: unset",
tdw:"text-decoration: wavy",
//tdsw:"text-decoration: wavy",/*text-decoration-style*/repeat
tec_t:"text-emphasis-color:transparent ",
tect:"text-emphasis-color:transparent ",//------------
tepbl:"text-emphasis-position: below left",
tepbr:"text-emphasis-position: below right",
tepol:"text-emphasis-position: over left",
tepor:"text-emphasis-position: over right",
tesc:"text-emphasis-style: circle",
tesdc:"text-emphasis-style: double-circle",
tesd:"text-emphasis-style: dot",
tesf:"text-emphasis-style: filled",
tesn:"text-emphasis-style: none",
teso:"text-emphasis-style: open",
tess:"text-emphasis-style: sesame",
test:"text-emphasis-style: triangle",
tetep:"-webkit-text-emphasis: text-emphasis-position;text-emphasis: text-emphasis-position",
tiel:"text-indent: each-line",
tih:"text-indent: hanging",
tiin:"text-indent: inherit",
tii:"text-indent: inherit",
tja:"text-justify: auto",
tjd:"text-justify: distribute",
tjiw:"text-justify: inter-word",
tjn:"text-justify: none",
tla:"table-layout: auto",
tlf:"table-layout: fixed",
tn:"-webkit-transform: none;transform: none",
tobtm:"-webkit-transform-origin: bottom;transform-origin: bottom",
tob:"-webkit-transform-origin: bottom;transform-origin: bottom",//------------
tocl:"text-overflow: clip",
toc2:"text-overflow: clip",//----------------
toc:"-webkit-transform-origin: center;transform-origin: center",
toe:"text-overflow: ellipsis",
tol:"-webkit-transform-origin: left;transform-origin: left",
tom:"text-orientation: mixed",
tor:"-webkit-transform-origin: right;transform-origin: right",
tosl:"text-orientation: sideways-left",
tosr:"text-orientation: sideways-right",
tos:"text-orientation: sideways",
tot:"-webkit-transform-origin: top;transform-origin: top",
tougo:"text-orientation: use-glyph-orientation",
tou:"text-orientation: upright",
tpa:"transition-property: all",
tpn:"transition-property: none",
tra:"text-rendering: auto",
trgp:"text-rendering: geometricPrecision",
trg:"text-rendering: geometricPrecision",
trin:"text-rendering: inherit",
tri:"text-rendering: inherit",
trop:"text-rendering: optimizeLegibility",
tro:"text-rendering: optimizeLegibility",
tros:"text-rendering: optimizeSpeed",
tro2:"text-rendering: optimizeSpeed",
tsf:"-webkit-transform-style: flat;transform-style: flat",
tsi:"text-shadow: inherit",
tsin:"text-shadow: inherit",
tsi2:"-webkit-transform-style: inherit;transform-style: inherit",
tsin2:"-webkit-transform-style: inherit;transform-style: inherit",
tsn:"text-shadow: none",
tsp3d:"-webkit-transform-style: preserve-3d;transform-style: preserve-3d",
tsp3:"-webkit-transform-style: preserve-3d;transform-style: preserve-3d",
ttc:"text-transform: capitalize",
ttfeio:"transition-timing-function: ease-in-out",
ttfei:"transition-timing-function: ease-in",
ttfeo:"transition-timing-function: ease-out",
ttfe:"transition-timing-function: ease",
ttfl:"transition-timing-function: linear",
ttfse:"transition-timing-function: step-end",
ttfss:"transition-timing-function: step-start",
ttfw:"text-transform: full-width",
ttl:"text-transform: lowercase",
ttn:"text-transform: none",
ttu:"text-transform: uppercase",
tupa:"text-underline-position: auto",
tupl:"text-underline-position: left",
tupr:"text-underline-position: right",
tupul:"text-underline-position: under left",
tupur:"text-underline-position: under right",
tupu:"text-underline-position: under",
ubbo:"unicode-bidi: bidi-override",
ube:"unicode-bidi: embed",
ubnl:"unicode-bidi: normal",
ubn:"unicode-bidi: normal",
vab:"vertical-align: baseline",
vab2:"vertical-align: bottom",
vabtm:"vertical-align: bottom",//-----------------
vam:"vertical-align: middle",
vasb:"vertical-align: sub",//-----------------
vas:"vertical-align: super",
vatb:"vertical-align: text-bottom",
vatt:"vertical-align: text-top",
vat:"vertical-align: top",
vc:"visibility: collapse",
vh:"visibility: hidden",
vv:"visibility: visible",
wa:"width: auto",
wbba:"word-break: break-all",
wbka:"word-break: keep-all",
wbnl:"word-break: normal",
wbn:"word-break: normal",
wmht:"-webkit-writing-mode: horizontal-tb;-ms-writing-mode: lr-tb;writing-mode: horizontal-tb",
wmvl:"-webkit-writing-mode: vertical-lr;-ms-writing-mode: tb-lr;writing-mode: vertical-lr",
wmvr:"-webkit-writing-mode: vertical-rl;-ms-writing-mode: tb-rl;writing-mode: vertical-rl",
wsn:"white-space: nowrap",
wsnw:"white-space: nowarp",
wsnl:"white-space: normal",
wsn2:"white-space: normal",//---------
wosnl:"word-spacing: normal",
wsn3:"word-spacing:normal",//---------------
wspl:"white-space: pre-line",
wspw:"white-space: pre-wrap",
wsp:"white-space: pre",
wwbw:"word-wrap: break-word",
wwnl:"word-wrap: normal",
wwn:"word-wrap: normal",//-------------
wwow:"word-wrap: overflow-wrap",
xhn:"max-height: none",
xwn:"max-width: none",
zia:"z-index: auto",

//Extras
//------layouts(ref:getbootstrap.com)
bf0:"-webkit-box-flex:0",
bf1:"-webkit-box-flex:1",
bog0:"-webkit-ordinal-group:0",
bog1:"-webkit-ordinal-group:1",
bog2:"-webkit-ordinal-group:2",
bog3:"-webkit-ordinal-group:3",
bog4:"-webkit-ordinal-group:4",
bog5:"-webkit-ordinal-group:5",
bog6:"-webkit-ordinal-group:6",
bog7:"-webkit-ordinal-group:7",
bog8:"-webkit-ordinal-group:8",
bog9:"-webkit-ordinal-group:9",
bog10:"-webkit-ordinal-group:10",
bog11:"-webkit-ordinal-group:11",
bog12:"-webkit-ordinal-group:12",
bog13:"-webkit-ordinal-group:13",
bog14:"-webkit-ordinal-group:14",

ml1col :"margin-left: 8.333333%",
ml2col :"margin-left: 16.666667%",
ml3col :"margin-left: 25%",
ml4col :"margin-left: 33.333333%",
ml5col :"margin-left: 41.666667%",
ml6col :"margin-left: 50%",
ml7col :"margin-left: 58.333333%",
ml8col :"margin-left: 66.666667%",
ml9col :"margin-left: 75%",
ml10col :"margin-left: 83.333333%",
ml11col :"margin-left: 91.666667%",

mr1col :"margin-right: 8.333333%",
mr2col :"margin-right: 16.666667%",
mr3col :"margin-right: 25%",
mr4col :"margin-right: 33.333333%",
mr5col :"margin-right: 41.666667%",
mr6col :"margin-right: 50%",
mr7col :"margin-right: 58.333333%",
mr8col :"margin-right: 66.666667%",
mr9col :"margin-right: 75%",
mr10col :"margin-right: 83.333333%",
mr11col :"margin-right: 91.666667%",

w1col :"width: 8.333333%",
w2col :"width: 16.666667%",
w3col :"width: 25%",
w4col :"width: 33.333333%",
w5col :"width: 41.666667%",
w6col :"width: 50%",
w7col :"width: 58.333333%",
w8col :"width: 66.666667%",
w9col :"width: 75%",
w10col :"width: 83.333333%",
w11col :"width: 91.666667%",
w12col :"width: 100%",

xw1col :"max-width: 8.333333%",
xw2col :"max-width: 16.666667%",
xw3col :"max-width: 25%",
xw4col :"max-width: 33.333333%",
xw5col :"max-width: 41.666667%",
xw6col :"max-width: 50%",
xw7col :"max-width: 58.333333%",
xw8col :"max-width: 66.666667%",
xw9col :"max-width: 75%",
xw10col :"max-width: 83.333333%",
xw11col :"max-width: 91.666667%",
xw12col :"max-width: 100%",

mw1col :"min-width: 8.333333%",
mw2col :"min-width: 16.666667%",
mw3col :"min-width: 25%",
mw4col :"min-width: 33.333333%",
mw5col :"min-width: 41.666667%",
mw6col :"min-width: 50%",
mw7col :"min-width: 58.333333%",
mw8col :"min-width: 66.666667%",
mw9col :"min-width: 75%",
mw10col :"min-width: 83.333333%",
mw11col :"min-width: 91.666667%",
mw12col :"min-width: 100%",
//-------color and bgc(ref:getbootstrap.com)----------
c_nwhite:'color:white',
c_nblack:'color:black',
c_primary :'color: #007bff !important',
c_primary_hov:'color: #0062cc !important',
c_secondary :'color: #6c757d !important',
c_secondary_hov:'color: #545b62 !important',
c_success :'color: #28a745 !important',
c_success_hov:'color: #1e7e34 !important',
c_info :'color: #17a2b8 !important',
c_info_hov:'color: #117a8b !important',
c_warning :'color: #ffc107 !important',
c_warning_hov :'color: #d39e00 !important',
c_danger :'color: #dc3545 !important',
c_danger_hov:'color: #bd2130 !important',
c_light :'color: #f8f9fa !important',
c_light_hov:'color: #dae0e5 !important',
c_dark :'color: #343a40 !important',
c_dark_hov :'color: #1d2124 !important',
c_muted :'color: #6c757d !important',
bgc_primary :'background-color: #007bff !important',
bgc_primary_hov:'background-color: #0062cc !important',
bgc_secondary :'background-color: #6c757d !important',
bgc_secondary_hov:'background-color: #545b62 !important',
bgc_success :'background-color: #28a745 !important',
bgc_success_hov:'background-color: #1e7e34 !important',
bgc_info :'background-color: #17a2b8 !important',
bgc_info_hov:'background-color: #117a8b !important',
bgc_warning :'background-color: #ffc107 !important',
bgc_warning_hov :'background-color: #d39e00 !important',
bgc_danger :'background-color: #dc3545 !important',
bgc_danger_hov:'background-color: #bd2130 !important',
bgc_light :'background-color: #f8f9fa !important',
bgc_light_hov:'background-color: #dae0e5 !important',
bgc_dark :'background-color: #343a40 !important',
bgc_dark_hov :'background-color: #1d2124 !important',
bgc_muted :'background-color: #6c757d !important',
//These are referenced from https://bulma.io 
c_primary2:'color:hsl(171, 100%, 41%)',
c_link:'color:hsl(217, 71%, 53%)',
c_info2:'color:hsl(204, 86%, 53%)',
c_success2:'color:hsl(141, 71%, 48%)',
c_warning2:'color:hsl(048, 100%, 67%)',
c_danger:'color:hsl(348, 100%, 61%)',

c_primary2_hov:'color: #00c4a7',
c_link_hov:'color:#276cda',
c_info2_hov:'color:#1496ed',
c_success2_hov:'color:#22c65b',
c_warning2_hov:'color:#ffdb4a',
c_danger2_hov:'color:#ff2b56',

bgc_primary2:'background-color:hsl(171, 100%, 41%)',
bgc_link:'background-color:hsl(217, 71%, 53%)',
bgc_info2:'background-color:hsl(204, 86%, 53%)',
bgc_success2:'background-color:hsl(141, 71%, 48%)',
bgc_warning2:'background-color:hsl(048, 100%, 67%)',
bgc_danger:'background-color:hsl(348, 100%, 61%)',

bgc_primary2_hov:'background-color: #00c4a7',
bgc_link_hov:'background-color:#276cda',
bgc_info2_hov:'background-color:#1496ed',
bgc_success2_hov:'background-color:#22c65b',
bgc_warning2_hov:'background-color:#ffdb4a',
bgc_danger2_hov:'background-color:#ff2b56',

//------------Most used dynamic acss-----------------
	//-------Box-Model 
w1p:'width:1%',	
w20p:"width:20%",	
w25p:"width:25%",	
w40p:"width:40%",	
w50p:"width:50%",	
w60p:"width:60%",	
w75p:"width:75%",
w80p:"width:80%",
w100p:'width:100%',	
w200p:"width:200%",

w10px:'width:10px',
w16px:'width:16px',
w20px:'width:20px',
w24px:'width:24px',
w30px:'width:30px',
w32px:'width:32px', 
w48px:'width:48px',
w50px:'width:50px',
w64px:'width:64px',
w96px:'width:96px',
w128px:'width:px',
w256px:'width:256px',
w0d5em:'width:0.5em',
w1em:'width:1em',
w1d5em:'width:1.5em',
w2d5em:'width:2.5em',

w0d4rem:'width:0.4rem',
w0d5rem:'width:0.5rem',
w0d8rem:'width:0.8rem',
w1rem:'width:1rem',
w1d5rem:'width:1.5rem',
w2rem:'width:2rem',
w2d5rem:'width:2.5rem',
w3rem:'width:3rem',
w3d25rem:'width:3.25rem',
w3d5rem:'width:3.5rem',
w4rem:'width:4rem',
w5rem:'width:5rem',
w10rem:'width:10rem',


w300px:"width:300px",
w540px:"width:540px",
w600px:"width:600px",
w720px:"width:720px",
w800px:"width:800px",
w960px:"width:960px",
w1140px:"width:1140px",
w1334px:"width:1334px",

mw300px:"min-width:300px",
mw540px:"min-width:540px",
mw600px:"min-width:600px",
mw720px:"min-width:720px",
mw800px:"min-width:800px",
mw960px:"min-width:960px",
mw960px:"min-width:960px",
mw992px:"min-width:992px",
mw1334px:"min-width:1334px",

mw25p:"min-width:25%",	
mw50p:"min-width:50%",	
mw75p:"min-width:75%",
mw100p:'min-width:100%',	
mw200p:"min-width:200%",

xw25p:"max-width:25%",	
xw50p:"max-width:50%",	
xw75p:"max-width:75%",
xw100p:'max-width:100%',	
xw200p:"max-width:200%",	

xw300px:"max-width:300px",
xw540px:"max-width:540px",
xw600px:"max-width:600px",
xw720px:"max-width:720px",
xw800px:"max-width:800px",
xw960px:"max-width:960px",
xw1140px:"max-width:1140px",
xw1334px:"max-width:1334px",

h25vh:'height:25vh',
h50vh:'height:50vh',
h75vh:'height:75vh',
h100vh:'height:100vh',
h0:'height:0',
h1px:'height:1px',
h2px:'height:1px',
h3px:'height:1px',
h4px:'height:1px',
h5px:'height:1px',
h10px:'height:10px',
h16px:'height:16px',
h20px:'height:20px',
h24px:'height:24px',
h30px:'height:30px',
h32px:'height:32px', 
h48px:'height:48px',
h50px:'height:50px',
h64px:'height:64px',
h96px:'height:96px',
h128px:'height:px',
h256px:'height:256px',
h0d5em:'height:0.5em',
h1em:'height:1em',
h1d5em:'height:1.5em',
h2d5em:'height:2.5em',

h0d4rem:'height:0.4rem',
h0d5rem:'height:0.5rem',
h0d8rem:'height:0.8rem',
h1rem:'height:1rem',
h1d5rem:'height:1.5rem',
h2rem:'height:2rem',
h2d5rem:'height:2.5rem',
h3rem:'height:3rem',
h3d25rem:'height:3.25rem',
h3d5rem:'height:3.5rem',
h4rem:'height:4rem',

mh50vh:'min-height:50vh',
mh100h:'min-height:100vh',
mh50p:'min-height:50%',
mh100p:'min-height:100%',
xh50vh:'max-height:50vh',
xh100h:'max-height:100vh',
xh50p:'max-height:50%',
xh100p:'max-height:100%',



"m0d25rem":"margin:0.25rem",
"m1rem":"margin:1rem",
"m1d5rem":"margin:1.5rem",
"m2rem":"margin:2rem",
"m2d5rem":"margin:2.5rem",
"m3rem":"margin:3rem",


//Margin-left
"ml0d25em":"margin-left:0.25em",
"ml0d5em":"margin-left:0.5em",
"ml1em":"margin-left:1em",
"ml1d5em":"margin-left:1.5em",
"ml1d75em":"margin-left:1.75em",
"ml1d25em":"margin-left:1.25em",
"ml2em":"margin-left:2em",

"ml0d125rem":"margin-left:0.125rem",
"ml0d25rem":"margin-left:0.25rem",
"ml0d3rem":"margin-left:0.3rem",
"ml0d375rem":"margin-left:0.375rem",
"ml0d625rem":"margin-left:0.625rem",
"ml0d5rem":"margin-left:0.5rem",
"ml0d75rem":"margin-left:0.75rem",
"ml1rem":"margin-left:1rem",
"ml1d25rem":"margin-left:1.25rem",
"ml1d5rem":"margin-left:1.5rem",
"ml1d75rem":"margin-left:1.75rem",
"ml2rem":"margin-left:2rem",
"ml2d25rem":"margin-left:2.25rem",
"ml2d5rem":"margin-left:2.5rem",
"ml2d75rem":"margin-left:2.75rem",
"ml3rem":"margin-left:3rem",
"ml3d25rem":"margin-left:3.25rem",
"ml3d5rem":"margin-left:3.5rem",
"ml3d75rem":"margin-left:3.75rem",
"ml4rem":"margin-left:4rem",
"ml4d5rem":"margin-left:4.5rem",
"ml5rem":"margin-left:5rem",


"ml1p":"margin-left:1%",
"ml2p":"margin-left:2%",
"ml3p":"margin-left:3%",
"ml4p":"margin-left:4%",
"ml5p":"margin-left:5%",
"ml10p":"margin-left:10%",
"ml15p":"margin-left:15%",
"ml20p":"margin-left:20%",
"ml25p":"margin-left:25%",
"ml50p":"margin-left:50%",
"ml75p":"margin-left:75%",
"ml100p":"margin-left:100%",
"ml150p":"margin-left:150%",
"ml175p":"margin-left:175%",
"ml200p":"margin-left:200%",


"ml1px":"margin-left:1px",
"ml2px":"margin-left:2px",
"ml3px":"margin-left:3px",
"ml4px":"margin-left:4px",
"ml5px":"margin-left:5px",
"ml10px":"margin-left:10px",
"ml15px":"margin-left:15px",
"ml20px":"margin-left:20px",
 'ml12px':'margin-left:12px',
 'ml15px':'margin-left:15px',
 'ml18px':'margin-left:18px',
 'ml20px':'margin-left:20px',
 'ml22px':'margin-left:22px',
 'ml24px':'margin-left:24px',
 'ml25px':'margin-left:25px',
 'ml30px':'margin-left:30px',
 'ml40px':'margin-left:40px',
 'ml50px':'margin-left:50px',
 'ml60px':'margin-left:60px',
 'ml70px':'margin-left:70px',
 'ml80px':'margin-left:80px',
 'ml90px':'margin-left:90px',
 'ml100px':'margin-left:100px',

 //Negative
"ml-0d25em":"margin-left:-0.25em",
"ml-0d5em":"margin-left:-0.5em",
"ml-1em":"margin-left:-1em",
"ml-1d5em":"margin-left:-1.5em",
"ml-1d75em":"margin-left:-1.75em",
"ml-1d25em":"margin-left:-1.25em",
"ml-2em":"margin-left:-2em",

"ml-0d125rem":"margin-left:-0.125rem",
"ml-0d25rem":"margin-left:-0.25rem",
"ml-0d3rem":"margin-left:-0.3rem",
"ml-0d375rem":"margin-left:-0.375rem",
"ml-0d625rem":"margin-left:-0.625rem",
"ml-0d5rem":"margin-left:-0.5rem",
"ml-0d75rem":"margin-left:-0.75rem",
"ml-1rem":"margin-left:-1rem",
"ml-1d25rem":"margin-left:-1.25rem",
"ml-1d5rem":"margin-left:-1.5rem",
"ml-1d75rem":"margin-left:-1.75rem",
"ml-2rem":"margin-left:-2rem",
"ml-2d25rem":"margin-left:-2.25rem",
"ml-2d5rem":"margin-left:-2.5rem",
"ml-2d75rem":"margin-left:-2.75rem",
"ml-3rem":"margin-left:-3rem",
"ml-3d25rem":"margin-left:-3.25rem",
"ml-3d5rem":"margin-left:-3.5rem",
"ml-3d75rem":"margin-left:-3.75rem",
"ml-4rem":"margin-left:-4rem",
"ml-4d5rem":"margin-left:-4.5rem",
"ml-5rem":"margin-left:-5rem",


"ml-1p":"margin-left:-1%",
"ml-2p":"margin-left:-2%",
"ml-3p":"margin-left:-3%",
"ml-4p":"margin-left:-4%",
"ml-5p":"margin-left:-5%",
"ml-10p":"margin-left:-10%",
"ml-15p":"margin-left:-15%",
"ml-20p":"margin-left:-20%",
"ml-25p":"margin-left:-25%",
"ml-50p":"margin-left:-50%",
"ml-75p":"margin-left:-75%",
"ml-100p":"margin-left:-100%",
"ml-150p":"margin-left:-150%",
"ml-175p":"margin-left:-175%",
"ml-200p":"margin-left:-200%",


"ml-1px":"margin-left:-1px",
"ml-2px":"margin-left:-2px",
"ml-3px":"margin-left:-3px",
"ml-4px":"margin-left:-4px",
"ml-5px":"margin-left:-5px",
"ml-10px":"margin-left:-10px",
"ml-15px":"margin-left:-15px",
"ml-20px":"margin-left:-20px",
'ml-12px':'margin-left:-12px',
'ml-15px':'margin-left:-15px',
'ml-18px':'margin-left:-18px',
'ml-20px':'margin-left:-20px',
'ml-22px':'margin-left:-22px',
'ml-24px':'margin-left:-24px',
'ml-25px':'margin-left:-25px',
'ml-30px':'margin-left:-30px',
'ml-40px':'margin-left:-40px',
'ml-50px':'margin-left:-50px',
'ml-60px':'margin-left:-60px',
'ml-70px':'margin-left:-70px',
'ml-80px':'margin-left:-80px',
'ml-90px':'margin-left:-90px',
'ml-100px':'margin-left:-100px',


//Margin-right
"mr0d25em":"margin-right:0.25em",
"mr0d5em":"margin-right:0.5em",
"mr1em":"margin-right:1em",
"mr1d5em":"margin-right:1.5em",
"mr1d75em":"margin-right:1.75em",
"mr1d25em":"margin-right:1.25em",
"mr2em":"margin-right:2em",

"mr0d125rem":"margin-right:0.125rem",
"mr0d25rem":"margin-right:0.25rem",
"mr0d3rem":"margin-right:0.3rem",
"mr0d375rem":"margin-right:0.375rem",
"mr0d625rem":"margin-right:0.625rem",
"mr0d5rem":"margin-right:0.5rem",
"mr0d75rem":"margin-right:0.75rem",
"mr1rem":"margin-right:1rem",
"mr1d25rem":"margin-right:1.25rem",
"mr1d5rem":"margin-right:1.5rem",
"mr1d75rem":"margin-right:1.75rem",
"mr2rem":"margin-right:2rem",
"mr2d25rem":"margin-right:2.25rem",
"mr2d5rem":"margin-right:2.5rem",
"mr2d75rem":"margin-right:2.75rem",
"mr3rem":"margin-right:3rem",
"mr3d25rem":"margin-right:3.25rem",
"mr3d5rem":"margin-right:3.5rem",
"mr3d75rem":"margin-right:3.75rem",
"mr4rem":"margin-right:4rem",
"mr4d5rem":"margin-right:4.5rem",
"mr5rem":"margin-right:5rem",


"mr1p":"margin-right:1%",
"mr2p":"margin-right:2%",
"mr3p":"margin-right:3%",
"mr4p":"margin-right:4%",
"mr5p":"margin-right:5%",
"mr10p":"margin-right:10%",
"mr15p":"margin-right:15%",
"mr20p":"margin-right:20%",
"mr25p":"margin-right:25%",
"mr50p":"margin-right:50%",
"mr75p":"margin-right:75%",
"mr100p":"margin-right:100%",
"mr150p":"margin-right:150%",
"mr175p":"margin-right:175%",
"mr200p":"margin-right:200%",


"mr1px":"margin-right:1px",
"mr2px":"margin-right:2px",
"mr3px":"margin-right:3px",
"mr4px":"margin-right:4px",
"mr5px":"margin-right:5px",
"mr10px":"margin-right:10px",
"mr15px":"margin-right:15px",
"mr20px":"margin-right:20px",
 'mr12px':'margin-right:12px',
 'mr15px':'margin-right:15px',
 'mr18px':'margin-right:18px',
 'mr20px':'margin-right:20px',
 'mr22px':'margin-right:22px',
 'mr24px':'margin-right:24px',
 'mr25px':'margin-right:25px',
 'mr30px':'margin-right:30px',
 'mr40px':'margin-right:40px',
 'mr50px':'margin-right:50px',
 'mr60px':'margin-right:60px',
 'mr70px':'margin-right:70px',
 'mr80px':'margin-right:80px',
 'mr90px':'margin-right:90px',
 'mr100px':'margin-right:100px',

 //Negative
"mr-0d25em":"margin-right:-0.25em",
"mr-0d5em":"margin-right:-0.5em",
"mr-1em":"margin-right:-1em",
"mr-1d5em":"margin-right:-1.5em",
"mr-1d75em":"margin-right:-1.75em",
"mr-1d25em":"margin-right:-1.25em",
"mr-2em":"margin-right:-2em",

"mr-0d125rem":"margin-right:-0.125rem",
"mr-0d25rem":"margin-right:-0.25rem",
"mr-0d3rem":"margin-right:-0.3rem",
"mr-0d375rem":"margin-right:-0.375rem",
"mr-0d625rem":"margin-right:-0.625rem",
"mr-0d5rem":"margin-right:-0.5rem",
"mr-0d75rem":"margin-right:-0.75rem",
"mr-1rem":"margin-right:-1rem",
"mr-1d25rem":"margin-right:-1.25rem",
"mr-1d5rem":"margin-right:-1.5rem",
"mr-1d75rem":"margin-right:-1.75rem",
"mr-2rem":"margin-right:-2rem",
"mr-2d25rem":"margin-right:-2.25rem",
"mr-2d5rem":"margin-right:-2.5rem",
"mr-2d75rem":"margin-right:-2.75rem",
"mr-3rem":"margin-right:-3rem",
"mr-3d25rem":"margin-right:-3.25rem",
"mr-3d5rem":"margin-right:-3.5rem",
"mr-3d75rem":"margin-right:-3.75rem",
"mr-4rem":"margin-right:-4rem",
"mr-4d5rem":"margin-right:-4.5rem",
"mr-5rem":"margin-right:-5rem",


"mr-1p":"margin-right:-1%",
"mr-2p":"margin-right:-2%",
"mr-3p":"margin-right:-3%",
"mr-4p":"margin-right:-4%",
"mr-5p":"margin-right:-5%",
"mr-10p":"margin-right:-10%",
"mr-15p":"margin-right:-15%",
"mr-20p":"margin-right:-20%",
"mr-25p":"margin-right:-25%",
"mr-50p":"margin-right:-50%",
"mr-75p":"margin-right:-75%",
"mr-100p":"margin-right:-100%",
"mr-150p":"margin-right:-150%",
"mr-175p":"margin-right:-175%",
"mr-200p":"margin-right:-200%",


"mr-1px":"margin-right:-1px",
"mr-2px":"margin-right:-2px",
"mr-3px":"margin-right:-3px",
"mr-4px":"margin-right:-4px",
"mr-5px":"margin-right:-5px",
"mr-10px":"margin-right:-10px",
"mr-15px":"margin-right:-15px",
"mr-20px":"margin-right:-20px",
'mr-12px':'margin-right:-12px',
'mr-15px':'margin-right:-15px',
'mr-18px':'margin-right:-18px',
'mr-20px':'margin-right:-20px',
'mr-22px':'margin-right:-22px',
'mr-24px':'margin-right:-24px',
'mr-25px':'margin-right:-25px',
'mr-30px':'margin-right:-30px',
'mr-40px':'margin-right:-40px',
'mr-50px':'margin-right:-50px',
'mr-60px':'margin-right:-60px',
'mr-70px':'margin-right:-70px',
'mr-80px':'margin-right:-80px',
'mr-90px':'margin-right:-90px',
'mr-100px':'margin-right:-100px',

//------------------Margintop
//Margin-top
"mt0d25em":"margin-top:0.25em",
"mt0d5em":"margin-top:0.5em",
"mt1em":"margin-top:1em",
"mt1d5em":"margin-top:1.5em",
"mt1d75em":"margin-top:1.75em",
"mt1d25em":"margin-top:1.25em",
"mt2em":"margin-top:2em",

"mt0d125rem":"margin-top:0.125rem",
"mt0d25rem":"margin-top:0.25rem",
"mt0d3rem":"margin-top:0.3rem",
"mt0d375rem":"margin-top:0.375rem",
"mt0d625rem":"margin-top:0.625rem",
"mt0d5rem":"margin-top:0.5rem",
"mt0d75rem":"margin-top:0.75rem",
"mt1rem":"margin-top:1rem",
"mt1d25rem":"margin-top:1.25rem",
"mt1d5rem":"margin-top:1.5rem",
"mt1d75rem":"margin-top:1.75rem",
"mt2rem":"margin-top:2rem",
"mt2d25rem":"margin-top:2.25rem",
"mt2d5rem":"margin-top:2.5rem",
"mt2d75rem":"margin-top:2.75rem",
"mt3rem":"margin-top:3rem",
"mt3d25rem":"margin-top:3.25rem",
"mt3d5rem":"margin-top:3.5rem",
"mt3d75rem":"margin-top:3.75rem",
"mt4rem":"margin-top:4rem",
"mt4d5rem":"margin-top:4.5rem",
"mt5rem":"margin-top:5rem",


"mt1p":"margin-top:1%",
"mt2p":"margin-top:2%",
"mt3p":"margin-top:3%",
"mt4p":"margin-top:4%",
"mt5p":"margin-top:5%",
"mt10p":"margin-top:10%",
"mt15p":"margin-top:15%",
"mt20p":"margin-top:20%",
"mt25p":"margin-top:25%",
"mt50p":"margin-top:50%",
"mt75p":"margin-top:75%",
"mt100p":"margin-top:100%",
"mt150p":"margin-top:150%",
"mt175p":"margin-top:175%",
"mt200p":"margin-top:200%",


"mt1px":"margin-top:1px",
"mt2px":"margin-top:2px",
"mt3px":"margin-top:3px",
"mt4px":"margin-top:4px",
"mt5px":"margin-top:5px",
"mt10px":"margin-top:10px",
"mt15px":"margin-top:15px",
"mt20px":"margin-top:20px",
 'mt12px':'margin-top:12px',
 'mt15px':'margin-top:15px',
 'mt18px':'margin-top:18px',
 'mt20px':'margin-top:20px',
 'mt22px':'margin-top:22px',
 'mt24px':'margin-top:24px',
 'mt25px':'margin-top:25px',
 'mt30px':'margin-top:30px',
 'mt40px':'margin-top:40px',
 'mt50px':'margin-top:50px',
 'mt60px':'margin-top:60px',
 'mt70px':'margin-top:70px',
 'mt80px':'margin-top:80px',
 'mt90px':'margin-top:90px',
 'mt100px':'margin-top:100px',

 //Negative
"mt-0d25em":"margin-top:-0.25em",
"mt-0d5em":"margin-top:-0.5em",
"mt-1em":"margin-top:-1em",
"mt-1d5em":"margin-top:-1.5em",
"mt-1d75em":"margin-top:-1.75em",
"mt-1d25em":"margin-top:-1.25em",
"mt-2em":"margin-top:-2em",

"mt-0d125rem":"margin-top:-0.125rem",
"mt-0d25rem":"margin-top:-0.25rem",
"mt-0d3rem":"margin-top:-0.3rem",
"mt-0d375rem":"margin-top:-0.375rem",
"mt-0d625rem":"margin-top:-0.625rem",
"mt-0d5rem":"margin-top:-0.5rem",
"mt-0d75rem":"margin-top:-0.75rem",
"mt-1rem":"margin-top:-1rem",
"mt-1d25rem":"margin-top:-1.25rem",
"mt-1d5rem":"margin-top:-1.5rem",
"mt-1d75rem":"margin-top:-1.75rem",
"mt-2rem":"margin-top:-2rem",
"mt-2d25rem":"margin-top:-2.25rem",
"mt-2d5rem":"margin-top:-2.5rem",
"mt-2d75rem":"margin-top:-2.75rem",
"mt-3rem":"margin-top:-3rem",
"mt-3d25rem":"margin-top:-3.25rem",
"mt-3d5rem":"margin-top:-3.5rem",
"mt-3d75rem":"margin-top:-3.75rem",
"mt-4rem":"margin-top:-4rem",
"mt-4d5rem":"margin-top:-4.5rem",
"mt-5rem":"margin-top:-5rem",


"mt-1p":"margin-top:-1%",
"mt-2p":"margin-top:-2%",
"mt-3p":"margin-top:-3%",
"mt-4p":"margin-top:-4%",
"mt-5p":"margin-top:-5%",
"mt-10p":"margin-top:-10%",
"mt-15p":"margin-top:-15%",
"mt-20p":"margin-top:-20%",
"mt-25p":"margin-top:-25%",
"mt-50p":"margin-top:-50%",
"mt-75p":"margin-top:-75%",
"mt-100p":"margin-top:-100%",
"mt-150p":"margin-top:-150%",
"mt-175p":"margin-top:-175%",
"mt-200p":"margin-top:-200%",


"mt-1px":"margin-top:-1px",
"mt-2px":"margin-top:-2px",
"mt-3px":"margin-top:-3px",
"mt-4px":"margin-top:-4px",
"mt-5px":"margin-top:-5px",
"mt-10px":"margin-top:-10px",
"mt-15px":"margin-top:-15px",
"mt-20px":"margin-top:-20px",
'mt-12px':'margin-top:-12px',
'mt-15px':'margin-top:-15px',
'mt-18px':'margin-top:-18px',
'mt-20px':'margin-top:-20px',
'mt-22px':'margin-top:-22px',
'mt-24px':'margin-top:-24px',
'mt-25px':'margin-top:-25px',
'mt-30px':'margin-top:-30px',
'mt-40px':'margin-top:-40px',
'mt-50px':'margin-top:-50px',
'mt-60px':'margin-top:-60px',
'mt-70px':'margin-top:-70px',
'mt-80px':'margin-top:-80px',
'mt-90px':'margin-top:-90px',
'mt-100px':'margin-top:-100px',

//------------------Marginbottom
//Margin-bottom
"mb0d25em":"margin-bottom:0.25em",
"mb0d5em":"margin-bottom:0.5em",
"mb1em":"margin-bottom:1em",
"mb1d5em":"margin-bottom:1.5em",
"mb1d75em":"margin-bottom:1.75em",
"mb1d25em":"margin-bottom:1.25em",
"mb2em":"margin-bottom:2em",

"mb0d125rem":"margin-bottom:0.125rem",
"mb0d25rem":"margin-bottom:0.25rem",
"mb0d3rem":"margin-bottom:0.3rem",
"mb0d375rem":"margin-bottom:0.375rem",
"mb0d625rem":"margin-bottom:0.625rem",
"mb0d5rem":"margin-bottom:0.5rem",
"mb0d75rem":"margin-bottom:0.75rem",
"mb1rem":"margin-bottom:1rem",
"mb1d25rem":"margin-bottom:1.25rem",
"mb1d5rem":"margin-bottom:1.5rem",
"mb1d75rem":"margin-bottom:1.75rem",
"mb2rem":"margin-bottom:2rem",
"mb2d25rem":"margin-bottom:2.25rem",
"mb2d5rem":"margin-bottom:2.5rem",
"mb2d75rem":"margin-bottom:2.75rem",
"mb3rem":"margin-bottom:3rem",
"mb3d25rem":"margin-bottom:3.25rem",
"mb3d5rem":"margin-bottom:3.5rem",
"mb3d75rem":"margin-bottom:3.75rem",
"mb4rem":"margin-bottom:4rem",
"mb4d5rem":"margin-bottom:4.5rem",
"mb5rem":"margin-bottom:5rem",


"mb1p":"margin-bottom:1%",
"mb2p":"margin-bottom:2%",
"mb3p":"margin-bottom:3%",
"mb4p":"margin-bottom:4%",
"mb5p":"margin-bottom:5%",
"mb10p":"margin-bottom:10%",
"mb15p":"margin-bottom:15%",
"mb20p":"margin-bottom:20%",
"mb25p":"margin-bottom:25%",
"mb50p":"margin-bottom:50%",
"mb75p":"margin-bottom:75%",
"mb100p":"margin-bottom:100%",
"mb150p":"margin-bottom:150%",
"mb175p":"margin-bottom:175%",
"mb200p":"margin-bottom:200%",


"mb1px":"margin-bottom:1px",
"mb2px":"margin-bottom:2px",
"mb3px":"margin-bottom:3px",
"mb4px":"margin-bottom:4px",
"mb5px":"margin-bottom:5px",
"mb10px":"margin-bottom:10px",
"mb15px":"margin-bottom:15px",
"mb20px":"margin-bottom:20px",
 'mb12px':'margin-bottom:12px',
 'mb15px':'margin-bottom:15px',
 'mb18px':'margin-bottom:18px',
 'mb20px':'margin-bottom:20px',
 'mb22px':'margin-bottom:22px',
 'mb24px':'margin-bottom:24px',
 'mb25px':'margin-bottom:25px',
 'mb30px':'margin-bottom:30px',
 'mb40px':'margin-bottom:40px',
 'mb50px':'margin-bottom:50px',
 'mb60px':'margin-bottom:60px',
 'mb70px':'margin-bottom:70px',
 'mb80px':'margin-bottom:80px',
 'mb90px':'margin-bottom:90px',
 'mb100px':'margin-bottom:100px',
 //Negative
"mb-0d25em":"margin-bottom:-0.25em",
"mb-0d5em":"margin-bottom:-0.5em",
"mb-1em":"margin-bottom:-1em",
"mb-1d5em":"margin-bottom:-1.5em",
"mb-1d75em":"margin-bottom:-1.75em",
"mb-1d25em":"margin-bottom:-1.25em",
"mb-2em":"margin-bottom:-2em",

"mb-0d125rem":"margin-bottom:-0.125rem",
"mb-0d25rem":"margin-bottom:-0.25rem",
"mb-0d3rem":"margin-bottom:-0.3rem",
"mb-0d375rem":"margin-bottom:-0.375rem",
"mb-0d625rem":"margin-bottom:-0.625rem",
"mb-0d5rem":"margin-bottom:-0.5rem",
"mb-0d75rem":"margin-bottom:-0.75rem",
"mb-1rem":"margin-bottom:-1rem",
"mb-1d25rem":"margin-bottom:-1.25rem",
"mb-1d5rem":"margin-bottom:-1.5rem",
"mb-1d75rem":"margin-bottom:-1.75rem",
"mb-2rem":"margin-bottom:-2rem",
"mb-2d25rem":"margin-bottom:-2.25rem",
"mb-2d5rem":"margin-bottom:-2.5rem",
"mb-2d75rem":"margin-bottom:-2.75rem",
"mb-3rem":"margin-bottom:-3rem",
"mb-3d25rem":"margin-bottom:-3.25rem",
"mb-3d5rem":"margin-bottom:-3.5rem",
"mb-3d75rem":"margin-bottom:-3.75rem",
"mb-4rem":"margin-bottom:-4rem",
"mb-4d5rem":"margin-bottom:-4.5rem",
"mb-5rem":"margin-bottom:-5rem",

"mb-1p":"margin-bottom:-1%",
"mb-2p":"margin-bottom:-2%",
"mb-3p":"margin-bottom:-3%",
"mb-4p":"margin-bottom:-4%",
"mb-5p":"margin-bottom:-5%",
"mb-10p":"margin-bottom:-10%",
"mb-15p":"margin-bottom:-15%",
"mb-20p":"margin-bottom:-20%",
"mb-25p":"margin-bottom:-25%",
"mb-50p":"margin-bottom:-50%",
"mb-75p":"margin-bottom:-75%",
"mb-100p":"margin-bottom:-100%",
"mb-150p":"margin-bottom:-150%",
"mb-175p":"margin-bottom:-175%",
"mb-200p":"margin-bottom:-200%",

"mb-1px":"margin-bottom:-1px",
"mb-2px":"margin-bottom:-2px",
"mb-3px":"margin-bottom:-3px",
"mb-4px":"margin-bottom:-4px",
"mb-5px":"margin-bottom:-5px",
"mb-10px":"margin-bottom:-10px",
"mb-15px":"margin-bottom:-15px",
"mb-20px":"margin-bottom:-20px",
'mb-12px':'margin-bottom:-12px',
'mb-15px':'margin-bottom:-15px',
'mb-18px':'margin-bottom:-18px',
'mb-20px':'margin-bottom:-20px',
'mb-22px':'margin-bottom:-22px',
'mb-24px':'margin-bottom:-24px',
'mb-25px':'margin-bottom:-25px',
'mb-30px':'margin-bottom:-30px',
'mb-40px':'margin-bottom:-40px',
'mb-50px':'margin-bottom:-50px',
'mb-60px':'margin-bottom:-60px',
'mb-70px':'margin-bottom:-70px',
'mb-80px':'margin-bottom:-80px',
'mb-90px':'margin-bottom:-90px',
'mb-100px':'margin-bottom:-100px',

//------------------padding

"p0d25em":"padding:0.25em",
"p0d5em":"padding:0.5em",
"p1em":"padding:1em",
"p1d5em":"padding:1.5em",
"p1d75em":"padding:1.75em",
"p1d25em":"padding:1.25em",
"p2em":"padding:2em",

"p0d125rem":"padding:0.125rem",
"p0d25rem":"padding:0.25rem",
"p0d3rem":"padding:0.3rem",
"p0d375rem":"padding:0.375rem",
"p0d625rem":"padding:0.625rem",
"p0d5rem":"padding:0.5rem",
"p0d75rem":"padding:0.75rem",
"p1rem":"padding:1rem",
"p1d25rem":"padding:1.25rem",
"p1d5rem":"padding:1.5rem",
"p1d75rem":"padding:1.75rem",
"p2rem":"padding:2rem",

"p1p":"padding:1%",
"p2p":"padding:2%",
"p3p":"padding:3%",
"p4p":"padding:4%",
"p5p":"padding:5%",

"p1px":"padding:1px",
"p2px":"padding:2px",
"p5px":"padding:5px",
"p10px":"padding:10px",
"p20px":"padding:20px",


//padding-bottom
"pb0d25em":"padding-bottom:0.25em",
"pb0d5em":"padding-bottom:0.5em",
"pb1em":"padding-bottom:1em",
"pb1d5em":"padding-bottom:1.5em",
"pb1d75em":"padding-bottom:1.75em",
"pb1d25em":"padding-bottom:1.25em",
"pb2em":"padding-bottom:2em",

"pb0d125rem":"padding-bottom:0.125rem",
"pb0d25rem":"padding-bottom:0.25rem",
"pb0d3rem":"padding-bottom:0.3rem",
"pb0d375rem":"padding-bottom:0.375rem",
"pb0d625rem":"padding-bottom:0.625rem",
"pb0d5rem":"padding-bottom:0.5rem",
"pb0d75rem":"padding-bottom:0.75rem",
"pb1rem":"padding-bottom:1rem",
"pb1d25rem":"padding-bottom:1.25rem",
"pb1d5rem":"padding-bottom:1.5rem",
"pb1d75rem":"padding-bottom:1.75rem",
"pb2rem":"padding-bottom:2rem",
"pb2d25rem":"padding-bottom:2.25rem",
"pb2d5rem":"padding-bottom:2.5rem",
"pb2d75rem":"padding-bottom:2.75rem",
"pb3rem":"padding-bottom:3rem",

"pb1p":"padding-bottom:1%",
"pb2p":"padding-bottom:2%",
"pb3p":"padding-bottom:3%",
"pb4p":"padding-bottom:4%",
"pb5p":"padding-bottom:5%",
"pb10p":"padding-bottom:10%",
"pb15p":"padding-bottom:15%",
"pb20p":"padding-bottom:20%",
"pb25p":"padding-bottom:25%",
"pb50p":"padding-bottom:50%",
"pb75p":"padding-bottom:75%",
"pb100p":"padding-bottom:100%",

"pb1px":"padding-bottom:1px",
"pb2px":"padding-bottom:2px",
"pb3px":"padding-bottom:3px",
"pb4px":"padding-bottom:4px",
"pb5px":"padding-bottom:5px",
"pb10px":"padding-bottom:10px",
"pb15px":"padding-bottom:15px",
"pb20px":"padding-bottom:20px",
 'pb12px':'padding-bottom:12px',
 'pb15px':'padding-bottom:15px',
 'pb18px':'padding-bottom:18px',
 'pb20px':'padding-bottom:20px',
 'pb22px':'padding-bottom:22px',
 'pb24px':'padding-bottom:24px',
 'pb25px':'padding-bottom:25px',
 'pb30px':'padding-bottom:30px',


//------------------padding
//padding-top
"pt0d25em":"padding-top:0.25em",
"pt0d5em":"padding-top:0.5em",
"pt1em":"padding-top:1em",
"pt1d5em":"padding-top:1.5em",
"pt1d75em":"padding-top:1.75em",
"pt1d25em":"padding-top:1.25em",
"pt2em":"padding-top:2em",

"pt0d125rem":"padding-top:0.125rem",
"pt0d25rem":"padding-top:0.25rem",
"pt0d3rem":"padding-top:0.3rem",
"pt0d375rem":"padding-top:0.375rem",
"pt0d625rem":"padding-top:0.625rem",
"pt0d5rem":"padding-top:0.5rem",
"pt0d75rem":"padding-top:0.75rem",
"pt1rem":"padding-top:1rem",
"pt1d25rem":"padding-top:1.25rem",
"pt1d5rem":"padding-top:1.5rem",
"pt1d75rem":"padding-top:1.75rem",
"pt2rem":"padding-top:2rem",
"pt2d25rem":"padding-top:2.25rem",
"pt2d5rem":"padding-top:2.5rem",
"pt2d75rem":"padding-top:2.75rem",
"pt3rem":"padding-top:3rem",

"pt1p":"padding-top:1%",
"pt2p":"padding-top:2%",
"pt3p":"padding-top:3%",
"pt4p":"padding-top:4%",
"pt5p":"padding-top:5%",
"pt10p":"padding-top:10%",
"pt15p":"padding-top:15%",
"pt20p":"padding-top:20%",
"pt25p":"padding-top:25%",
"pt50p":"padding-top:50%",
"pt75p":"padding-top:75%",
"pt100p":"padding-top:100%",


"pt1px":"padding-top:1px",
"pt2px":"padding-top:2px",
"pt3px":"padding-top:3px",
"pt4px":"padding-top:4px",
"pt5px":"padding-top:5px",
"pt10px":"padding-top:10px",
"pt15px":"padding-top:15px",
"pt20px":"padding-top:20px",
 'pt12px':'padding-top:12px',
 'pt15px':'padding-top:15px',
 'pt18px':'padding-top:18px',
 'pt20px':'padding-top:20px',
 'pt22px':'padding-top:22px',
 'pt24px':'padding-top:24px',
 'pt25px':'padding-top:25px',
 'pt30px':'padding-top:30px',
 
//------------------padding
//padding-left
"pl0d25em":"padding-left:0.25em",
"pl0d5em":"padding-left:0.5em",
"pl1em":"padding-left:1em",
"pl1d5em":"padding-left:1.5em",
"pl1d75em":"padding-left:1.75em",
"pl1d25em":"padding-left:1.25em",
"pl2em":"padding-left:2em",

"pl0d125rem":"padding-left:0.125rem",
"pl0d25rem":"padding-left:0.25rem",
"pl0d3rem":"padding-left:0.3rem",
"pl0d375rem":"padding-left:0.375rem",
"pl0d625rem":"padding-left:0.625rem",
"pl0d5rem":"padding-left:0.5rem",
"pl0d75rem":"padding-left:0.75rem",
"pl1rem":"padding-left:1rem",
"pl1d25rem":"padding-left:1.25rem",
"pl1d5rem":"padding-left:1.5rem",
"pl1d75rem":"padding-left:1.75rem",
"pl2rem":"padding-left:2rem",
"pl2d25rem":"padding-left:2.25rem",
"pl2d5rem":"padding-left:2.5rem",
"pl2d75rem":"padding-left:2.75rem",
"pl3rem":"padding-left:3rem",

"pl1p":"padding-left:1%",
"pl2p":"padding-left:2%",
"pl3p":"padding-left:3%",
"pl4p":"padding-left:4%",
"pl5p":"padding-left:5%",
"pl10p":"padding-left:10%",
"pl15p":"padding-left:15%",
"pl20p":"padding-left:20%",
"pl25p":"padding-left:25%",
"pl50p":"padding-left:50%",
"pl75p":"padding-left:75%",
"pl100p":"padding-left:100%",

"pl1px":"padding-left:1px",
"pl2px":"padding-left:2px",
"pl3px":"padding-left:3px",
"pl4px":"padding-left:4px",
"pl5px":"padding-left:5px",
"pl10px":"padding-left:10px",
"pl15px":"padding-left:15px",
"pl20px":"padding-left:20px",
 'pl12px':'padding-left:12px',
 'pl15px':'padding-left:15px',
 'pl18px':'padding-left:18px',
 'pl20px':'padding-left:20px',
 'pl22px':'padding-left:22px',
 'pl24px':'padding-left:24px',
 'pl25px':'padding-left:25px',
 'pl30px':'padding-left:30px',
 
//------------------padding
//padding-right
"pr0d25em":"padding-right:0.25em",
"pr0d5em":"padding-right:0.5em",
"pr1em":"padding-right:1em",
"pr1d5em":"padding-right:1.5em",
"pr1d75em":"padding-right:1.75em",
"pr1d25em":"padding-right:1.25em",
"pr2em":"padding-right:2em",

"pr0d125rem":"padding-right:0.125rem",
"pr0d25rem":"padding-right:0.25rem",
"pr0d3rem":"padding-right:0.3rem",
"pr0d375rem":"padding-right:0.375rem",
"pr0d625rem":"padding-right:0.625rem",
"pr0d5rem":"padding-right:0.5rem",
"pr0d75rem":"padding-right:0.75rem",
"pr1rem":"padding-right:1rem",
"pr1d25rem":"padding-right:1.25rem",
"pr1d5rem":"padding-right:1.5rem",
"pr1d75rem":"padding-right:1.75rem",
"pr2rem":"padding-right:2rem",
"pr2d25rem":"padding-right:2.25rem",
"pr2d5rem":"padding-right:2.5rem",
"pr2d75rem":"padding-right:2.75rem",
"pr3rem":"padding-right:3rem",

"pr1p":"padding-right:1%",
"pr2p":"padding-right:2%",
"pr3p":"padding-right:3%",
"pr4p":"padding-right:4%",
"pr5p":"padding-right:5%",
"pr10p":"padding-right:10%",
"pr15p":"padding-right:15%",
"pr20p":"padding-right:20%",
"pr25p":"padding-right:25%",
"pr50p":"padding-right:50%",
"pr75p":"padding-right:75%",
"pr100p":"padding-right:100%",

"pr1px":"padding-right:1px",
"pr2px":"padding-right:2px",
"pr3px":"padding-right:3px",
"pr4px":"padding-right:4px",
"pr5px":"padding-right:5px",
"pr10px":"padding-right:10px",
"pr15px":"padding-right:15px",
"pr20px":"padding-right:20px",
 'pr12px':'padding-right:12px',
 'pr15px':'padding-right:15px',
 'pr18px':'padding-right:18px',
 'pr20px':'padding-right:20px',
 'pr22px':'padding-right:22px',
 'pr24px':'padding-right:24px',
 'pr25px':'padding-right:25px',
 'pr30px':'padding-right:30px',

};//endofstaticclassName

//-----------------------------end of modal


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const classPrinter=__webpack_require__(4);

const acssLiveUpdate=__webpack_require__(9);

window.openAcssLiveEditor=acssLiveUpdate;
classPrinter.launch();
window.classPrinter=classPrinter;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

 //const compiler=require("./compiler.js");
 const ACSSMediaQuery=__webpack_require__(5);
 const ACSSClone=__webpack_require__(6);
 const statementMaker=__webpack_require__(7);
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





/***/ }),
/* 5 */
/***/ (function(module, exports) {

// -------------------------------------------query

//limitation of mw extension , not able to use pseduo effect like hover , seduo
var ACSSMediaQuery=function(query){
	//this.element=element;
	this.className=query.split(":")[0];
	this.classList=query.match(/\[(.+)\]/)[1].trim();
	this.query=query.split(":")[1].replace(/\[(.+)\]/,"").replace(/\s/g,"");
	this.feature={
			w:"width ",
			mw:"min-width ",
			xw:"max-width",
			h:"height",
			mh:"min-height",
			xh:"max-height",
			dw:"device-width ",
			mdw:"min-device-width ",
			xdw:"max-device-width",
			dh:"device-height",
			mdh:"min-device-height",
			xdh:"max-device-height",
			ar:"aspect-ratio",
			mar:"min-aspect-ratio",
			xar:"max-aspect-ratio",
			dar:"device-aspect-ratio",
			mdar:"min-device-aspect-ratio",
			xdar:"max-device-aspect-ratio",
			c:"color",
			mc:"min-color",
			xc:"max-color",
			ci:"color-index",
			mci:"min-color-index",
			xci:"max-color-index",
			m:"monochrome",
			mm:"min-monochrome",
			xm:"max-monochrome",
			r:"resolution",
			mr:"min-resolution",
			xr:"max-resolution",
			//sp:"scan:progressive",
			//si:"scan:interace",
			g:"grid",
			//op:"orientation:portrait",
			//ol:"orientation:landscape"
  		};

  		  //mq="classname:all and (color-index)[br5px w100px]"
  		  //xmq="className:*&(ci)[br5px h100p]"

	this.type={
		a:"all",au:"aural",b:"braille",h:"handheld",p:"print",
		pj:"projection",s:"screen",tty:"tty",tv:"tv",e:"embossed"
	}
};
ACSSMediaQuery.prototype.setQuery=function(){

		var that=this;
	   var  symbolfilter=this.query.replace(/\|/g,", ")
	           	.replace("?", " only ")
	           	.replace("*"," all ")
	           	.replace("!", " not ");
	           	//for type alias
	     if(symbolfilter.match(/(au|b|h|p|pj|s|tty|tv|e)[-|&]/)){
	     		var typealias=symbolfilter.match(/(au|b|h|p|pj|s|tty|tv|e)[-|&]/)[1];
				var type=this.type[typealias];
				symbolfilter=symbolfilter.replace(typealias," "+type+" ").replace("-","");
	     }
	     // for every '&'
	     symbolfilter=symbolfilter.replace(/&/g," and ");
	     //feature handler
	     if(symbolfilter.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/)){
	     	var featurreList=symbolfilter.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/g);
	     	featurreList.forEach(function(each){
	     		var featurealias=each.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/)[1];
	     			var feature=that.feature[featurealias];
	     			if(each.match(/[0-9]/)){
	     				symbolfilter=symbolfilter.replace("("+featurealias,"("+feature+": ");
	     			}else{
	     				symbolfilter=symbolfilter.replace(each,"("+feature+")");
	     			}
	     	});
	     }
	     //static feature
	     symbolfilter=symbolfilter.replace("(si)"," (scan: interace) ")
	     					.replace("(sp)","(scan: progressive) ")
	     					.replace("(op)"," (orientation: portrait) ")
	     					.replace("(ol)"," (orientation: landscape) ");

	     return symbolfilter;



};
module.exports=ACSSMediaQuery;
//-----------------------------end of query

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// AliasCSS, before cloning check if it has classname to clone or not
// -------------------------------------------clone
//Clone classname of any element to this element
	var ACSSClone=function(element){

		//checking if it has cloneElement attrinute
	if(element.getAttribute("cloneElement")){
		var id=element.getAttribute("cloneElement").replace("#","");
		getClassElement=document.getElementById(id);
		element.className=getClassElement.className+" "+element.className;

	}
	if(element.getAttribute("cloneChild") ||element.getAttribute("cloneChildOdd")||element.getAttribute("cloneChildEven")){
		var odd="",even="", all="";
		function getClassName(attri){
			var  getClassElement=document.getElementById(attri.replace("#",""));
			if(getClassElement){
			 return getClassElement.className;
			}else{
				return "";
			}
		}
		if(element.getAttribute("cloneChild")){
			all=getClassName(element.getAttribute("cloneChild"));
		}
		if(element.getAttribute("cloneChildOdd")){
			odd=getClassName(element.getAttribute("cloneChildOdd"));
		}
		if(element.getAttribute("cloneChildEven")){
			even=getClassName(element.getAttribute("cloneChildEven"));
		}

		Array.prototype.forEach.call(element.children,function(each,i){
			//if(each.className.match(getClassElement.className)){return true;}
			if((i+1)%2){

				oddeven=odd.replace(each.className,"");
			}else{
				oddeven=even.replace(each.className,"");
			}
			escape_all=all.replace(each.className,"");
			each.className=oddeven+" "+escape_all+" "+each.className;
			});
		}
};
module.exports=ACSSClone;

//-----------------------------end of clone

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


//imports
var aliasProperty=__webpack_require__(0);
var staticClassNames=__webpack_require__(1)
var devicePesduoBrowserEventAlias=__webpack_require__(2);
var compiler=__webpack_require__(8);

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
			console.log(cn);
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







/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


//imports
var aliasProperty=__webpack_require__(0);
var staticClassNames=__webpack_require__(1)
var devicePesduoBrowserEventAlias=__webpack_require__(2);

//locals

var compiler={
	
		//-----------------Function Factory-----------------------------------------------------------------------------
	
		//----------------------------Core functional Unit Compilers (CPU)	
		//helper function for Time functioning
	 	animation_transition_tf:function(each){
	 		console.log(each);
			var func="";
			var N="";
			 var funcAlias={e:"ease",l:"linear",ei:"ease-in",eo:"ease-out",eio:"ease-in-out",ss:"step-start",se:"step-end"};
			 if(each.match(/cb[-]?[0-9]/)){
			 	if(each.match(/cb[-]/)){N="-"};
			 	var getN=each.match(/cb[-]?([0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*)/)[1];
			 		var value=getN.replace(/[-|_]([-]?)/g,",$1");
			 	value=value.replace(/d/g,".");
			 	func="cubic-bezeir("+N+value+")";
			 }else{

			 if(each.match(/[0-9]?[s|ms]?(e|l|ei|eo|eio|ss|se|s[0-9]+[s|e])/)){
			 	if(each.match(/s[0-9]+[s|e]/)){
			 		var se="";
			 		var eors=each.match(/s([0-9]+)([s|e])/);
			 			if(eors[2].match("s")){se="start";}else{se="end";}

			 		func="steps("+eors[1]+" ,"+ se+")";
			 	}else{
			 		func=each.match(/^(l|eo|eio|ss|se|ei|e)/)[1];
			 		func=funcAlias[func];
		    	}
		   	 }
			};
			return func;
		},
		///////////////////-----------url-------------/
		urlProcessor:function(each){
			if(each.match(/[u][r][l][_][A-Za-z0-9|_]+/)){var each=each.match(/[u][r][l][_][A-Za-z0-9|_]+/)[0];}else{return false;}
				var dire="";
				//var each=each.replace()
			    if(each.match(/url[_][1-9][_]/)){
			    var updir=each.match(/url[_]([1-9])_/)[1];
			    each=each.replace(/[_][1-9]([_])/,"$1");
			    for(i=1;i<=updir;i++){
			        dire=dire.concat("../");
			       }
			    }
			var clearExe=each.replace(/(_)([A-Za-z0-9]+$)/,".$2)");
			var clearUrl=clearExe.replace(/_/,"("+dire);
			var finalValue=clearUrl.replace(/_/g,"/");
			return finalValue;
			//note restriction not use folder with name that uses ../../also need to figure out for
		},


///////////////////-----------color-------------/
		colorProcessor:function(each){
			if(!each.match(/[c][_][0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{0,2}|[c][_][h][A-Ga-g0-9]{3,6}|[c][_][n][A-Za-z]+/)){return false;}
				var each=each.replace(/^[\w|-]*c_/,"");
				if(each.match(/-|_/)){each=each.split(/-|_/)[0];};
				if(each.match(/^[n]/)){return each.replace(/[n]([A-Za-z]+)[0-9]*[\w]*/,"$1");}
				else if(each.match(/^[h]/)){return each.replace(/[h]([A-Ga-g0-9]{3,6})[\w]*/,"#$1");}
				else if(each.match(/[0-9][p]/g)&& each.match(/[0-9][p]/g).length==3){//this rgb in %
						if(each.match(/p$/)){
							 var value="rgb(" + each.replace(/p/g,"%, ") + ")";
							 value=value.replace(/[,][\s]*[)]/,")");
							return value;
						}else if(each.match(/p([0-9]{2})$/)){
							 alpha=each.match(/p([0-9]{2})$/)[1];
							 each=each.replace(/[0-9]{2}$/,"");
							if(alpha<11){ alpha=alpha/10;}else{alpha=alpha/100;}
							return "rgba(" + each.replace(/p/g,"%, ") + alpha + ")";

						}
			  }
				else if(each.match(/[0-9][p]/g) && each.match(/[0-9][p]/g).length==2){//this is hsl
					var h=each.match(/[0-9]{3}/)[0];
					each=each.replace(/[0-9]{3}/,"");
					if(each.match(/p$/)){

							var value= "hsl(" +h+ ", "+ each.replace(/p/g,"%, ") + ")";
							value=value.replace(/[,][\s]*[)]/,")");
							return value;
						}else if(each.match(/p([0-9]{2})$/)){
							var alpha=each.match(/p([0-9]{2})$/)[1];
							each=each.replace(/[0-9]{2}$/,"");
							if(alpha<11){ alpha=alpha/10;}else{alpha=alpha/100;}
							return "hsla(" +h +", "+  each.replace(/p/g,"%, " ) + alpha + ")";

						}

					}
				else if(each.match(/[0-9]{9,11}/)){//this is rgb in number

					if(each.length==9){//noalpha
						return "rgb(" + each.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/," $1, $2, $3 ") + ")";
						}else if(each.length==11){//yes alpha
							var alpha=each.match(/[0-9]{2}$/)[0];
								each=each.replace(/[0-9]{2}$/,"");
							if(alpha<11){ alpha=alpha/10;}else{alpha=alpha/100;}
							return "rgba(" + each.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/," $1, $2, $3, ") + alpha +")";
						}
					}

		},



///////////////////-----------Lenght-------------/
		lengthProcessor:function(each){//the ‘cm’, ‘mm’, ‘in’, ‘pt’, ‘pc’ units
			 //filter other unit conflit
			 	if(each.match(/[c][_][0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{0,2}/)){
			 		var each=each.replace(/[c][_][0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{0,2}/,"");
			 	}


			var matchlengthonly=/[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc)/g;
			var lengthArray=each.match(matchlengthonly);
			if(!lengthArray){return false;}
			var lengthString=lengthArray.toString();
			var lengthescapepercentage=lengthString.replace(/p(,)|p$/g,"%$1");
			var lengthescapedecimal=lengthescapepercentage.replace(/d/g,".");
			return lengthescapedecimal.replace(/[,]/g," ");

		},



///////////////////-----------font-------------/
		fontProcessor:function(each){
			//‘serif’, ‘sans-serif’, ‘cursive’, ‘fantasy’, and ‘monospace’
			if(!each.match(/^ff_|f_/)){return false;}
			var each=each.replace(/ff_|f_/,"");
			var genericFontAlias={s:"serif", ss:"sans-serif", c:"cursive", f:"fantasy", m: "monospace"};
			if(each.match(/[_]?(s|ss|c|f|m)$/)){
				var matchGF=each.match(/[_]?(ss|s|c|f|m)$/)[1];
				var each=each.replace(/([_])(ss|s|c|f|m)$/,"$1" + genericFontAlias[matchGF]);

			}
			//ff var fontInArray=""
			return each.replace(/[_]/g,", ").replace(/--/g," ");


		},



///////////////////-----------[angletime frequen]-------------/
		angleTimeFrequencyResolutionProcessor:function(each){
			///deg| grad| rad| turn dpi| dpcm| dppxHz| kHz|s|ms/;
			var matchitonly=/[-]?[0-9]+[d]?[0-9]*(deg|grad|rad|turn|dpi|dpcm|dppx|Hz|hz|kHz|khz|s|ms)/g;
			var lengthArray=each.match(matchitonly);
			if(!lengthArray){return false;}
			var lengthString=lengthArray.toString();

			var valueescapedecimal=lengthString.replace(/([0-9])[d]([0-9])/g,"$1.$2");
			return valueescapedecimal.replace(/[,]/g," ");
		},



///////////////////-----------[gradient]-------------/
		gradientProcessor:function(each){
			var angleAlias={l:"left",r:"right",t:"top",b:"bottom",c:"center"};
			var m=/[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax)|[c][_][0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{0,2}|[c][_][h][a-g0-9]{3,6}|[c][_][n][A-Za-z]+/g;
			var marray=each.match(m);
			if(!marray) return false;
			var filterValue=[];
			marray.forEach(function(each){
				if(compiler.colorProcessor(each)){filterValue.push(","+compiler.colorProcessor(each));}else if(compiler.lengthProcessor(each)){filterValue.push(compiler.lengthProcessor(each));}
			});
			var stringValue=filterValue.join(" ");
			var colorNposition=stringValue.replace(/([\s][\w]+[%|#]*[\s])/g,"$1").replace(/[,][\s]*[,]/,",");
			var angle="top";
			var gradient=null;
			if(each.match(/lg/)){gradient="linear-gradient";}else{gradient="radial-gradient" ;}
			if(each.match(/[l|r][g]([t|r|l|b|c])/)){
				var alias=each.match(/[l|r][g]([t|r|l|b|c])/)[1];
				angle=angleAlias[alias];
			}else{if(this.angleTimeFrequencyResolutionProcessor(each)){angle=this.angleTimeFrequencyResolutionProcessor(each);}}

			var gradientValue=gradient+"("+angle  + colorNposition+")";
			return gradientValue;
		},


///////////////////-----------[angle]-------------/
		angleProcessor:function(){},


///////////////////-----------[Animation]-------------/
		animationProcessor:function(each){
			if(each.match(/^atf/)){
			 return this.animation_transition_tf(each.replace(/atf/,''));
			}
			var name="",du="",dl="",direction="",playstate="",aic="",fillmode="",atf="";
			var matchName=/^an_([A-Za-z0-9]+)[-|_]?/;
			name=each.match(matchName)[1];
			each=each.replace("an_"+name,"");
			var evaluateObj={fillmode:{bw:"backwards",bo:"both",fw:"forwards"},
							  direction:{ar:"alternative-reverse",nl:"normal",re:"reverse",al:"alternative"}
								};
			if(each.match(/[-|_](bw|bo|fw)/)){fillmode=evaluateObj.fillmode[each.match(/[-|_](bw|bo|fw)/)[1]];}
			if(each.match(/[-|_](ar|nl|re|al)/)){ direction=evaluateObj.direction[each.match(/[-|_](ar|nl|re|al)/)[1]];}
			//if(each.match(/[-|_](cb[0-9]+[d]?[0-9][-]?+))
			//var atf=this.animation_transition_tf(each);

			var time=(this.angleTimeFrequencyResolutionProcessor(each))?this.angleTimeFrequencyResolutionProcessor(each).replace(/-/g,"").trim().split(" "):"";
			if(time[0]){du=time[0];}
			if(time[1]){dl=time[1];}
			if(each.match(/[-|_][r|p]$/)){playstate=(each.match(/r$/))?"running":"paused";
			}
			if(each.match(/c[0-9|i]+/)){aic=(each.match(/c([0-9]+)/))?each.match(/c([0-9]+)/)[1]:"infinite";}

			return name+" "+du+" "+atf+" "+dl+" "+aic+" "+direction+" "+fillmode+" "+playstate;
		},


///////////////////-----------[Transform]-------------/
		transformProcessor:function(each){
			var each=each.replace("tf","");
			var tfAlias={
				 m: "matrix",t: "translate" ,tx: "translateX",ty: "translateY",s: "scale" ,sx: "scaleX",
				 sy: "scaleY",r: "rotate",skx: "skewX",sky: "skewY",m3d: "matrix3d",t3d: "translate3d",
				 tz: "translateZ",s3d: "scale3d",sz: "scaleZ",r3d: "rotate3d",rx: "rotateX",ry: "rotateY",
				 rz: "rotateZ",p: "perspective",};
			var tfFunc="";
			var value="";
			(function(){
			var mLen=each.match(/^(tx|ty|tz|t3d|t|p)[0-9]/);
			if(mLen){tfFunc=tfAlias[mLen[1]];value=compiler.lengthProcessor(each).replace(/[ ]/g,","); return true;}

			var mNum=each.match(/^(m3d|m|sx|sy|sz|s3d|s|r3d)[0-9]/);
			if(mNum){
				tfFunc=tfAlias[mNum[1]];
				eeach=each.replace(/m3d|s3d|r3d/,"");
				if(eeach.match(/_/)){eeach=each.replace(/[_]/g,"px"); }
				eeach=eeach.concat("px");
				if(compiler.lengthProcessor(eeach)){value=compiler.lengthProcessor(eeach).replace(/px/g,",");}
				var a ="";
				if(each.match(/r3d/) && compiler.angleTimeFrequencyResolutionProcessor(eeach)){a=","+compiler.angleTimeFrequencyResolutionProcessor(eeach);};
				value=value.replace(/[,]$/,"")+a;
			 return true;
	        }
	        var mAng=each.match(/^(rx|ry|rz|r|sky|skx)[0-9]/);
			if(mAng){tfFunc=tfAlias[mAng[1]];value=compiler.angleTimeFrequencyResolutionProcessor(each); return true;}
			})();
			var tfValue=tfFunc+"("+value+")";
			return tfValue;
		},


///////////////////-----------[Transition]-------------/
		transitionProcessors:function(each){
			if(each.match(/^ttf/)){
				return this.animation_transition_tf(each.replace(/ttf/,''));
			}
			var _this=this;
			var pNv="";
			var ttf="";
			each=each.replace(/^t_/,"");
			//check if it has multiple 
			if(each.match(/--/)){
				each.split(/--/).forEach(function(e){
					var getPropertyAlias=e.match(/^([a-z]+)[0-9]+/)[1];
					if(aliasProperty.hasOwnProperty(getPropertyAlias)){
						pNv=pNv+aliasProperty[getPropertyAlias]; 
						e=e.replace(getPropertyAlias,"");
						pNv=pNv+" "+_this.angleTimeFrequencyResolutionProcessor(e);

					var forfunc=e.replace(/[A-Za-z0-9]+[-|_]?/,"");
					if(forfunc){
						ttf=_this.animation_transition_tf(forfunc);
						if(ttf) pNv=pNv+ " "+ttf;
					}

					pNv=pNv+" ,";
					
			 	}else{
							return false;
				}
				});
				return pNv.replace(/,$/,"");
			}else{
				var getPropertyAlias=each.match(/^([a-z]+)[0-9]+/)[1];
					if(aliasProperty.hasOwnProperty(getPropertyAlias)){
						pNv=pNv+aliasProperty[getPropertyAlias]; 
						each=each.replace(getPropertyAlias,"");
						pNv=pNv+" "+_this.angleTimeFrequencyResolutionProcessor(each);

					var forfunc=each.replace(/[A-Za-z0-9]+[-|_]?/,"");
					if(forfunc){
						ttf=_this.animation_transition_tf(forfunc);
						if(ttf) pNv=pNv+ " "+ttf;
					}

					return pNv;
					
			 	}else{
						return false;
				}
			}


		},
		transitionProcessor:function(each){
			return this.transitionProcessors(each);
			


		},

///////////////////-----------[content]-------------/
		contentProcessor:function(each){
			if(each.match(/^con_/)){
				if(each.match(/url/)){
					return this.urlProcessor(each.replace('con_',""));
				}else if(each.match(/con__/)){
					return "attr("+each.replace(/con__/,"")+")";

				}else{
					return "\""+each.replace("con_","").replace(/-/g," ")+"\"";
				}

			}

		},

//--------------------------------------Controller
matchAndCall:{
		length:{
			match:/^(bgp|bgs|bw|blw|brw|btw|btw|bbw|br|bblrs|btrrs|bblrs|btlrs|btm|bs|cw|cg|crw|fb|fs|h|l|lh|les|m|ma|mt|mr|mb|ml|xw|xh|mw|mh|mo|op|olw|olo|p|pa|pt|pr|pb|pl|pers|perso|r|t|tfo|ts|ti|va|w|ws)[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc)/,
			  callFunction:function(each){//console.log("i am a length");
			  	var propertyAlias=each.match(this.match)[1],
					getProperty=aliasProperty[propertyAlias],
					getValue=compiler.lengthProcessor(each);
					//fix margin auto;
					if(each.match(/m(a)?[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc)(a)?/)){
						if(each.match(/m(a)?[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc)(a)?/)[1]){
							getValue="auto "+getValue;
						}else if(each.match(/m(a)?[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc)(a)?/)[3]){
							getValue=getValue + " auto";
						}
					}

				return [getProperty,getValue];
			}
		},
		color:{
			match:/^(c|crc|tec|brc|blc|btc|bbc|bc|olc)[_]([0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{1,3}[p]?[0-9]{0,2}|[h][A-Ga-g0-9]{3,6}|[n][A-Za-z]+)/,
			  callFunction:function(each){//console.log("i am a color");
				var propertyAlias=each.match(this.match)[1],
					getProperty=aliasProperty[propertyAlias],
					getValue=compiler.colorProcessor(each);

				return [getProperty,getValue];

				}
			},
		url:{match:/^(bgi|i|lsi|c)[u][r][l][_][A-Za-z0-9|_]+/,
			  callFunction:function(each){//console.log("i am a length");
			  if(each.match(/curl/)){
						var getProperty="cursor";
					}else{
					var propertyAlias=each.match(this.match)[1];
					 var getProperty=aliasProperty[propertyAlias];
					}
					var getValue=compiler.urlProcessor(each);
			  	return [getProperty,getValue];
			  }
			},
		angleTimeFrequencyResolution:{match:/^(adu|adl|tdl|tdu)[-]?[\w]+(deg| grad| rad| turn dpi| dpcm| dppxHz| kHz|s|ms)/,
			  callFunction:function(each){//console.log("i am a angletime frequency");
			  	var propertyAlias=each.match(this.match)[1],
					getProperty=aliasProperty[propertyAlias],
					getValue=compiler.angleTimeFrequencyResolutionProcessor(each);
				return [getProperty,getValue];
			  }
			},
		borderLike:{match:/^(b|brt|bl|bt|bb|ol|cr)[-]?[0-9][\w]+[-]?(s|n|r|o|i|h|g|db|dt|ds)/,
			  callFunction:function(each){//console.log("i am a border");
			  	var styleAlias={n:"none", s:"solid", r:"ridge", o :"outset", i :"inset", h :"hidden", g : "groove", db:"double", dt:"dotted", ds : "dashed",};
				var propertyAlias=each.match(this.match)[1];
			    var getProperty=aliasProperty[propertyAlias];
			    var style="", length="", color="";
			    if(each.match(/ct|c_t/)){color="transparent";}
			    else if(compiler.colorProcessor(each)){color=compiler.colorProcessor(each);}
			    if(compiler.lengthProcessor(each)){length=compiler.lengthProcessor(each);};
			    if(each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)){
			    	var s=each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)[1];
			    	style=styleAlias[s];
			    }
			    //getMulipleValue=[];
			    getValue=style+" "+length+" "+color;
				return [getProperty,getValue];
			  }
			},
		numberonly:{match:/^(aic|cc|fg|fs|o|ord|lh|orp|op|zi)([-]?[0-9]+[d]?[0-9]*)$/,
			  callFunction:function(each){//console.log("i am a number only");
			  var propertyAlias=each.match(this.match)[1],
					getProperty=aliasProperty[propertyAlias],
					getValue=each.match(this.match)[2];
					getValue=getValue.replace(/d/,".");
					//fix opacity
					if(each.match(/^o[0-9]/) && !getValue.match(/[\.]/)){
						if(getValue<11){ getValue=getValue/10;}else{getValue=getValue/100;}
					}
				return [getProperty,getValue];
			  }
			},
		font:{match:/^(ff|f)[_]/,
			  callFunction:function(each){//console.log("i am a font");
			  var propertyAlias=each.match(this.match)[1];
					getProperty=aliasProperty[propertyAlias],
					getValue=compiler.fontProcessor(each);
				return [getProperty,getValue];
			  }
			},
		stringonly:{match:/^s_/,
			  callFunction:function(each){//console.log("i am a string");
				return ["string","Value"];
			  }
			},
		flex:{match:/^[f][0-9]/,//value type:flex: 2 2 10%;flex: 10em;flex: 2 2;flex: 2;
			  callFunction:function(each){//console.log("i am a flex");
			  	getProperty="flex";
				if(!each.match(/-|_/) && !compiler.lengthProcessor(each)){getValue=each.replace("f","");
				}else if(!each.match(/-|_/) && compiler.lengthProcessor(each)){getValue=compiler.lengthProcessor(each);
						}else{
							getValue=(each.replace("f","")).replace(/[_|-]/g," ");
							if(getValue.match(/[0-9]+[d][0-9]+/)){getValue=getValue.replace("d",".");}
						}
				return [getProperty,getValue];
			  }
			},
		gradient:{match:/^bg[i]?(lg|rg)?/,
			  callFunction:function(each){//console.log("i am a Gradient");
			  //var propertyAlias=each.match(/bg|bgi/)[0];
			  function getBgValue(each){
					if(each.match(/(bg|bgi)[l|r][g]/)){

						//its a  gradient;
						return compiler.gradientProcessor(each);

					}else{
						//its just basic bg
						var color="";if(each.match(/ct|c_t/)){color="transparent";}else if(compiler.colorProcessor(each)){color=compiler.colorProcessor(each);}
						var url="";if(compiler.urlProcessor(each)){url=compiler.urlProcessor(each);};
						var position="";if(compiler.lengthProcessor(each)){position=compiler.lengthProcessor(each);}
						var repo={r:"repeat",rx:"repeat-x", ry:"repeat-y",nr:"no-repeat",cc:"center center",rb:"right bottom",lt:"left top"};
						var repeat="";if(each.match(/[-|_](rx|ry|r|nr)/)){repeatkey=each.match(/[-|_](rx|ry|r|nr)/)[1];repeat=repo[repeatkey];};
						return color+" "+url+" "+position+" "+repeat;
					}
				}
				var getValue="";
				if(each.match("--")){
					var list=each.replace(/^(bgi|bg)/,"").split("--");
					list.forEach(function(value){
						value="bg"+value;
						getValue+=getBgValue(value)+",";
					})
					getValue=getValue.replace(/[,]$/,"");

				}else{
					getValue=getBgValue(each);
				}
				var getProperty=each.match("bgi")?"background-image":"background";
				return [getProperty,getValue];
			  }
			},
		boxShadow:{match:/(bxs|txs|flds)/,
			  callFunction:function(each){//console.log("i am a box");
			  var fl=false;
			  if(each.match(/flds/)){
			  	fl=true;
			  }
			  	var propertyAlias=each.match(this.match)[1];
					getProperty=aliasProperty[propertyAlias];
					if(each.match("--")){
						var list=each.replace(propertyAlias,"").split("--");
						var getValue="";
						list.forEach(function(value){
							value=propertyAlias+value;
							if(value.match(/(bxs|txs)[i]/)){ var i="inset";}else{var i="";}
							var split=value.split(/c_/);
							var length=compiler.lengthProcessor(split[0]);
							var color="c_"+split[1];
							color=compiler.colorProcessor(color);
							getValue+=i+" "+length+" "+color+",";
						});
						getValue=getValue.replace(/[,]$/,"");

					}else{

					if(each.match(/(bxs|txs)[i]/)){ var i="inset";}else{var i="";}
					var split=each.split(/c_/);
					var length=compiler.lengthProcessor(split[0]);
					var color="c_"+split[1];
					color=compiler.colorProcessor(color);
					getValue=i+" "+length+" "+color;
				}
					if(fl){
						return ['filter',"drop-shadow(" +getValue+")"];
					}
				return [getProperty,getValue];
			  }
			},
		filter:{match:/^fl([b|c|g|h|i|o|s][l|r|e]?)[0-9]+/,
			callFunction:function(each){

				getProperty='filter';
				var funcAlias={bl:'blur',b:'brightness',c:'contrast',g:'grayscale',
					hr:'hue-rotate',i:'invert',o:'opacity',s:'saturate',se:'sepia'};
				if(each.match(/[d]?[0-9]$/)){

					funcValue=each.match(/([0-9]*[d]?[0-9]+)/)[0].replace('d', '.');

				}else if(each.match(/flhr[0-9]+/)){
					funcValue=compiler.angleTimeFrequencyResolutionProcessor(each);
				}else{

					funcValue=compiler.lengthProcessor(each)?compiler.lengthProcessor(each):0;

				}
				getValue=funcAlias[each.match(this.match)[1]] + "(" +funcValue +")";
				return 	[getProperty,getValue];

			}

			},
		transform:{match:/^tf/,
			  callFunction:function(each){
			  //console.log("i am a Transform");
			  	var propertyAlias=each.match(/^(tf[o]?)/)[1];
				var getProperty=aliasProperty[propertyAlias];
			  if(each.match("--")){
			  	var list=each.replace("tf","").split("--");
				var getValue="";
				list.forEach(function(value){
					getValue+=compiler.transformProcessor(value)+" ";
				});


			  }else{
			  	var getValue=compiler.transformProcessor(each);
			  }


				return [getProperty,getValue];
			  }
			},
		transition:{match:/^t_[a-z]+[0-9]+|^ttf+/,//([a-z]+)[0-9]+
			  callFunction:function(each){//console.log("i am Transition");
			  if(each.match(/ttf/)){
			  	var getProperty="transition-timing-function";
			  }else{
			  	var getProperty="transition";
			  }
				var getValue=compiler.transitionProcessor(each);
				return [getProperty,getValue];
			  }
			},
		animation:{match:/atf[\w|-]{3}|an[-|_]/,
			callFunction:function(each){//console.log("i am a Animation");
				if(each.match(/atf/)){
					var getProperty="animation-timing-function"
				}else{
					var getProperty="animation";
				}

					var getValue=compiler.animationProcessor(each);

						return [getProperty,getValue];
				}
		},
		content:{match:/^con_/,
			callFunction:function(each){
				var getProperty="content";
				var getValue=compiler.contentProcessor(each);
				return [getProperty,getValue];
			}

		},

	},
	//--main-processor
	

};//end of module.export

module.exports=compiler;

 	

/***/ }),
/* 9 */
/***/ (function(module, exports) {


function openAcssRibbionBar(){
var	acssDesignBarLocked=false;
var currentElement=document.body;
var acssInputField;
//var infoMsg;
// var infoEle;
function acssDraggable(element){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }


}//end of drragle

function setClassToField(){
	acssInputField.value=currentElement.getAttribute('class');
}
function acssInputHandler(){
	// console.log(acssInputField);
	acssInputField.addEventListener("keydown",function(e){
                if(acssDesignBarLocked){return false;}
                var code = (e.keyCode ? e.keyCode : e.which);
                //if(code==8){getClassList="";}
                if(code==32 ||code==13){
                    if(code==13) e.preventDefault();
                    if(acssInputField.value.trim()){
                            currentElement.setAttribute("class",acssInputField.value.trim());
                    		classPrinter.main(currentElement);
                    
                    }
                }
                });
}
function buttonRole(){
		var buttonParent=document.getElementById("buttonParent");
        var buttonPrev=document.getElementById("buttonPrev");
        var buttonNext=document.getElementById("buttonNext");
        var buttonChild=document.getElementById("buttonChild"); 
  
       
        nextElement=function(){
        	
        		if(currentElement.nextElementSibling && currentElement.nextElementSibling.classList.contains("dont-include")){ return false;}
            return currentElement.nextElementSibling;
        };
        prevElement=function(){
            return currentElement.previousElementSibling;
        };
        childElement=function(){
            return currentElement.firstElementChild;
        };
        parent=function(){
            return currentElement.parentElement;
        };
        
        buttonNext.onclick=function(){
            if(nextElement()){
                //currentElement.style.border="";
                currentElement=nextElement();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;

		           infoMsg.innerHTML="";
		           setClassToField();
                 //settleOldClass(currentElement);
            }else{
                
                infoMsg.innerHTML="("+"<span style='color:red'>It has no next sibling Element</span>)";
                return false;
            }
        };
        buttonPrev.onclick=function(){
            if(prevElement()){
                //currentElement.style.border="";
                currentElement=prevElement();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no Previous sibling Element</span>)";
                return false;
            }
        };
        buttonParent.onclick=function(){
            if(parent()){
                //currentElement.style.border="";
                currentElement=parent();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no Parent Element</span>)";
                return false;
            }
        };
        buttonChild.onclick=function(){
            if(childElement()){
                //currentElement.style.border="";
                currentElement=childElement();
                infoEle.innerText="Element on Target :- "+ currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no child Element</span>)";
                return false;
            }
        };

        // buttonSave.onclick=function(){
        //     //doing nothigs now
        // };
        // buttonCancel.onclick=function(){
        //     classNameInput.value=oldClass;
        // }
};
function quickChangeSelectOnClick(element){

		var elements=element ?element:document.getElementsByTagName('*');
    	Array.prototype.forEach.call(elements,function(el){
        	 //if(!el.classList.contains("dont-include")){
		        el.addEventListener("click",function(e){
		            //console.log(this);
		            if(!el.classList.contains("dont-include")){
		            	
		                //var oldClass=this.getAttribute("class");
		                 //classNameInput.value=oldClass;
		                 //currentElement.style.border="";
		                 currentElement=this;
		                 //this.style.boxShadow="0px 0px 5px #ccc";
		                 //settleOldClass();
		                 infoEle.innerText="Element on Target :- "+this.nodeName.toLowerCase()+"#"+this.id;

		                 infoBarMsg="";
		                 setClassToField();
		            }
		            
		            e.stopPropagation();
		            e.preventDefault();

		        	},false);
	    	//}
		});
    };//end of quickChangeventilizer

    function quickChangeSelectByIdInput(selector){
    	if(selector){
    		selector.onchange=function(){
    			//console.log(this.value);
	            if(document.getElementById(this.value)){
	            	
	                currentElement=document.getElementById(this.value);
	                infoMsg='';
	                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
	                setClassToField();
	                //currentElement.element.style.boxShadow="0px 0px 5px #ccc";
	                //settleOldClass(currentElement);
	            }else{
	               infoMsg="("+"<span style='color:red'>There is no element with id:"+this.value+"</span>)";
	            }
	            
	        };
    	}

    };//End of Selector

 
function init(click){
	launchQuickChange();
	
 acssInputField=document.getElementById('quickChangeAcssInput')||"hello";
 var infoMsg=document.getElementById('infoMsg');
 var infoEle=document.getElementById('infoEle');
// action="";
//var acssInputField=document.getElementById('quickChangeAcssInput');
var oldElement="";
      quickChangeSelectOnClick();
      quickChangeSelectByIdInput(document.getElementById("quickChangeIdInput"));
      
      buttonRole();
      acssInputHandler();
      
    document.getElementById("quickChangeMin").onclick=function(){
	if(this.innerHTML=='-'){
		
		this.innerHTML="&equiv;";
		 document.getElementById("quickChangeBox").style.height="20px";
         document.getElementById("acss-live-editor-content").style.display="none";
         document.getElementById("acss-live-editor-footer").style.display="none";
		
	}else{
        document.getElementById("quickChangeBox").style.height="200px";
         document.getElementById("acss-live-editor-content").style.display="block";
         document.getElementById("acss-live-editor-footer").style.display="block";
		this.innerHTML="-";
		 
	}
};
document.getElementById("quickChangeClose").onclick=function(){
	if (confirm('Are you sure you want to close Acss Live Editor?\n You can reopen by typing openAcssLiveEditor(); in console')) {
    // Save it!
    var ele=document.getElementById("quickChangeBox");
    ele.parentNode.removeChild(ele);
    

		} else {
		    // Do nothing!
		}
		
	
};


	}//end of init
	
//--------------ScriptManager-------------


// --------------------------------HTML Display-----------------------------
function launchQuickChange(){
var newinnerHTML=' <div sid="alias-css-live-editor" id="quickChangeBox" class="dont-include zi1111111111 bxs0px0px5px2pxc_00000000005 _input_lhi2 _button_lhi2 ffi2 fs12px bgc_hfff w200px h200px b1px_s_c_00000000002 br5px r5px btm5px pf">\
    <div sid="alias-css-live-editorheader" id="quickChangeBoxheader" class="bgc_hccc h20px bb1px_s_c_00000000002 h_cm dont-include">\
        <span class="fs12px m0px5px ff_arial dont-include">Acss Live Update 1.2</span>\
        <div class="dib fr m0p5px dont-include">\
            <button id="quickChangeMin" class="br0px bgc_heee fw9 dont-include ">-</button>\
            <button id="quickChangeClose" class="br0px bgc_heee fw9 dont-include">&times;</button>\
        </div>\
    </div>\
    <div id="acss-live-editor-content"class="bgc_heee h157px bb1px_s_c_00000000002 tac dont-include">\
        <p class="fs13px m0px p3px dont-include">\
            Click element -or-<input type="text" style="" id="quickChangeIdInput" class="dont-include w85px" placeholder="input id of element">\
        </p>\
         <hr class=" dont-include m4px0px">\
        <div class="tal dont-include ">\
            <small id="infoEle"class="ff_arial fs11px tac dont-include">Input Aliascss classnames, press enter</small><small id="infoMsg" class="ffcu c_nred fs11px  dont-include"></small>\
                <textarea id="quickChangeAcssInput" class="bglgtc_nwhite_c_nskyblue dib dont-include h80px w195px oln" placeholder="Input ACSS class names " > </textarea>\
        </div>\
    </div>\
    <div  id="acss-live-editor-footer" class="bgc_hccc h20px bb1px_s_c_00000000002 dont-include">\
        <div id="selectOption" class="dont-include dib fs11px m0px5px"> \
                <button class="br0px dont-include"  id="buttonPrev">Prev</button>\
                <button class="bx0px dont-include"  id="buttonNext">Next</button>\
                <button class="br0px dont-include"  id="buttonParent">Parent</button>\
                <button class="br0px dont-include"  id="buttonChild">Child</button>\
        </div>\
    </div>\
</div>';
	
var box=document.createElement("div");
box.innerHTML=newinnerHTML;
document.body.append(box);
classPrinter.launch(box);
acssDraggable(document.getElementById("quickChangeBox"));
};

init();

};
module.exports=openAcssRibbionBar;




/***/ })
/******/ ]);