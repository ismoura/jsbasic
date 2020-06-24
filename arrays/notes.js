const notess = ['Note 1', 'Note 2', 'Note 3']

console.log(notess)
console.log(notess.length)
console.log(notess[2])

console.log(notess[notess.length - 1])  // this code will return the same result them the code above because the param is 3 - 1 this is equal 2 and the 2 of our array is Note 3
 

// Manipulating arrays with methods 
const notesMethods = ['Note 1', 'Note 2', 'Note 3']

// pop push
console.log(notesMethods.pop()) //this print and delete Note 3. Pop method delete the last item 
notesMethods.push('My new note') //before i delete the last item with the pop method i add a new last item with the push method

//shift unshift 
console.log(notesMethods.shift()) // this print and delete Note 1. shift method delete the first item 
notesMethods.unshift('My first note') //befire i deleted the last item with the shitf method, i add a new first item with the unshift method

// splice
//The method splice can delete and add items 
notesMethods.splice(1,1) // here the splice method go to the index 1 (Note 2) and remove it.
notesMethods.splice(1,0) // this code don't do anything because the index 1 will be selected but 0 itens will be delete
notesMethods.splice(1,0,'This will be the new number 2') // this code don't delete anything but add a new item 2 to the array 
notesMethods.splice(1,1,'New new number2') // this code deleted the new number two created after and add a new number 2 to the array


console.log(notesMethods)
//Looping over arrays 

//here we can print the lis items with yours indexes 
notess.forEach(function (item, index){
    console.log(item)
    console.log(index)
})

for (let count = 0 ; count <= 2 ; count++){
    console.log(count)
}

for (let count = 0 ; count < notess.length; count++){
    console.log(notess[count])

}

for (let count = notess.length -1 ; count >= 0 ; count-- ){
    console.log(notess[count])
}
// search array

notess.indexOf('Note 2')
console.log(notess.indexOf('Note 2')) //this code will return the position of the element in the array (1 in that case)
console.log(notess.indexOf('Note 456')) // in this case we will get -1 because the value doesn't exist in the array

const note = [{
    title:'My next trip',
    body:'I wold like to go to Spain'
}, {
    title:'Habits to work on',
    body:'Exercise. Eating a bit better'
}, {
    title:'Office Modifications',
    body:'Get a new seat'
}]

const index = note.findIndex(function(item, index){
    console.log(item)
    return item.title === 'Office Modifications'
})
console.log(index)


//================================================================================

const findNote = function(note, noteTitle) {
    return note.find(function(item, index){
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })}
    
// const findNote = function(note, noteTitle) {
//     const index = note.findIndex(function(item, index){
//         return item.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note[index]
// }

const notes = findNote(note,'Office Modifications')
console.log(notes)
