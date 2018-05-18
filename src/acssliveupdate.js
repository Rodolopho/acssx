
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


