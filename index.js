let path = require('path');

let processFile = (file) => {
  let ext = (path.extname(file));
  console.log(ext);

  if (ext === '.md') {
    console.log('si es la extensión ', ext);
  } else {
    console.log('no es .md');
  }
}

const mdLinks = (route) => {
  //ruta es absoluta o realtiva
  let changedRoute

  if (path.isAbsolute(route)) {
    changedRoute = route
  } else {
    changedRoute = path.resolve(route)
  }
  console.log(changedRoute)
  let ext = (path.extname(changedRoute));
  console.log(ext);

  if (ext === '.md') {
    console.log('si es la extensión ', ext);
  } else {
    console.log('no es md ', ext);
  }
  //tengo un ruta absoluta
  //md o no md
}

mdLinks(process.argv[2]);

