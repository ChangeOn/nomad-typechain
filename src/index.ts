class Human {
    public name: string;
    public age: number;
    private gender: string;
    
    constructor(name: string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const mc = new Human("mcJ",110,"female");

const sayHi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!`;
};

console.log(sayHi(mc));

export {};