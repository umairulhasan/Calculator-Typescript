class Human {

    name : string ;
    name1 : string ;
    name2 : string ;

    constructor(n: string) {

        this.name = n
        this.name1 = n
        this.name2 = n
    }
}

const user = new Human( "asd");  // new will create method and console value is      Human { name: 'Human' }

console.log(user)
