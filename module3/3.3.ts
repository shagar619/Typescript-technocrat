{
      // type guards

    // typeof --> type guard

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(1, 2);
    const result2 = add("1", "2");
    console.log(result1, result2);

    // in guard
    type NormalUser = {
        name: string;
        email: string;
    }

    type AdminUser = {
        name: string;
        email: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "John",
        email: "john@example.com"
    }

    const adminUser: AdminUser = {
        name: "Jane",
        email: "jane@example.com",
        role: "admin"
    }

    getUser(normalUser);
    getUser(adminUser);


}