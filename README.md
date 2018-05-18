# Acssx
#
AliasCss extended version
# Installation
`npm install accsx`

```javascript
const accs = require('acssx');
```
#### TO get Minified accs compiler for browser

```javascript
acss.dist("path/to/file/acss.js")

//Example
acss.dist("./app/public/js/acss.js");
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
acss.run("./public", ".public/css/acss.css");

//input as a file
acss.run("./public/index.html", ".public/css/acss.css");

//input as a array of files and folder, 
acss.run(["./public/index.html", "./public/about.html", "/view"], ".public/css/acss.css");

```
Each time you run 'accs.run()' if the destination file is same it will overwrite the content, if you want to append content to the destination file, you need to pass 'true', as third arguments.
##### Example
acss.run("./public", ".public/css/acss.css", true);// 





