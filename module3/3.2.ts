{
    // // oop - inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    const student1 = new Student("John", 20, "123 Main St");
    console.log(student1.name, student1.age, student1.address);
    // student1.


    class Teacher extends Person {
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClasses(numOfClasses: number) {
            console.log(`${this.name} will take $ {numOfClasses}`);
        }
    }

    const teacher = new Teacher("Mr. teacher", 40, "Uganda","professor");
    // teacher.





}