
//imports
var aliasProperty=require('./propertyAlias');
var staticClassNames=require("./staticClassNames")
// var devicePesduoBrowserEventAlias=require("./devicePseduoBrowserEvent");

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
			var mLen=each.match(/^(tx|ty|tz|t3d|t|p)[-]?[0-9]/);
			if(mLen){tfFunc=tfAlias[mLen[1]];value=compiler.lengthProcessor(each).replace(/[ ]/g,","); return true;}

			var mNum=each.match(/^(m3d|m|sx|sy|sz|s3d|s|r3d)[-]?[0-9]/);
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
	        var mAng=each.match(/^(rx|ry|rz|r|sky|skx)[-]?[0-9]/);
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
			  callFunction:function(each){//console.log(each);
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

 	