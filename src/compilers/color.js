colorProcessor=function(each){
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

		};
		exports.colorProcessor=colorProcessor;