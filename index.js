const path = require('path');//Doc de node.js
const fs = require('fs');
const {getObjects} = require('./readFile.js')

console.log(getObjects('./README.md'))
const mdLinks = (route) => {
  //ruta es absoluta o realtiva

  let changedRoute

  if (path.isAbsolute(route)) {
    changedRoute = route
  } else {
    changedRoute = path.resolve(route)
  }

  if(fs.existsSync(route)){
    let checklistPath = fs.statSync(route)

    if(checklistPath.isDirectory()){
      //console.log(TypeError);
    }
  }
  console.log(changedRoute)
  let ext = (path.extname(changedRoute));
  //console.log(ext);

  if (ext === '.md') {
    //console.log('si es la extensión ', ext);
  } else {
    //console.log('no es md ', ext);
  }
  //tengo un ruta absoluta
  //md o no md

}

mdLinks(process.argv[2]);

