 var compiler=require('../index.js');
var chai=require("chai");
chai.use(require('chai-string'));
var expect=chai.expect;
const path=require('path');
const demo=path.join(__dirname,'../','final.css');

 // compiler.run("");
  // compiler.watch();
compiler.run('public/','public/index.css',true);