class Contractor {
    constructor(name,role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHey() {
        console.log(`${this._name} is a ${this._role} developer at 100Devs`)
    }
}

class FrontEnd extends Contractor {
    constructor(name, role, pay) {
        super(name,role)
        this._pay = pay
    }
    get pay() {
        return this._pay
    }

    sayHey() {
        console.log(`${this._name} is a ${this._role} developer at 100Devs with the pay of ${this._pay}.`)
    }
}

class BackEnd extends Contractor {
    constructor(name,role,pay) {
        super(name,role)
        this._pay = pay
    }
    get pay() {
        return this._pay
    }
    sayHey() {
        console.log(`${this._name} is a ${this._role} developer at 100Devs with the pay of ${this._pay}.`)
    }
}

let nathan = new Contractor("Nathan","Badass")
let jack = new FrontEnd("Jack","Frontend","250 ahour")
let bob = new BackEnd("Bob","Backend","180 a hour")

let team =[nathan,jack,bob]

for(let person of team) {
    person.sayHey()
}