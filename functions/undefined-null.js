
//let name = 'Jen'
//undefined for variables
// in this case the return will be the word undefined, because we have a variable without a value
let name 
    //name = 'Jen'

    //Undefined is a reserved word 
if(name === undefined){
    console.log('Please provide an name')
}else{
    console.log(name)
}
console.log(name)

    //undefined for functions arguments 
let square = function(num){
    console.log(num)
}

square()

//if i not put the paremater the javascript wouldn't print a error on screen, Javascript will set for default the function argument as undefined

    //undefined for an function return 
    let squares = function(num){
        console.log(num)
    }
    
    let result = squares()
    console.log(result)
//if we try to do anything with a returning from function and this function hasn't an parameter defined    