//Crear un promgrama que imprima una lista de los archivos en un directorio
//filtrar los archivos por una extensión
//primer argumento nombre de un directorio
//segundo argumento la extensión
//la lista de archivos debe ser imprimida en consola
//una linea por archivo

const fs = require ('fs');
const fileName = process.argv[2];
fs.readdir(fileName, function(e,archivList)
