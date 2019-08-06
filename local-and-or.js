let temp = 150

//logical and operator - True if both sides are true, false otherwise

//logical or operator - True if at least one side is true. False otherwise.
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}else if (temp <=0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh. Do what you want!')
}


//challenge area

let isGuessOneVegan = true
let isGuessTwoVegan = false

//Are both vegan? Only offer up vegan dishes 
//At least one vegan? Make sure to offer up some vegan options
//Else, Offer up anything on the menue 

if (isGuessOneVegan && isGuessTwoVegan ){
    console.log('offer only vegan dishes')
}else if (isGuessOneVegan || isGuessTwoVegan  ){
    console.log('offer up some vegan options')
} else {
    console.log('anything')
}