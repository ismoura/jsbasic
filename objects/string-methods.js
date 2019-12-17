let name = 'Andrew Mead '

//length property 
console.log(name.length)
//Convert to upper case 
console.log(name.toUpperCase())
//Cibvert to lowercase
console.log(name.toLowerCase())

//Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))  

//Trim (remove spaces)
console.log(name.trim())

//Challenge Area

//isValidPassword
let isValidPassword = function (password){
 
    return password.length > 8 && !password.includes('password')
 //   if (password.length > 8 && !password.includes('password')){
 //       return true
 //   } else {
 //      return false
 //   }
       
}
// length is more than 8 - and it doesn't contain the word password 

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$$¨^&'))
console.log(isValidPassword('adsfpasdhadhpassword'))