let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0,
}

let addExpense = function(account, amount){
    //account = {}
    account.expenses = account.expenses + amount
}

// addIncome 
let addIncome = function (account, income){
    account.income = account.income + income
    //console.log(account)
}
// resetAcount
let resetAcount = function (account) {
    account.expenses = 0,
    account.income= 0
}
// getAcountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
//example:  Acount for Andrew has $900. $1000 income. $100 in expenses
//addIncome
addIncome(myAccount, 2000)
//addExpense
addExpense(myAccount,2500)
//addExpense
addExpense(myAccount, 160)
//getAccountSummary
console.log(getAccountSummary(myAccount))
//resetAcount
resetAcount(myAccount)
//getAccountSummary
console.log(getAccountSummary(myAccount))