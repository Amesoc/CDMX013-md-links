const axios = require('axios');

const validate = (link) => {
    //console.log(link)
    return axios.get(link.href)
        .then(function (response) {
            return {status: response.status, text: response.statusText, ...link}
            // handle success
           
        })
        .catch(function (error) {
            return {status: error.status, ...link}
            // handle error

        })
    
}
console.log(validate)
