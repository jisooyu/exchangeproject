const convertAmount = document.querySelector( '#convertAmount' );
const convertFrom = document.querySelector( '#convertFrom' );
const convertTo = document.querySelector('#convertTo');
const reset = document.querySelector('#reset');
const convert = document.querySelector("#convert")
const display = document.querySelector("#currencyDisplay");
const currency = document.querySelector("#currencyName")

fetch('/exchange').then (response => {
    return response.json()
}).then (data => {
    conversionRates = data.conversionRates
}).catch(error => console.log(error))


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
    currency.textContent = toCountryKey
    toRate = parseFloat(conversionRates[toCountryKey])
} );

convert.addEventListener('click', ()=>{
    const convertedCurrency = conversion(amount, fromRate, toRate)
    display.textContent = convertedCurrency.toLocaleString()  
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