{
    // utility types

    // pick 
    type Person = {
        name: string;
        age: number;
        email?: string;
        contact: {
            phone: string;
            address: string;
        }
    }

    type Name = Pick<Person, 'name'>;
    type Contact = Pick<Person, 'contact'>;


    // Omit
    type ContactInfo = Omit<Person, 'name' | "age">;


    // Required
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
    type PersonReadonly = Readonly<Person>;

    const Person1: PersonReadonly = {
        name: 'John',
        age: 30,
        email: 'john@example.com',
        contact: {
            phone: '123-456-7890',
            address: '123 Main St'
        }
    }

    // Record
    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'aa',
        b: "bb",
        c: "cc",
        d: "dd"
    }

    const EmptyObj: Record<string, unknown> = {};

}