const isRaining = true 

//We cant reasign the value of an const type (constant)
//isRaining = false 
console.log(isRaining)

//creatingAnObject
const person = {
    age:27
}
// we can't reasign the object at all thats code will falied 
// person = { any other params}

//but we can modify the object properties like the code bellow

person.age = 28

console.log(person)

//Challenge Area

const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100 
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    }else if (percent >= 80) {
        letterGrade = 'B'
    }else if (percent >=70){
        letterGrade='C'
    }else if (percent >= 60){
        letterGrade='D'
    }else{
        letterGrade='F'
    }
    return `You got a ${letterGrade} (${percent}%)!`
}

const result = gradeCalc(1,20)
console.log(result) 