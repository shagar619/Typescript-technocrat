{
    // generic constraints with keyof operator

    type vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type owner = "bike" | "car" | "ship";

    type owner2 = keyof vehicle;

    const getPropertyOwner =<X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: "shagar",
        age: 25,
        address: "bangalore"
    };

    const result1 = getPropertyOwner(user, "name");
    console.log(result1);


    // 
}