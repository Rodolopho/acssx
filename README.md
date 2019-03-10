# Acssx
#
AliasCss extended version intregrated with sass and cli features
# Installation
`npm install acssx`

`acssx inputfile.acss  outputfile.css`

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

## Watch
`node acssx\bin\accsx inputFileOrFolder outputFile.css --watch`;

```javascript
const accs = require('acssx');
//input as a folder
acssx.run("./public", ".public/css/acss.css");

//input as a file
acssx.run("./public/index.html", ".public/css/acss.css");

//input as a array of files and folder, 
acssx.run(["./public/index.html", "./public/about.html", "/view"], ".public/css/acss.css");

//Watch you file/Folder i.e input note no 'watch' available for array.
acssx.watch();



```
@package.json
```
......
"scripts": {
    ....
    "watch": "accsx  pathToInputFolderOrFilename/ demo.css --watch",
    ....

  },
  ....
```










