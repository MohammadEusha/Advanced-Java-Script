//split :
var num = [1,2,3,4,5,6,7,8,9];
var split = num.slice(3, 7);

console.log(split);

//Splice:
var num1 = [1,2,3,4,5,6,7,8,9];
var splice = num1.splice(2, 5)
console.log(splice);
console.log(num1);

//Join :
var num2 = [1,2,3,4,5,6,7,8,9];
var join1 = num2.join(" ");
var join2 = num2.join("");
console.log(join1);
console.log(join2);
