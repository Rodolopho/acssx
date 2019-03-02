// var compiler=require('../src/compiler');
// var chai=require("chai");
// chai.use(require('chai-string'));
// var expect=chai.expect;

// //compiler.handlePseduo("af_br5px");
// console.log(compiler.hasPseduo+"CGDFG");
// describe("Prefix Handlers",function(){
// 	//----------------------------------------
// 	describe('Handle Pseduo ', function () {

// 		it("should return ClassName without pseduo prefix", function(){
// 			expect(compiler.handlePseduo("v_br5px")).to.equal("br5px");
			

// 		});
// 		it(" And if prefix should assign 'hasPseduo' a value ", function(){
			
// 			expect(compiler.hasPseduo).to.equal(":visited");
// 		})
// 		it(" Testing nth child, nth last child ", function(){
// 			expect(compiler.handlePseduo("nc3_br5px")).to.equal("br5px");
			
// 			expect(compiler.hasPseduo).to.equal(":nth-child(3)");
// 		})
// 	});
// 	//----------------------------------------------
// 	describe('Handle Device ', function () {

// 		it("should return ClassName without device prefix", function(){
// 			expect(compiler.handleDevice("mob_br5px")).to.equal("br5px");
			

// 		});
// 		it(" And if device,it  should assign 'hasdevice' a value ", function(){
			
// 			expect(compiler.hasDevice).to.equal("@media (max-width : 768px) {");
// 		});
// 	});
// 	//------------
// 	describe('Handle Elements', function () {//li a {} 

// 		it("should return ClassName without elements prefix", function(){
// 			expect(compiler.handleElements("_li-h1-a_br5px")).to.equal("br5px");
			

// 		});
// 		it(" And if has element,it  should assign 'hasElements' a value ", function(){
			
// 			expect(compiler.hasElements).to.equal(" li h1 a");
// 		});
// 	});
	
// });

// //-----------------------------------Proccessore
// describe('Compiler Processors ', function () {
// 	describe('Animation_transition-timing-function', function () {
// 		it("should return value of timing function for cubic value",function(){
// 			expect(compiler.animation_transition_tf("atfcb1-2-3-4")).to.equal("cubic-bezeir(1,2,3,4)");
// 		})
// 		// it("should return value of timing function for ease-in-out value",function(){
// 		// 	expect(compiler.animation_transition_tf("ttfeio")).to.equal("ease-in-out");
// 		// })
// 	});
// });


// //-----------------------------------Main Handlers
// describe('Main Handler ', function () {
// 	describe('getPropertyAndValue', function () {
// 		it("should return property and value of classname dynamic nature",function(){
// 			expect(compiler.getPropertyAndValue("br5px")).to.equal("border-radius:5px");
// 		})
// 		it("should return property and value of classname of static nature",function(){
// 			expect(compiler.getPropertyAndValue("dib")).to.equal("display: inline-block");
// 		})
// 		it("should return just property and value of classname without prefix",function(){
// 			expect(compiler.getPropertyAndValue("af_tac")).to.equal("text-align: center");
// 		})
		
// 	});
// 	describe('main',function(){
// 		it("Should return CSS statement for ClassName",function(){
// 			expect(compiler.main("br5px")).to.equalIgnoreSpaces(".br5px{border-radius:5px; }");
// 		})
// 		it("Should return CSS statement for ClassName with element prefix i.e _li-h1-a_c_nred",function(){
// 			expect(compiler.main("_li-h1-a_c_nred")).to.equalIgnoreSpaces("._li-h1-a_c_nred li h1 a{ color:red;}");
// 		})
// 		it("Should return CSS statement for ClassName",function(){
// 			expect(compiler.main("br5px")).to.equalIgnoreSpaces(".br5px{border-radius:5px; }");
// 		})
// 		it("Should return CSS statement for ClassName",function(){
// 			expect(compiler.main("br5px")).to.equalIgnoreSpaces(".br5px{border-radius:5px; }");
// 		})
// 		it("Should return CSS statement for ClassName",function(){
// 			expect(compiler.main("br5px")).to.equalIgnoreSpaces(".br5px{border-radius:5px; }");
// 		})
// 	})
// });

