{
    // interface

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & {
        role: string;
    };

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const NewUser1: UserWithRole2 = {
        name: 'John',
        age: 30,
        role: 'admin',
    };

    type rollNumber = number;

    // js --> object , array-> object function -> object

    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number
    }

    const rollNumber1 : Roll1 = [1,2,3,4,5,6,7,8,9,10];
    const rollNumber2 : Roll2 = [1,2,3,4,5,6,7,8,9,10];


    // function
    type Add1 = (a : number, b : number) => number;
    
    interface Add2 {
        (a : number, b : number) : number;
    }

    const add1 : Add1 = (a, b) => a + b;


}