class Base {
    k = 4;
    constructor(k) {
    }
}
class Drived extends Base {
    constructor() {
        super(30);
    }
}
const yes = new Drived();
yes.k;
console.log(yes);
export {};
