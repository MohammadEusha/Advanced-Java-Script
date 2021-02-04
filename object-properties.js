const students = [
    {id:1, name:'Eusha'},
    {id:2, name:'Showaib'},
    {id:3, name:'Afroza'},
    {id:4, name:'Azam'},
    {id:5, name:'Abir'},
]
const names = students.map(x => x.name)
const ids = students.map(x => x.id)
const findIds = students.find(x => x.id > 3)
const filterNames = students.filter(x => x.id < 3)
console.log(names);
console.log(ids);
console.log(findIds);
console.log(filterNames);