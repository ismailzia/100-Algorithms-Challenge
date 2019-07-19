function add(num1, num2) {
    return num1 + num2;
  }
  
  function add2(...numbers){
    let total = 0;
    numbers.map((num) => {
      total += num;
    });
  
    return total;
  }
  
  console.log(add(1, 2));
  console.log(add(3, 2));
  
  console.log(add2(1,2,3,4,5));
  console.log(add2(2,3));
  