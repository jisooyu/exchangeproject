const sum = (a,b, callback) => {
    callback(a + b)
}

sum ( 3, 4, callback =>{
    callback
})


const mum = (callback) =>{
    callback(999)
}

mum(moo=>{
    console.log(moo)
})