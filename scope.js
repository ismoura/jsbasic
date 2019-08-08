//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks (varOne)
//Local Scope - Defined inside a code block (varTwo)

//In a scope you can access variables defined in that scope, or i  any parent/ancestor scope
//varTwo is not access in Global Scope

let varOne = 'varOne'

//Global Scope 
    //local scope (varTwo)
        //local scope (varFour)
    //local scope (varThree)
if (true){
    console.log(varOne)
    let varTwo ='varTwo'
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'
    }
}

console.log(varTwo)


if (true){
    let varThree = 'varThree'
}