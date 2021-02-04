const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const doubleUp = element * element;
    result.push(doubleUp);
}
console.log(result);

///Doing same thing using map

const numbers1 = [11, 22, 33, 44, 55, 66, 77, 88, 99];


 var ans =numbers1.map(function square(element, index, array) {
     console.log(element, index, array);
    return element*element
})
console.log(ans);

///Doing same thing using map by allow:


//Way 1:
const numbers2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const ans2 = numbers2.map(x => x * x)
console.log(ans2);

//using Filter and find:

const numbers3 = [11, 22, 33, 44, 55, 66, 77, 88, 99]; 

const filter = numbers3.filter(x => x > 55); //filter give you an array
const find = numbers3.find(x => x > 55);//filter give you an element

console.log(filter);
console.log(find);


