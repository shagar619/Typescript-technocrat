{
    // generic type

    type GenericArray<T> = Array<T>;


    const rollNumber: number[] = [1, 2, 3, 4, 5];
    const rollNumber2: Array<number> = [1, 2, 3, 4, 5];
    const rollNumber3: GenericArray<number> = [1, 2, 3, 4, 5];

    const mentors2: string[] = ["X", "Y", "Z"];
    const mentors: Array<string> = ["X", "Y", "Z"];
    const mentors3: GenericArray<string> = ["X", "Y", "Z"];

    const booleanArray: boolean[] = [true, false, true];
    const booleanArray2: Array<boolean> = [true, false, true];
    const booleanArray3: GenericArray<boolean> = [true, false, true];



    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        { name: "X", age: 1 },
        { name: "Y", age: 2 },
        { name: "Z", age: 3 },
    ];


    //generic tuple
    type GenericTuple<X,Y> = [X, Y];

    const manush: GenericTuple<string, string> = ["X", "Y"];

    const UserWithID: GenericTuple<number, { name: string; email: string}> = [1, { name: "X", email: "X@gmail.com" }];
}