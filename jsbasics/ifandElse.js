let isAccountLocked = false
let userRole =  'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else {
    console.log('Welcome!')
}


// else if structure 
if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole=== 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome!')
}

//Chalenge area

let temp = 33
let isFreezing = temp <= 32
let isHot = temp >= 45

// It's freezinf outside 
if (isFreezing){
    console.log('It is freezeng')
}else if (isHot){
    console.log ('It is hot!')
} else {
    console.log('Go for it, It is pretty nice.')
}
//It is hot outside!

//Go for it, It is pretty nice.

//professor made this 

if (temp <= 32 ){
    console.log('It is freezeng')
} else if (temp >=110){
    console.log ('It is hot!')
}else {
    console.log('Go for it, It is pretty nice.')
}