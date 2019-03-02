var compiler=require('../index.js');
var chai=require("chai");
chai.use(require('chai-string'));
var expect=chai.expect;
const path=require('path');
const demo=path.join(__dirname,'demo.css');

 compiler.run("demo.acss",demo);
//compiler.run('public/index.html','public/index.css');