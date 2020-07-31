// reference site: https://www.exchangerate-api.com/docs/free-exchange-rate-api

const request = require( 'request' )


const exchangeRates = ( callback) => {
    const url = "https://open.exchangerate-api.com/v6/latest"
    request({url, json:true}, (error, {body}) =>{
        if (error){
            callback("No service ", undefined)
        } else if (body.error) {
            callback("No rate found", undefined)
        } else {
            const data = body.rates // returns data
            callback(error, data)  // return undefined
        }
    } )
}

module.exports = exchangeRates