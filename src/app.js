
const path = require('path')
const express = require('express')
const request = require("request")
const hbs = require('hbs')

const app = express ()
const port = process.env.PORT || 3000
const exchangeRates = require('./utils/exchangeRates')


/***** Define path for Express config(Start)*******************/
const publicDirectoryPath = path.join(__dirname, '../public')
// views folder이름을 templates로 바꾸고 싶다면 다음과 가튼 setting이 필요
// views -> templates setting 1
const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')
/***** Define path for Express config(End)*******************/


/****** Setup handlebars and view engine(Start)**************/
// view engine을 hbs로 setting
app.set('view engine', 'hbs')

// views -> templates setting 2
app.set('views', viewsPath)

// hbs register -> setting templates/partials path 
hbs.registerPartials(partialsPath)

/****** Setup handlebars and view engine(End)**************/

// Setup directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'exhangeRate',
        name:'Jisoo Yu'
    })
})
app.get('/exchange', (req,res)=>{
    exchangeRates()
})


app.listen(port, () =>{
    console.log(`Server is up on port ${port}.`)
})
