{
  // Reference Type --> Object

const user: {
    readonly company: string; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    firstName: "Shagar",
    lastName: "Ahmed",
    isMarried: true,
};

//   user.company = "PH";
}


