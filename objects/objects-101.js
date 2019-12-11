//Objects and properties

//Here we define the new object and his properties
let myBook = {
title: '1984',
author:'George Orwell',
pageCount: 326
}

//here is the output of the object, first with all properties and selecting one property with a string 
console.log(myBook)
console.log(`${myBook.title} by ${myBook.author}`)  
//when we chaange the properties values the object takes on that new property value
myBook.title = 'Animal Farm'
//here is the out of the object with one property update
console.log(`${myBook.title} by ${myBook.author}`)  