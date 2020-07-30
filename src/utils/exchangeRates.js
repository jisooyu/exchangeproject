// reference site: https://www.exchangerate-api.com/docs/free-exchange-rate-api

const request = require('request')

const exchangRates = () => {
    const url = "https://open.exchangerate-api.com/v6/latest"
    // const myAPI = "4a327ab0a3ea9a0bfa16118e"  
    // const url = "https://v6.exchangerate-api.com/"+myAPI+"/latest/USD"
    request({url, json:true}, (error, {body}) =>{
        if (error){
            callback("No service ", undefined)
        } else if (body.error) {
            callback("No rate found", undefined)
        } else {
            // callback(undefined, body.rates)
            return body.rates
        }
    })
}

module.exports = exchangRates