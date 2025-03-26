
let person1 = {
    name: "Nicholas",
    surname: "Magi",
    age: 20,
    birthday: new Date("06-01-2004").toDateString(),
    makePresentation: function () {
        return "Hi! I'm "
            .concat(`${this.name} ${this.surname}`)
            .concat(" and I'm ")
            .concat(this.age).concat(" years old.\n")
            .concat("I was born on ")
            .concat(this.birthday)
    }
}

console.log()
console.log("From JSON Object: " + person1.makePresentation())

function Persona(name, surname, age, birthday) {
    this.name = name
    this.surname = surname
    this.age = age
    this.birthday = birthday
    this.makePresentation = () => "Hi! I'm "
        .concat(`${this.name} ${this.surname}`)
        .concat(" and I'm ")
        .concat(this.age).concat(" years old.\n")
        .concat("I was born on ")
        .concat(this.birthday)
}

console.log()
console.log("From Function class: "
    + new Persona(
        "Luigi",
        "Guiducci",
        55,
        new Date("06-01-1960").toDateString()).makePresentation())

class Person {
    constructor(name, surname, age, birthday) {
        this.name = name
        this.surname = surname
        this.age = age
        this.birthday = birthday
        this.makePresentation = () => "Hi! I'm "
            .concat(`${this.name} ${this.surname}`)
            .concat(" and I'm ")
            .concat(this.age).concat(" years old.\n")
            .concat("I was born on ")
            .concat(this.birthday)
    }
}

console.log()
console.log("From Standard Class: "
    + new Person(
        "Lucio",
        "Corsi",
        31,
        new Date("10-15-1993").toDateString()).makePresentation())
