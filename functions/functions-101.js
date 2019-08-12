//function - input (argument), code, output [return value]
let greatUser = function() {
    console.log('Welcome User!')
}

greatUser()

greatUser()

greatUser()

let square = function (num) {
    let result = num * num 
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//Challenge Area


//convertFarenheitToCelcius

let convertFarenheitToCelcius = function (farenheit){
    let celsius = (farenheit - 32) * 5/ 9
    return celsius
}

//call a couple of times (32 -> 0) (68 -> 20)
let convertValue = convertFarenheitToCelcius(32)
let otherConvertValue = convertFarenheitToCelcius (68)
//print the onverted values
console.log(convertValue)
console.log(otherConvertValue)