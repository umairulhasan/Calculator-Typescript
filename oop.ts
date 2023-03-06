class Human {

    name : string = "Human";


    constructor(n: string) {

        this.name = n
    }
}

const user1 = new Human( "asd");  // new will create method and console value is      Human { name: 'Human' }

console.log(user1)
console.log(user1.name)