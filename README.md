# Acssx
#
AliasCss extended version
# Installation
`npm install accsx`

```javascript
const acssx = require('acssx');
```
#### TO get Minified accs compiler for browser

```javascript
acssx.dist("path/to/file/acss.js")

//Example
acssx.dist("./app/public/js/acss.js");
```
#### Next: use that file in your html page
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <title>AliasCSS Template</title>

    <!-- AliasCSS -->
    <link href="css/alias.min.css" rel="stylesheet">

  </head>
  <body>
    <h1 class="fw6 br5px bgc_hccc c_ngreen p10px dib">Hello, world!</h1>
  </body>
  <script src="js/accs.js"></script>
</html>
```
#
## Acss-Compiler
Where `accs.dist("path\to\file.js");` provides in browser compiler, 'accs.run(inputfolder\orfile ,distination)' , compiles classnames and bundles in single css file from the given input. Input can be foler, files or array of files or folder or both
##### Example
```javascript
const accs = require('acssx');
//input as a folder
acssx.run("./public", ".public/css/acss.css");

//input as a file
acssx.run("./public/index.html", ".public/css/acss.css");

//input as a array of files and folder, 
acssx.run(["./public/index.html", "./public/about.html", "/view"], ".public/css/acss.css");

```
Each time you run 'accs.run()' if the destination file is same it will overwrite the content, if you want to append content to the destination file, you need to pass 'true', as third arguments.
##### Example
`acssx.run("./public", ".public/css/acss.css", true);` 
#
#
<h1>Documentation</h1>
	<hr>
	<div id="pages" class=" ">
	<ul class="lsn p0px">
		<li id="getting-started">
			<h3 class="tdu">Installation</h3>
			<ul class="p0px lsn">
			<h4 class=" b1px-sc_00000000005 dib p10px br5px fs1em  m5px"><a class="tdn h_tdu c_nblack " href="../builds/distribution/acss.js">Download file</a></h4>
			<h4 class=" b1px-sc_00000000005 dib p10px br5px fs1em  m5px"><a class="tdn h_tdu c_nblack " href="../builds/distribution/acss.min.js">Download minified</a></h4>

			</ul>
			<p class="bgc_hf4433c c_hccc p10px br5px">
				There is a single Complier js library file(combined files) which do all the compling task of ACSS and implements CSS to the document.Once compiled you can remove ACSS from your production enviroment</p>
			<hr class="">
			<div id="template">
			<h3 class="tdu">Let's start  exploring AliassCSS with simple template</h3>


<pre class="bgc_hfff br5px b1px-sc_00000000005 p10px"><code class="language-html" data-lang="html"><span class="c_h099">&lt;!DOCTYPE html&gt;</span>
<span class="c_h2f6f9f">&lt;html</span> <span class="c_h4f9fcf">lang=</span><span class="c_hd44956">"en"</span><span class="c_h2f6f9f">&gt;</span>
<span class="c_h2f6f9f">&lt;head&gt;</span>
	<span class="c_h2f6f9f">&lt;meta</span> <span class="c_h4f9fcf">charset=</span><span class="c_hd44956">"utf-8"</span><span class="c_h2f6f9f">&gt;</span>
	<span class="c_h2f6f9f">&lt;meta</span> <span class="c_h4f9fcf">http-equiv=</span><span class="c_hd44956">"X-UA-Compatible"</span> <span class="c_h4f9fcf">content=</span><span class="c_hd44956">"IE=edge"</span><span class="c_h2f6f9f">&gt;</span>
	<span class="c_h2f6f9f">&lt;meta</span> <span class="c_h4f9fcf">name=</span><span class="c_hd44956">"viewport"</span> <span class="c_h4f9fcf">content=</span><span class="c_hd44956">"width=device-width, initial-scale=1"</span><span class="c_h2f6f9f">&gt;</span>

	<span class="c_h2f6f9f">&lt;title&gt;</span>AliasCSS Template<span class="c_h2f6f9f">&lt;/title&gt;</span>

	<span class="c_h2f6f9f">&lt;/head&gt;</span>
<span class="c_h2f6f9f">&lt;body&gt;</span>
<span class="c_h2f6f9f bgc_hccc">&lt;h1 class="fw6 br5px bgc_00000000008 c_hf4433c p10px dib"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</span>
<span class="c_h999">&lt;!-- AliasCSS --&gt;</span>
<span class="c_h2f6f9f">&lt;script </span><span class="c_h4f9fcf">src=</span><span class="c_hd44956">"js/alias.min.js"</span><span class="c_h2f6f9f">&gt;&lt;/script&gt;</span>
<span class="c_h2f6f9f">&lt;/body&gt;</span>
<span class="c_h2f6f9f">&lt;/html&gt;</span></code></pre>
<h4>Output:</h4>
<pre class="bgc_hfff br5px b1px-sc_00000000005 p10px"><h1 class="fw6 br5px bgc_00000000008 c_hf4433c p10px dib">Hello, world!</h1>
</pre>

<h4>How it works </h4>
<strong class="">"In AliasCSS , normally every Aliascss's className holds single property and value/s for it. "</strong>
<p>
In the above example, look at class attribute of h1 element i.e  <span class="c_h2f6f9f bgc_hccc"><code>&lt;h1 class="fw6 br5px bgc_hccc c_hf4433c p10px dib"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</code></span>.
 This is just ordinary h1 element with class "fw6 br5px bgc_hccc c_hf4433c p10px dib".
  But the classes defined holds special meaning, they are not just classnames they are also aliases of className's property and value/s in the form of classnames----which is compiled to a corresponding  property and value by ACSS .

</p><ul class="lsdc">
	<h4>fw6 alias for font-wight:600</h4>
	<h4>br5px alias for border-radius:5px</h4>
	<h4>bgc_hccc alias for background-color:#ccc<em>, here c_h means color by hexadecimal if you want color by name simply use c_n e.g bgc_nred</em></h4>
	<p>
		Most of the class attribute are define in the same way as above , it just requires to learn the rules of defining className, there are just few lines of rules to follow.</p>
		<h3>Rules</h3>
		<li>The first letter of each Property and vlaue is picked for defining className, for eg. dn represent display:none;
		pf represent position:fixed , that mean if you want to give element a style position to fixed , with AliasCSS you just need to add className "pf" in the element , if you want give above h1 element a fixed position then it looks like
		<span class="dib bgc_hfff br5px b1px-sc_00000000005 m5px p10px "><span class="c_h2f6f9f ">&lt;h1 class="fw6 br5px bgc_hccc c_hf4433c p10px dib pf"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</span></span></li>
		<li>
			If property or value has hyphen/s(-), the respective alias is  build from the first letter of property plus first-letter after hyphen/s, for e.g. the alias of font-weight is represented by fw in className.ie fw9 font-weight:900, for e.g of value with hypens, lets take display:inline-block , if we have to define that style for our element we can simply add dib to class attribute where each letter of 'dib' represents display,inline,block respectively.In this case ib is picked using above method, there is also few expection for these rule. <em><small>see documenation for details under exception.</small></em>
		</li>
		<p>In general , first letter of every words of property and value are used to build the className for element. </p>
		<li>
			Some className uses addtional character either hyphen(-) and underscore( _ ),these are used basically in advance and complicated className defination such as tranform, transition, font, color etc .Here are few examples:
			<p class="fw8">c_ stands for color property </p>
			<p class="fw8">ff_ stands for font-family</p>
			<p class="fw8">t_ stands for transition</p>
			<p class="fw8">m10px stands for margin:10px and m-10px stands for margin:-10px</p>
			<p class="fw8">m10px10px means margin:10px 10px , and margin m10px10px20px5px means margin:10px 10px 20px 5px</p>
			<p class="fw8"> Margin and padding works in similar fashion also to use percentage , just replace % by p i.e. m10p means margin:10%, this is due to  className naming convention '%' is not allowed to include in naming className.</p>
			<p class="fw8">Use Live Demo <small class="fw1 c_nred">(click Live Demo Interface menu on the top of this page)</small>to experiment and learn practically.<!--  First watch the video how to use live demo interface. --></p>
			<!-- <p class="fw8"><a href="https://www.youtube.com/watch?v=2cSxgnlIYJY"> Watch few min video to understand AliasCSS Live Demo Interface.</a></p> -->
			<p class="fw8"> For more details see <a href="#documentation"> documentation.</a></p>
		</li>

	<h4></h4>


</ul>

<p></p>
</div>



		</li>
		<hr class="">
		<li id="documentation">
				<ul class="lsn">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">C</span>olor</h2>
					<div class="m5px">Eg.</div>
					<span class="dib bgc_hfff br5px b1px-sc_00000000005 m5px p10px "><span class="c_h2f6f9f "><code>&lt;h1 class="fw6 br5px bgc_hccc c_ngreen p10px dib pf"&gt;</span>Test Color<span class="c_h2f6f9f">&lt;/h1&gt;</span></code></span>

						<p>Defining  color Property in AliasCSS className is very simple,you write "c_" which complies to color property followed by value which is 'ngreen' is above case .'ngreen' is representing 'color by name that is green'. <span class=" bgc_00000000008 m5px p5px dib c_hf4433c">className c_ngreen =&gt; c_=color,n=byname and green=color value</span>
						<span class=" m5px bgc_00000000008   p5px dib c_hf4433c">className c_hccc =&gt; c_=color,h=by hexadecimal and ccc=hexadecimal  value of color</span> </p>
					<div class="ml20px">
						<h3 class="tdu">Color by Name</h3>
							<p><strong class="fs14px"><span class="c_hf4433c">Syntax </span></strong> for definig className:<br><span class="b1px-sc_hccc  bgc_nwhite ffm c_ndimgrey  fs14px br5px dib p5px m5px ">c_n + name of color e.g c_nred, c_nblue,c_nsilver...</span></p>
						<h3 class="tdu">Color by Hexadecimal</h3>
						<p><strong class="fs14px"><span class="c_hf4433c">Syntax </span></strong> for definig className:<br><span class="b1px-sc_hccc  bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">c_h + hexadecimal value of color without '#' e.g c_hccc, c_h2f6f9f,c_hffffff...</span></p>
							<p></p>
						<h3 class="tdu">Color by RGB ,RGBA</h3>
							<p class="lh24px "><strong class="fs14px"><span class="c_hf4433c">Syntax </span></strong> for definig className:<br><span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">c_ + value of red in three digit + value of green in three digit + value of blue in three digit + value of Alpha in two digit,for RGB only exclude value of Alpha eg.<br>
							color:rgba(0,0,0,0.5)=&gt;c_00000000005
							</span></p><p>It is necessay to use rgb value in three digit,i.e if a className hold 9 digit then its treated as rgb and if it holds 11 digit then a rgba value</p>
							color:rgb(0,0,0)=&gt;c_000000000
							<p></p>
							<h3>RGB/RGBA in percentage</h3>
							<p class="lh24px "><strong class="fs14px"><span class="c_hf4433c">Syntax </span></strong> for definig className:<br><span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">c_ +value of red in percentage, replace '%' by p + value of green in percentage, replace '%' by p + value of blue in percentage, replace '%' by p + optional two digit alpha value </span></p>
							<p>For Example:</p>
							<p>c_50p50p50p means color:rgb(50%,50%,50%);</p>
							<p>c_50p50p50p05 means color:rgba(50%,50%,50%,0.5);</p>
						<h3 class="tdu">Color by HSL/HSLA</h3>
						<p class="lh24px "><strong class="fs14px"><span class="c_hf4433c">Syntax </span></strong> for defining className:<br><span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">c_ +value of hue in three digits(eg.000,024,213), replace ' + value of saturation in percentage, replace '%' by p + value of light in percentage, replace '%' by p + optional two digit alpha value </span> For Example:</p>
							<p>c_02456p34p means color in hsl where h=025(here first three digit is counted for h value) , s=56% and l=36%</p><br>
							c_02456p34 means color: hsl(024,56%,34%);
							<p>For HSLA just add alpha value in two digit e.g c_12345p50p55 means color:hsla(123,45%,50%,0.55);</p>


					</div>


				</li>
				<hr class="">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">B</span>ox Model</h2>
						<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">The <span class="c_hf4433c">Syntax </span> for writing className for Box-modeling is preety straight forward.
						Padding,margin,border-width etc any property that accepts only length based value, have className
						with property alias followed by number and units(px| p for %|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc). For Example:-
						<p>m10px for margin:10px</p>
						<p>p10p for padding:10%</p>
						<p>bw100px for border-width:100px</p>
						<p>fs1d2em for font-size:1.2em <small class="c_ngreen"><em>Note 'd' is used here instead of '.', because '.' cant be used in className</em></small></p>
						<p>p10px10px for padding:10px 10px </p>
						<p>m10px5px8px12px for margin:10px 5px 8px 12px </p>
						<p>m10pxa for margin:10px auto;</p>
						</span>


				</li><hr class="">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">F</span>onts</h2>
					<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
						<p>
							<span class="c_hf4433c">Syntax </span>:ff_ plus font name you want to use eg. ff_serif , ff_cursive ..If you just want single Generic fonts then, just use 'ff' and firstletter of generic family except 'cursive','san-serif'.
							<br>
							For Multiple font-family or font seperate each font with '_'.</p></span> E.g.<br>
							<span class="dib bgc_hfff br5px b1px-sc_00000000005 m5px p10px "><span class="c_h2f6f9f ">&lt;h1 class="ff_Helvetica_Arial_sans-serif"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</span></span>

				</li><hr class="">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">B</span>orders</h2>
						<p>ClassName for border property can be use two ways , one by using single value and second by using mulitple value as a shorthand property.</p>
						<p>For shorthand synax for className is b for border + optional rt,l,t,b for right, left, top and bottom respectively , rt is used for right  as r is reserved for radius ie br=&gt;border-radius</p>
						<p>E.g</p>
						<span class="p3px b1px-sc_hccc bgc_nwhite ffm">Border Value Ref:[n:"none", s:"solid", r:"ridge", o:"outset", i:"inset", h:"hidden", g:"groove", db:"double", dt:"dotted",ds : "dashed"]</span><br>

						<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>b1px-sc_nred=&gt;border:1px solid red;</p>
							<p>bt1px-hc_nred=&gt;border-top:1px hidden red;</p>
							<p>bb1px-gc_hefefef=&gt;border-bottom:1px groove #efefef;</p>
							<p>brt1px-dbc_11123423105=&gt;border-right:1px double rgba(111,234,231,0.5);</p>
							<p>bl1px-dtc_24545p56p=&gt;border-left:1px dotted hsl(245,45%,56%);</p>
						</span>
						<p>For standalone  property , border-width follows same rules as box model,border-color follows color rule, border-style follow <a href="#staticdef">static class defination</a> for e.g</p>
						<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>bw5px=&gt;border-width:5px;</p>
							<p>brw5px=&gt;border-right-width:5px;</p>
							<p>blw5px=&gt;border-left-width:5px;</p>
							<p>brc_nred=&gt;border-right-color:red;</p>
							<p>btc_hccc=&gt;border-top-color:#ccc;</p>
							<p>bbss=&gt;border-bottom-style:solid;</p>
							<p>btwt=&gt;border-top-width :thick; //use tn for thin amd m for mediun i.e btwtn btwm</p>


						</span>


				</li><hr class="">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">B</span>ackgroud</h2>
					background is refered by 'bg' in aliascss ClassName. You can use color,position,image, gradient,repeat in a combination(shorthand) or standalone.
						<p><strong>Background Color</strong></p>
							<p>Background color folows the same rule as color.</p>

							<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
								<p><span class="c_hf4433c">Syntax </span>:bg for background + c_ for color + Value //as in color property</p>
								<p>E.g</p>
								<p><strong>ClassName=&gt;property : Value;</strong></p>
								<p>bgc_ngreen=&gt;background:green;</p>
								<p>bgc_hccc=&gt;background:#ccc;</p>
								<bgc_00000000008=>background:rgba(0,0,0,0.5);
							</bgc_00000000008=></span>
						<p><strong>Background Image</strong></p>
							<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<p><span class="c_hf4433c">Syntax </span>:bg or bgi(use bgi for background-image) + url + _ + optional number form 1 to 9 to tell number of step back from current folder + _ + path to file + _ + fileName + _ + extention</p>
							<p>E.g</p>
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>bgurl_image_image1_jpg=&gt;backround:url(image/image1.jpg);</p>
							<p>bgiurl_1_images_logo_png=&gt;background-image:url(../images/logo.png)</p>
							<p>bgurl_2_view_img_blabycloud_jpg=&gt;background:url(../../view/img/blabycloud.jpg);
							</p><p>Note: you should never give your folder name only a number.</p><p></p>
							<p></p>

							</span>
						<p><strong>Background Position</strong></p>
						<p>Position follows the same rule as Box-model</p>
							<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
								<p><span class="c_hf4433c">Syntax </span>:bgp for background-position + length + length if applicable for e.g</p>
								<p><strong>ClassName=&gt;property : Value;</strong></p>
								<p>bgp50px=&gt;background-position:50px</p>
								<p>bgp50px50px=&gt;background-position:50px 50px</p>
								<p>bgp50px=&gt;background-position:50px</p>
								<p>bgpc=&gt;background-position:center center;//see <a href="#staticdef">static class defination</a> for static property</p>
							</span>
						<p><strong>Gradient</strong></p>
						Gradient is one of the most advanced features of CSS3.Aliascss will automatically  compile prefix for all modern browser.
							<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<p><span class="c_hf4433c">Syntax </span>:bg + lg for linear-gradient or rg for radical-gradient + c for center or t for top or b for bottom or r for right or l for left  or angle value (eg 45deg) to give angle + color + optional position + color + optional position and soon </p>
							<p>E.g</p>
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>bglg45degc_nred-45pxc_nblue-45px=&gt;background:linear-gradient(45deg,red 45px ,blue 45px);}</p>
							<p>bgrgcdegc_hccc-50pc_h012343-30p=&gt;background:radial-gradient(center,#ccc 50% ,#012343 30%)</p>
							<p>bglgt_c_nblue-c_h234234=&gt;background:linear-gradient(top,blue ,#234234);}</p>

							</span>
							<p><strong>Multiple Gradient</strong></p>
							<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
								You can add addition background by using -- as a sepeartor follwed by the values:
								<p><span class="c_hf4433c">Syntax </span>: bg + gradient value + -- + gradient value--+.....so on</p>
								<p>E.g</p>
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>bglg45degc_nred-45pxc_nblue-45px--rgcdegc_hccc-50pc_h012343-30p=&gt;background:linear-gradient(45deg,red 45px ,blue 45px),radial-gradient(center,#ccc 50% ,#012343 30%);}</p>
							
							</span>

				</li><hr class="">
				<li>
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">T</span>ransform</h2>
						<p>Transform is another feature of CSS3, its a great module.Aliascss provide very handy <span class="c_hf4433c">Syntax </span> of className defination for transformation</p>
						<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<p><span class="c_hf4433c">Syntax </span>: tf for transform +  m for  "matrix",t for  "translate" ,tx for  "translateX",ty for  "translateY",s for  "scale" ,sx for  "scaleX",
							 sy for  "scaleY",r for  "rotate",skx for  "skewX",sky for  "skewY",m3d for  "matrix3d",t3d for  "translate3d",
							 tz for  "translateZ",s3d for  "scale3d",sz for  "scaleZ",r3d for  "rotate3d",rx for  "rotateX",ry for  "rotateY",
							 rz for  "rotateZ",p for  "perspective" + value</p>
							 <p>E.g</p>
							 <p><strong>ClassName=&gt;property : Value;</strong></p>
							 <p>tfm1_0d2_0d3_0d4_0d5_0d6=&gt;transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);</p>
							<p>tft12px50p=&gt;transform: translate(12px, 50%);</p>
							<p>tftx2em=&gt;transform: translateX(2em);</p>
							<p>tfty3in=&gt;transform: translateY(3in);</p>
							<p>tfs2_0d5=&gt;transform: scale(2, 0.5);</p>
							<p>tfsx2=&gt;transform: scaleX(2);</p>
							<p>tfsy0d5=&gt;transform: scaleY(0.5);</p>
							<p>tfr0d5turn=&gt;transform: rotate(0.5turn);</p>
							<p>tfskx30deg=&gt;transform: skewX(30deg);</p>
							<p>tfsky1d07rad=&gt;transform: skewY(1.07rad);</p>
							<p>tfm3d1d0_2d0_3d0_4d0_5d0_6d0_7d0_8d0_9d0_10d0_11d0_12d0_13d0_14d0_15d0_16d0=&gt;transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);</p>
							<p>tft3d12px50p3em=&gt;transform: translate3d(12px, 50%, 3em);</p>
							<p>tftz2px=&gt;transform: translateZ(2px);</p>
							<p>tfs3d2d5_1d2_0d3=&gt;transform: scale3d(2.5, 1.2, 0.3);</p>
							<p>tfsz0d3=&gt;transform: scaleZ(0.3);</p>
							<p>tfr3d1_2d0_3d0_10deg=&gt;transform: rotate3d(1, 2.0, 3.0, 10deg);</p>
							<p>tfrx10deg=&gt;transform: rotateX(10deg);</p>
							<p>tfry10deg=&gt;transform: rotateY(10deg);</p>
							<p>tfrz10deg=&gt;transform: rotateZ(10deg);</p>
							<p>tfp17px=&gt;transform: perspective(17px);</p>

						</span>

				</li><hr class="" <li="">
					<h2><span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">T</span>ransition and <span class=" m5px p5px fw9 bgc_00000000008 c_hf4433c ">A</span>nimation</h2>
						<p>Another Great feature of CSS3 properties are  Transition and animation which allows the html document to feel alive with some tweaks.Both act similarly.</p>
						<p>
						<span class="p3px b1px-sc_hccc bgc_nwhite ffm">Timing Function Ref:[e:"ease",l:"linear",ei:"ease-in",eo:"ease-out",eio:"ease-in-out",ss:"step-start",se:"step-end"};{e:"ease",l:"linear",ei:"ease-in",eo:"ease-out",eio:"ease-in-out",ss:"step-start",se:"step-end"]</span><br>
						</p>
						<span class="b1px-sc_hccc bgc_nwhite ffm c_ndimgrey fs14px br5px dib p5px m5px ">
							<h3 class="tdu">Transition</h3>
							<p><span class="c_hf4433c">Syntax </span>:t_+ property alias(like m for margin, d for display)+number of times + unit + _ followed by transtion-timing-function </p>
							<p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>t_ml4s:transition: margin-left 4s;</p>
							<p>t_ml4s1s=&gt;transition: margin-left 4s 1s;</p>
							<p>t_ml4s1s_eio: margin-left 4s 1s ease-in-out ;</p>
							<p>t_all0d5s_eo=&gt;transition: all 0.5s ease-out;</p>
							<p>t_ml4s2s_cb0d2-0d3-0d4-0d5=&gt;transition:margin-left 4s 2s cubic-bezeir(0.2,0.3,0.4,0.5);</p>
							<br>
							<p><span class="c_hf4433c">Syntax </span>:Use tdl for transition-delay and tdu for transtion-duration, if you want to use it standalone</p>
							<p>E.g</p>
							 <p><strong>ClassName=&gt;property : Value;</strong></p>
							<p>tdu2s+&gt;transition-duration:2s;//same rule applies for animation-duration adu</p>
							<p>tdl1d2s+&gt;transition-delay:1.2s;//same rule applies for animation-delay adl</p>
							<p>Use can also use <a href="#staticdef">static class defination</a> for transtion-timimg-function and animation-timimg-function</p>
							<h3 class="tdu">Animation</h3>
							<p><span class="c_hf4433c">Syntax </span>: an_ for animation + name for animation + duration on second or ms + delay in s or in ms+ cn for iteration-count where n is number + ar for "alternative-reverse",nl for "normal",re for "reverse", al for "alternative" to give it direction + fillmode where, bw for "backwards",bo for "both",fw for "forwards" +  r or p for running and paused for playstate</p>
							<p>E.g</p>
							<p>an_aniName-4s3s-c3-nl-bw-p=&gt;animation:aniName 4s 3s 3 normal backwards paused</p>
							<p>an_someName-4s3s-ci-re-bo-r=&gt;animation:someName 4s 3s infinite reverse both running</p>
							<p>an_sideui-1d2s333ms-10-al-fw-r=&gt;animation:sideui 1.2s 333ms alternative forwards running;</p>
							<h3>Note:@keyword is not supported in Aliacss, also you are not  encourage  to use animation property using Aliascss className, it might not work under  your expectation.</h3>
							<br>
							<p>For Animation-timing-function(atf)</p>
							<p><span class="c_hf4433c">Syntax </span>:atf+ cb+value sepearted by "-" for cubic-bezeir and for step() function atf+s+number + s for start or e for end </p>
							<p>atfcb1-2-3-4=&gt;animation-timimg-function:cubic-bezeir(1,2,3,4);</p>
							<p>atfs1e=&gt;animation-timimg-function:steps(1 ,end);</p>
							<p>atfs1s=&gt;animation-timimg-function:steps(1 ,start);</p>
							<p>For rest animation-timing-function refer to <a href="#staticdef">static class defination</a> </p>
							<p class="c_nred">Same Rules applies for transition-timing-function with ttf as a property alias</p>

						</span>

			</ul>

		</li>
</ul>
			<hr class="">







	</div>
		<!--End ------------------------------------------------------------------documentation -->
</section>


<section id="section-download" class="">
	<h1>Downloads</h1>
	<hr>
	<ul>

	<h4 class="lsn b1px-sc_00000000005 dib p10px br5px fs1em  m5px"><a class="tdn h_tdu c_nblack " href="../builds/distribution/acss.min.js">Download</a></h4>
	<h4 class="lsn b1px-sc_00000000005 dib p10px br5px fs1em  m5px"><a class="tdn h_tdu c_nblack " href="../builds/distribution/acss.js">Download uncompressed</a></h4>
	<h4 class="lsn b1px-sc_00000000005 dib p10px br5px fs1em  m5px"><a class="tdn h_tdu c_nblack " href="https://github.com/Rodolopho/acss">Download  Source codes @ github</a></h4>

	</ul>
</section>
<hr>

<section id="section-extension" class="">
	<h1>Extentions</h1>
	<p>AliasCSS has some extension to speed up your development process.These extention is envoked per element basis by  calling it
		in Html Element as attributes</p>
	<hr>
	<h2>Clone Extention</h2>
	<p>Clone Extention becomes  very useful when working with li and tables.It has four main property i.e cloneElement,cloneChild,cloneChildOdd and cloneChildEven.
		Sometimes when working with large html pages clone extension can give you more flexibility...Read ACSS Variable at the end of this <a href="#acssvars">page</a></p>
	<p>These extention is used with html tage as their attribute e.g <span class="bgc_hfff br5px b1px-sc_00000000005 p10px ffm"><span class="c_h2f6f9f ffm ">&lt;h1 class="fs12px" cloneElement="#id"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</span></span></p>
	<ul class="lsn p0px" clonechild="li">
		<li id="li" class="    ">
			<h2 class="ml-10px bgc_00000000008   p10px dib c_hf4433c">cloneElement</h2>
			<p><span class="c_hf4433c">Syntax </span>:e.g <span class="ffm"><span class="c_h2f6f9f ">&lt;div class="fs12px" cloneElement="id"&gt;</span><span class="c_h2f6f9f">&lt;/div&gt;</span></span>
			</p>
			<p>cloneElement will copy all the className provided to the element having id equal the value supplied to it.</p>
			<p>In above example cloneElement will copy class applies on element with id value equals 'id' then apply those classes to current div or elemnt where it is called through attribute'cloneElement'. This way you can copy the classes applied to another element. If any changed in class attribute is made it will also reflect to cloned elment. The classes applied throught class attribute in cloned element will not get affected by this approach. </p>
			<div id="cloneChild" class="" ""="">
				<h1>Example of cloneElement</h1>
					<h3>Code</h3>
				<pre class="bgc_hfff b1px-sc_nsilver p10px"><code class="language-html"><span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">h1</span> <span class="c_h930F80">id</span>=<span class="c_h2AA198">"h1"</span> <span class="c_h930F80">class</span>=<span class="c_h2AA198">"bgc_h77480a p10px bxs5px5px5px1pxc_00000000008 tfr10deg tac m20px c_00000000007 wsnw"</span>&gt;</span>Hello World!<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">h1</span>&gt;</span>
<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">h1</span> <span class="c_h930F80">cloneElement</span>=<span class="c_h2AA198">"h1"</span>&gt;</span>This element clone classes from above h1 Element !<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">h1</span>&gt;</span>
</code></pre>
<h3>Output </h3>
<br><br><br><br>

				<h1 id="h1" class="bgc_h77480a p10px bxs5px5px5px1pxc_00000000008 tfr10deg tac m20px c_00000000007 wsnw">Hello World!</h1>
			<h1 cloneelement="h1" class="bgc_h77480a p10px bxs5px5px5px1pxc_00000000008 tfr10deg tac m20px c_00000000007 wsnw ">This element clone classes from above h1 Element !</h1>
			</div>

		</li>
		<li class="    ">
			<h2 class="ml-10px bgc_00000000008 bln p10px dib c_hf4433c">cloneChild</h2>
			<br>
			<p>
				As above, cloneChild is also called on element as attribute, supplied a value of id of another element to copy the classes applied to that element.But unlike  cloneElement , it will apply the cloned classes to its all child elements(but not child element of childs)
				</p><div id="cloneChild" class="" ""="">
				<h1>Example of cloneChild</h1>
					<h3>Code</h3>
				<pre class="bgc_hfff b1px-sc_nsilver p10px"><code class="language-html"><span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">ul</span> <span class="c_h930F80">cloneChild</span>=<span class="c_h2AA198">"id-li"</span> &gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span> <span class="c_h930F80">id</span>=<span class="c_h2AA198">"id-li"</span><span class="c_h2AA198">class="w200px</span> <span class="c_h930F80">p5px</span> <span class="c_h930F80">tac</span> <span class="c_h930F80">lsn</span> <span class="c_h930F80">b1pxs_sc_hccc</span> <span class="c_h930F80">br5px</span> <span class="c_h930F80">h50px</span> <span class="c_h930F80">m5px</span>"&gt;</span>Item1<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item2<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item3<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item4<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item5<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item6<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>

<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">ul</span>&gt;</span>
</code></pre>
<h3>Output </h3>
				<ul clonechild="clonechild-li" class="lsn b1px-sc_hccc">
					<li id="clonechild-li" class="  w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px">Item1</li>
					<li class=" w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item2</li>
					<li class=" w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item3</li>
					<li class=" w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item4</li>
					<li class=" w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item5</li>
					<li class=" w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item6</li>

				</ul>
				</div>
			<p></p>
		</li>
		<li class="    ">
			<h2 class=" ml-10px bgc_00000000008 p10px dib c_hf4433c">cloneChildOdd</h2>
			<br>
			This will apply the cloned classes only to its odd child i.e 1st,3rd,5th ....child elements.
			<p></p>
			<div id="cloneChildodd" class="" ""="">
				<h1>Example of cloneChildOdd</h1>
					<h3>Code</h3>
				<pre class="bgc_hfff b1px-sc_nsilver p10px"><code class="language-html"><span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">ul</span> <span class="c_h930F80">cloneChild</span>=<span class="c_h2AA198">"id-li"</span> <span class="c_h930F80">cloneChildOdd</span>=<span class="c_h2AA198">"liodd"</span> &gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span> <span class="c_h930F80">id</span>=<span class="c_h2AA198">"id-li"</span><span class="c_h2AA198">class="w200px</span> <span class="c_h930F80">p5px</span> <span class="c_h930F80">tac</span> <span class="c_h930F80">lsn</span> <span class="c_h930F80">b1pxs_sc_hccc</span> <span class="c_h930F80">br5px</span> <span class="c_h930F80">h50px</span> <span class="c_h930F80">m5px</span>"&gt;</span>Item1<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item2<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>  <span class="c_h930F80">id</span>=<span class="c_h2AA198">"liodd"</span> <span class="c_h930F80">class</span>=<span class="c_h2AA198">"</span><span class="c_h2AA198">bgc_00000000008</span> <span class="c_h930F80">c_hf4433c"</span>&gt;</span>Item3<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item4<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item5<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item6<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>

<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">ul</span>&gt;</span>
</code></pre>
<h3>Output </h3>
				<ul clonechild="clonechild-li" clonechildodd="liodd" class="lsn b1px-sc_hccc">
					<li class="bgc_00000000008 c_hf4433c    w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px">Item1</li>
					<li class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item2</li>
					<li id="liodd" class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px bgc_00000000008 c_hf4433c">Item3</li>
					<li class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item4</li>
					<li class="bgc_00000000008 c_hf4433c   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item5</li>
					<li class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item6</li>

				</ul>
				</div>
		</li>
		<li class="    lsn">
			<h2 class=" ml-10px bgc_00000000008 p10px  dib c_hf4433c">cloneChildEven</h2>
			<br>
			This attribute will clone the classes to its even child elements as cloneChildOdd does for odd child elments
			<p></p>
			<div id="cloneChildodd" class="" ""="">
			<h1>Example of cloneChildEven</h1>
				<h3>Code</h3>
				<pre class="bgc_hfff b1px-sc_nsilver p10px"><code class="language-html"><span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">ul</span> <span class="c_h930F80">cloneChild</span>=<span class="c_h2AA198">"id-li"</span> <span class="c_h930F80">cloneChldOdd</span>=<span class="c_h2AA198">"liodd"</span> <span class="c_h930F80">cloneChildEvent</span>=<span class="c_h2AA198">"lieven"</span> &gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span> <span class="c_h930F80">id</span>=<span class="c_h2AA198">"id-li"</span><span class="c_h2AA198">class="w200px</span> <span class="c_h930F80">p5px</span> <span class="c_h930F80">tac</span> <span class="c_h930F80">lsn</span> <span class="c_h930F80">b1pxs_sc_hccc</span> <span class="c_h930F80">br5px</span> <span class="c_h930F80">h50px</span> <span class="c_h930F80">m5px</span>"&gt;</span>Item1<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span> <span class="c_h930F80">id</span>=<span class="c_h2AA198">"lieven"</span> <span class="c_h930F80">class</span>=<span class="c_h2AA198">"c_00000000008 bgc_hf4433c"</span>&gt;</span>Item2<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>  <span class="c_h930F80">id</span>=<span class="c_h2AA198">"liodd"</span> <span class="c_h930F80">class</span>=<span class="c_h2AA198">"bgc_00000000008 c_hf4433c"</span>&gt;</span>Item3<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item4<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item5<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>
	<span class="c_hA55A25">&lt;<span class="hljs-title c_h268BD2">li</span>&gt;</span>Item6<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">li</span>&gt;</span>

<span class="c_hA55A25">&lt;/<span class="hljs-title c_h268BD2">ul</span>&gt;</span>
</code></pre>
<h3>Output </h3>
				<ul clonechild="clonechild-li" clonechildeven="lieven" clonechildodd="liodd" class="lsn b1px-sc_hccc">
					<li class="    bgc_00000000008 c_hf4433c    w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px">Item1</li>
					<li id="lieven" class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px c_00000000008 bgc_hf4433c">Item2</li>
					<li id="liodd" class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px    w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px bgc_00000000008 c_hf4433c">Item3</li>
					<li class="c_00000000008 bgc_hf4433c   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item4</li>
					<li class="   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px bgc_00000000008 c_hf4433c   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item5</li>
					<li class="c_00000000008 bgc_hf4433c   w200px p5px tac lsn b1pxs_sc_hccc br5px h50px m5px ">Item6</li>

				</ul>
		</div></li>
		<p class="    "> <strong>Note: All these four property is called as attribute in the element where you want to apply.</strong></p>
	</ul>

	<p></p>
	<hr>
	<h2>MediaQuery Extention</h2>
	<p>Media query Extention , allows to style the elment on conditional media query.It is also called in Element as attribute similarly to clone extention.However it can be reused prettly easily.</p>
   <p>To use this extention , you give element (where where you wan to apply or ACCS Var) a attribute of "mq" with a value of certain pattern and order.
	 </p><p>Pattern of Value must satisfy follwing condition:</p>
	 <p>a unique classname followedn by ":" then followed by media query condition/s indicator , followed by ":" and at last followed
		 by ACSS classname/s inside a bracket i.e [.......] "</p>
<p> For Example: <span class="bgc_hfff br5px b1px-sc_00000000005 p10px ffm"><span class="c_h2f6f9f ffm ">&lt;h1 class="fs12px" mq="newmqclass:s&amp;mh500px:[bgc_he3e3e3 fs2rem ff_tahoma]"&gt;</span>Hello, world!<span class="c_h2f6f9f">&lt;/h1&gt;</span></span></p>
<p>In this example, h1 element has been given a property(attribute) of "mq" which tells ACSS that media-query extention has been used. And its
Value follow a certain link pattern of:- a classname:media condition:[list of ACSS classnme], classname used here should be unique and should 
	be consfused with alias css classname , this clasname simply refereing tha media condition and style, this classname can then be called in any element as a
	regular classname , to bind that element with same effect.
	The media condition indicator ; indicates the condition and devices for  styling to be applied.
	And lastly, Acss classnames are listed in large bracket [], seperated by space.<br>
<sapn class="c_ngreen fwb">It is highy recommended to use class name prefixed my "mq_" for the class names used for media query eg mq="mq_wrapper:s&amp;mh500px:[bgc_he3e3e3 fs2rem ff_tahoma]"</sapn>
</p>
<h2>Guildlines for using  MediaQuery</h2>
<h3>Symbols</h3>
<p> use  ? for only</p>
<p> use  * for all</p>
<p> use  ! for only</p>
<p> use  &and; for and</p>

<h3>Condition alias</h3>
<h5>Use following aliases for the condition followed by constrain value</h5>
<p class="ffm">
			w for "width "<br>  
			mw for "min-width "<br>
			xw for "max-width"<br>  
			h for "height"<br>  
			mh for "min-height"<br>  
			xh for "max-height"<br>  
			dw for "device-width "<br>  
			mdw for "min-device-width "<br>  
			xdw for "max-device-width"<br> 
			dh for "device-height"<br>  
			mdh for "min-device-height"<br>  
			xdh for "max-device-height"<br>  
			ar for "aspect-ratio"<br>  
			mar for "min-aspect-ratio"<br>  
			xar for "max-aspect-ratio"<br>  
			dar for "device-aspect-ratio"<br>  
			mdar for "min-device-aspect-ratio"<br>  
			xdar for "max-device-aspect-ratio"<br>  
			c for "color"<br>  
			mc for "min-color"<br>  
			xc for "max-color"<br>  
			ci for "color-index"<br>  
			mci for "min-color-index"<br>  
			xci for "max-color-index"<br>  
			m for "monochrome"<br>  
			mm for "min-monochrome"<br>  
			xm for "max-monochrome"<br>  
			r for "resolution"<br>  
			mr for "min-resolution"<br>  
			xr for "max-resolution"<br> 
			g for "grid"<br>
			</p>
			<h3>Alias for Media</h3>
		<p>
		a for "all" <br>
		au for "aural" <br>
		b for "braille" <br>
		h for "handheld" <br>
		p for "print" <br>
		pj for "projection" <br>
		s for "screen" <br>
		tty for "tty" <br>
		tv for "tv" <br>
		e for "embossed"
	</p>
	<h3>Scan &and; Oreintation</h3>
	<p>
		USE (si) for  (scan: interace) <br>
		USE (sp) for (scan: progressive) <br>
		USE (op) for  (orientation: portrait) <br>
		USE (ol) for  (orientation: landscape) <br>
	</p>
	<hr>
</section>







