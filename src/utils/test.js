const express = require( 'express' )
const app = express()
const port = process.env.PORT || 3000

const exchangeRates = require( './exchangeRates' )

app.get( '/test', ( req, res ) => {
    exchangeRates( ( error, rates ) => {
        if ( error ) {
            res.send(error)
        } else {
            res.send( {
                rates:rates
            })
        }
    } )
} )

app.listen( port, () => {
    console.log(`Server is up on port ${port}`)
})