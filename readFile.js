const fs = require('fs');
//const path = require('path');

function getObjects(route) {

    let objectsArray = [];
    const content = fs.readFileSync(route, 'utf-8').match(/\[.*\]\(.*\)/ig)
    //console.log(content);

    content.forEach((line) => {
        let linehrf = line.match(/\(.*\)/ig);
        let lineText = line.match(/\[.*\]/ig);


        lineclean = line.replace('](', '#');
        lineclean = lineclean.replace('[', '');
        lineclean = lineclean.replace(')', '');

        let separator = lineclean.indexOf('#')
        let object = {
            href: lineclean.slice(separator + 1),
            text: lineclean.slice(0, separator),
            file: route,
        };
        objectsArray.push(object)

       
    });
    return objectsArray;
}

module.exports = { getObjects }

