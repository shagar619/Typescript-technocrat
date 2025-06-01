{
    // oop - class

    class Animal {
        constructor(
            public name: string,
            public species: string,
            public sound: string
        ) { }
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }  

    const dog = new Animal("dog", "dog", "woof");
    const cat = new Animal("cat", "cat", "meow");
    
    cat.makeSound
    dog.makeSound();


}