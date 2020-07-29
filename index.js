// reference site: https://www.exchangerate-api.com/docs/free-exchange-rate-api
// const myAPI = "4a327ab0a3ea9a0bfa16118e"  

const url = "https://open.exchangerate-api.com/v6/latest"


fetch(url)
.then(response =>{
    console.log(response)
    return response.json()
})
.then(data =>{
    console.log(data.rates)
    conversionRates = data.rates
})
.catch(error => console.log(error))


const convertAmount = document.querySelector( '#convertAmount' );
const convertFrom = document.querySelector( '#convertFrom' );
const convertTo = document.querySelector('#convertTo');
const reset = document.querySelector('#reset');
const convert = document.querySelector("#convert")
const display = document.querySelector("#currencyDisplay");
const currency = document.querySelector("#currencyName")

const countryKey = {
    korea: "KRW",
    us: "USD",
    japan: "JPY",
    china: "CNY",
    philippine: "PHP"
}

let conversionRates ={
    USD:1,
    KRW:1000,
    JPY:240,
    CNY: 100,
    PHP: 200
}

let fromRate = 0;
let toRate = 0;
let amount = 0;

const conversion = (amount, from, to) =>{
    if (from === "USD"){
        return amount * to
    } else {
        if (to === "USD"){
            return Math.round(amount / from)
        } else {
            console.log(from)
            return Math.round(amount / from * to)
        }
    }
}

convertAmount.addEventListener( 'change', () => {
    amount = parseFloat(convertAmount.value);
} );

convertFrom.addEventListener("change", () => {
    const fromCountryKey = countryKey[convertFrom.value]
    fromRate = parseFloat(conversionRates[fromCountryKey])
})

convertTo.addEventListener( 'change', () => {
    const toCountryKey = countryKey[convertTo.value]
    currency.appendChild(document.createTextNode(` ${toCountryKey}`))
    toRate = parseFloat(conversionRates[toCountryKey])
} );

convert.addEventListener('click', ()=>{
    const convertedCurrency = conversion(amount, fromRate, toRate)
    display.appendChild(document.createTextNode(convertedCurrency));   
})

reset.addEventListener('click', () => {
    display.textContent = ""
    currency.textContent = ""
    fromRate = 0
    toRate = 0
    convertAmount.value = 0
    convertFrom.value = ""
    convertTo.value = ""
})