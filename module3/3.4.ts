{
    // instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('I am making sound!');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('Woof!');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeow() {
            console.log('Meow!');
        }
    }


    // smart way tge handle korar jnne chaile amra function bebohar krte pari

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }


    const getAnimal = (animal: Animal) => {
        if(isDog(animal)) {
            animal.makeBark();
        } else if(isCat(animal)) {
            animal.makeMeow();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog('Fido', 'Canine');
    const cat = new Cat('Garfield', 'Feline');

    getAnimal(dog);
    getAnimal(cat);


}