//create an array with five todos 
// const todo = ['Walk with the dog', 'Learn Javascript', 'Take out the trash', 'Cook the dinner', 'Make my bed']
const todos = [{
    title: 'Walk with the dog',
    completed:false
},{
    title:'Learn Javascript',
    completed:false
},{
    title:'Take out the trash',
    complete:true
},{
    title:'Cook the dinner',
    complete:true
}, {
    title:'Make the bed',
    completed:true
}]

//Convert array to array of objects

// 2 properties text, completed
//crate function to remove the todo by text value


const deleteTodo = function(todo, todoTitle) {
    const index = todos.findIndex(function(item, index){
        return item.title.toLowerCase() === todoTitle.toLowerCase()
            })
    if (index > -1){
        todos.splice(index,1)
    }    
}

// deleteTodo(todo, 'buy food')
deleteTodo (todos, 'Make the bed')
console.log(todos)




// //u have x todos (lenght of todos)
// console.log(`You have ${todo.length} todos!`)

// //print the first and second to last items 
// console.log(`You first todo is ${todo[0]}`)
// console.log(`You last todo is ${todo[4]}`)



// //================================== challenge area for methods class ======================================
// //Delete the 3rd item
// todo.splice(2,1)
// //Add a new item onto the end 
// todo.push('New last Item')
// //Remove the fist item from the list 
// todo.shift()

// //console.log(todo)

// todo.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`)
// })


// for(let count = 0 ; count < todo.length; count++){
//     const num = count+1
//     const todos = todo[count]
//     console.log(`${num}. ${todos}`)
// }

  
// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (let i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     console.log(num)
// }
//   factorialize(5);