{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param];
    };

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param];
    };

    const res1 = createArray('Bangladesh');
    const resGenerics = createArrayWithGenerics<string>('Bangladesh');

    type User = {
        id: number;
        name: string;
    }

    const resGenericObj = createArrayWithGenerics<User>({
        id: 1,
        name: 'Bangladesh'
    });

    const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
        return [param1, param2];
    };


    const res10 = createArrayWithTuple<string, number>('Bangladesh', 123);

    const res11 = createArrayWithTuple<string, {name: string}>(
        'Bangladesh', {name: 'asia'});

        

    const addCourseToStudent = <T>(student: T) => {
        const course = 'typescript';
        return { ...student, course };
    };

    const student1 = addCourseToStudent({
        id: 1,
        name: 'Bangladesh',
        email: "a@gmail.com",
        type: "NLW"
    });

    const student2 = addCourseToStudent({name: 'Bangladesh', email: "b@gmail.com", type: "MLW"});



}