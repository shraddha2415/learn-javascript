const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const intgernum=(num)=> Math.round(num)==num;
  var intarray=realNumberArray.filter(intgernum);
  const getint=(num)=>num>0;
 var intger=intarray.filter(getint);
 const sqrt=(num)=>num*num;
  
  const squaredIntegers = intger.map(sqrt);
  // change code above this line
  console.log(squaredIntegers)
   ;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
//console.log(squaredIntegers);