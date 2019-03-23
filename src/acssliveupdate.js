
function openAcssRibbionBar(){
var	acssDesignBarLocked=false;
var currentElement=null;
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
                    		ACSS.classPrinter.main(currentElement);
                    
                    }
                }
                });
}
function buttonRole(){
		var buttonParent=document.getElementById("buttonParent");
        var buttonPrev=document.getElementById("buttonPrev");
        var buttonNext=document.getElementById("buttonNext");
        var buttonChild=document.getElementById("buttonChild"); 
        var buttonCopy=document.getElementById('acssLiveUpadateCopy');
        var buttonPush=document.getElementById('acssPush');
  
       
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
                
                infoMsg.innerHTML="<span style='color:orange'>Has no next sibling Element</span>";
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
                infoMsg.innerHTML="<span style='color:orange'>Has no Previous sibling Element</span>";
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
                infoMsg.innerHTML="<span style='color:orange'>Has no Parent Element</span>";
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
                infoMsg.innerHTML="<span style='color:orange'>Has no child Element</span>";
                return false;
            }
        };

        buttonCopy.onclick=function(){
            if(currentElement){
                let textarea=document.createElement('textarea');
                document.body.appendChild(textarea);
                textarea.value=currentElement.outerHTML;
                textarea.select();
                if(document.execCommand("copy")){
                    console.log("Successfully! Copied to Clipboard");
                    let title=document.getElementById('acss-title');
                    title.style.color="green";
                    title.innerText="Successfully copied to clipboard!"

                    let st=setTimeout(function(){
                        title.style.color="initial";
                    title.innerText="Acss Live Update 1.0.3";
                    clearTimeout(st);
                    },1500)
                };
                textarea.parentNode.removeChild(textarea);
                }
            };

            buttonPush.onclick=function(){
                if(!ACSS.pushURL) return false;
                let content=document.getElementById("styleAlias").innerText;
                var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                            console.log("Connection successfull");
                        let title=document.getElementById('acss-title');
                        title.style.color="green";
                        title.innerText="Pushed and saved!"

                        let st=setTimeout(function(){
                            title.style.color="initial";
                        title.innerText="Acss Live Update 1.0.3";
                        clearTimeout(st);
                        },3000)
                     
                    }
                  };
                  xhttp.open("POST", ACSS.pushURL, true);
                  xhttp.send(content);
            }
             
               
  
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
                         infoMsg.innerHTML="";
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
	                
	                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
	                setClassToField();
                    infoMsg.innerHTML="";
	                //currentElement.element.style.boxShadow="0px 0px 5px #ccc";
	                //settleOldClass(currentElement);
	            }else{
	               infoMsg.innerHTML="<span style='color:orange'> No elemnt with id:"+this.value+"</span>";
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
	if(this.innerHTML=='min'){
		
		this.innerHTML="max";
		 document.getElementById("quickChangeBox").style.height="20px";
         document.getElementById("acss-live-editor-content").style.display="none";
         // document.getElementById("acss-live-editor-footer").style.display="none";
		
	}else{
        document.getElementById("quickChangeBox").style.height="200px";
         document.getElementById("acss-live-editor-content").style.display="block";
         // document.getElementById("acss-live-editor-footer").style.display="block";
		this.innerHTML="min";
		 
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
// var newinnerHTML=' <div sid="alias-css-live-editor" id="quickChangeBox" class="dont-include zi1111111111 bxs0px0px5px2pxc_00000000005 _input_lhi2 _button_lhi2 ffi2 fs12px bgc_hfff w200px h200px b1px_s_c_00000000002 br5px r5px btm5px pf">\
//     <div sid="alias-css-live-editorheader" id="quickChangeBoxheader" class="bgc_hccc h20px bb1px_s_c_00000000002 h_cm dont-include">\
//         <span class="fs12px m0px5px ff_arial dont-include">Acss Live Update 1.2</span>\
//         <div class="dib fr m0p5px dont-include">\
//             <button id="quickChangeMin" class="br0px bgc_heee fw9 dont-include ">-</button>\
//             <button id="quickChangeClose" class="br0px bgc_heee fw9 dont-include">&times;</button>\
//         </div>\
//     </div>\
//     <div id="acss-live-editor-content"class="bgc_heee h157px bb1px_s_c_00000000002 tac dont-include">\
//         <p class="fs13px m0px p3px dont-include">\
//             Click element -or-<input type="text" style="" id="quickChangeIdInput" class="dont-include w85px" placeholder="input id of element">\
//         </p>\
//          <hr class=" dont-include m4px0px">\
//         <div class="tal dont-include ">\
//             <small id="infoEle"class="ff_arial fs11px tac dont-include">Input Aliascss classnames, press enter</small><small id="infoMsg" class="ffcu c_nred fs11px  dont-include"></small>\
//                 <textarea id="quickChangeAcssInput" class="bglgtc_nwhite_c_nskyblue dib dont-include h80px w195px oln" placeholder="Input ACSS class names " > </textarea>\
//         </div>\
//     </div>\
//     <div  id="acss-live-editor-footer" class="bgc_hccc h20px bb1px_s_c_00000000002 dont-include">\
//         <div id="selectOption" class="dont-include dib fs11px m0px5px"> \
//                 <button class="br0px dont-include"  id="buttonPrev">Prev</button>\
//                 <button class="bx0px dont-include"  id="buttonNext">Next</button>\
//                 <button class="br0px dont-include"  id="buttonParent">Parent</button>\
//                 <button class="br0px dont-include"  id="buttonChild">Child</button>\
//         </div>\
//     </div>\
// </div>';

var newinnerHTML=`<div sid="alias-css-live-editor" id="quickChangeBox" class="bsbb dont-include zi1111111111 pf bxs0px0px1px0pxc_00000000005 _input-lhi2 _button-lhi2 ffi2 fs12px bgc_hfff w300px h200px b1px_s_c_00000000002 br5px r5px btm5px bgc_h505050 ">\
    <!--Header  -->\
    <div sid="alias-css-live-editorheader" id="quickChangeBoxheader" class="bsbb  br5px5px0p0p bgc_hccc h15px bb1px_s_c_00000000002 -h-cm mb10px dont-include">\
        <span id="acss-title" class="bsbb fs12px m0px5px ff_arial dont-include">Acss Live Update 1.0.3</span>\
        <div class="bsbb  dib fr m0px mt-1px dont-include mr5px">\
            <button id="quickChangeMin" class="bsbb  b0d5px_s_c_h535353 bgc_he3e3e3 --hover-bgc_warning w30px h12px br10px  -fo-oln  dont-include p0px ff_verdana fs9px">min</button>\
            <button id="quickChangeClose" class="bsbb  b0d5px_s_c_h535353 bgc_he3e3e3 w30px --hover-bgc_danger h12px br10px  -fo-oln dont-include p0px ff_verdana fs9px">close</button>\
        </div>\
    </div>\
    <div class="bsbb  w100p dont-include" id="acss-live-editor-content">\
        <!-- input area  -->\
        <div class="bsbb  dont-include w75p fl h160px brt1px_s_c_h606060 p10px pt0px">\
            <!-- input -->\
            <p class="bsbb fs13px m0px p3px dont-include ">\
            <span class="c_hbbb dont-include ">Click element-or-input id</span> <input type="text" style="" spellcheck="false" id="quickChangeIdInput" class="dont-include w195px b1px-sc_h6060606 br15px bgc_h909090 -fo-oln pl10px" placeholder="input id of element">\
            </p>\
                <!-- text-are -->\
            <div class="bsbb tal dont-include ">\
            <small id="infoEle"class="c_hbbb ff_arial fs11px tac dont-include">Input classname/s, press enter</small><small id="infoMsg" class=" fs11px  dont-include"></small>\
                <textarea id="quickChangeAcssInput" class=" dib dont-include bgc_h909090 ff_courier h90px w100p oln c_h333333 fw9" placeholder="Input ACSS class names " spellcheck="false"> </textarea>\
            </div>\
        </div>\
        <!-- Buttons -->
        <div class="w20p dib fr mr5px dont-include _button-ln _button-ff_verdana _button-w60px _button-bgc_h505050 _button-c_hccc  _button-br50px _button-h-c_ngrey _button-fo-oln _button-fw1  _button-fs9px _button-mb8px">\
            <button class=" dont-include"  id="buttonPrev">Prev</button>\
            <button class=" dont-include"  id="buttonNext">Next</button>\
            <button class=" dont-include"  id="buttonParent">Parent</button>\
            <button class=" dont-include"  id="buttonChild">Child</button>\
            <hr class=" mt0px mb10px bt1px_s_c_h6060606 dont-include">\
            <button id="acssLiveUpadateCopy" class=" dont-include" >copy</button>\
            <button id="acssPush" class="fs7px dont-include"  >&uarr;push</button>\
        </div>\
        
    </div>\
</div>`;
	
var box=document.createElement("div");
box.innerHTML=newinnerHTML;
document.body.append(box);
ACSS.classPrinter.launch(box);
acssDraggable(document.getElementById("quickChangeBox"));


};

init();

};
module.exports=openAcssRibbionBar;


