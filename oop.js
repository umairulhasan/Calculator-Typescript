class MyClass {
    prop1;
    prop2;
    prop3;
    constructor(val1, val2, val3) {
        this.prop1 = val1;
        this.prop2 = val2;
        this.prop3 = val3;
    }
}
// create an instance of MyClass with some values
const myInstance = new MyClass("hello", 42, true);
// access the properties of the instance
console.log(myInstance.prop1); // output: "hello"
console.log(myInstance.prop2); // output: 42
console.log(myInstance.prop3); // output: true
export {};
