abstract class User01 {
    constructor(
        protected firstName : string,
        protected lasyName : string
    ) {}
}

abstract class User02 {
    constructor(
        protected firstName : string,
        protected lastName : string
    ) {}
    abstract sayHi(name : string):string
    abstract fullName() : string
}

class Player02 extends User02 {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return `Hello ${name}. My Name is ${this.fullName}`
    }   
}

const user02 = new User02()

interface User03 {
    firstName : string,
    lastName : string
    sayHi(name : string):string
    fullName() : string
}

class Player03 implements User03 {
    constructor(
        public firstName : string,
        public lastName : string
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name : string) {
        return `Hello ${name}. My Name is ${this.fullName}`
    }
}