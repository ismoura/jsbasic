//var is the third type to declare an variable like let and const. let and const are new addictions to language  
var firstName = 'Andrew'
//like let we can reasign an valor to var 
firstName = 'Ismael'

console.log(firstName)

// a problem in use var is because it's possible declare again the var and asign another value to the variable. In const or let that's not possible 
firstName = 'Karen'

console.log(firstName)

// also we have a problem in a if statements
if (10 === 10) {
    var firstName = Karen
}

console.log(firstName)

// here we've an scope problem. firstName was declared in the if statemant and when we're using a void var we can acsses the var out of the scope and this is dangerous 
// if we use let or const the code above will return error 
//DONT USE VAR!