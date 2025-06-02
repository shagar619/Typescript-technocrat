{
    // polymorphism

    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours per day`);
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const student1 = new Student();
    const developer1 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(student1);
    getSleepingHours(developer1);



    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    class Rectangle extends Shape {
        length: number;
        width: number;

        constructor(length: number, width: number) {
            super();
            this.length = length;
            this.width = width;
        }

        getArea(): number {
            return this.length * this.width;
        }
        }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }


    const shape1 = new Shape();
    const circle1 = new Circle(5);
    const rectangle1 = new Rectangle(10, 5);

    getShapeArea(shape1);
    getShapeArea(circle1);
    getShapeArea(rectangle1);










}