// 1st type  using object literal
const student = {
    name: "Sakib al Hassan",
    age: 32,
    job: 'Cricketer'
};

console.log(student)

// 2nd type of constructor 
let person = new Object({name:'samim', age: 16})
console.log(person)

// 3rd type of object class prototype
class Peopole {
    constructor(name, age, job){
        this.name = name;
        this.job = job;
        this.age = age;
    }
}
let persons = new Peopole('samim', 16, 'programmer')
console.log(persons);
// 4th type of object
function human(name, age, job){
    this.name = name;
    this.job = job;
    this.age = age;
}
let manus = new human('samim', 16, 'programmer')
console.log(manus)
