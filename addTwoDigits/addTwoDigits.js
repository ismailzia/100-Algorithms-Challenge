function addTwoDigits(num){

  newNum = num.toString().split('');

return newNum.reduce((num1,num2) => {
   return parseInt(num1) + parseInt(num2)
 })

}


console.log(addTwoDigits(27))