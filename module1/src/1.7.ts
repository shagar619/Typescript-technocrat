{
    // spread operator
    // rest operator
    // destructuring



    // learn spread operator
    const bros1: string[] = ["Mir", "Fir", "Kir"];
    const bros2: string[] = ["Tir", "Nir", "Rir"];
    bros1.push(...bros2);




    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    
    const mentorList = {
        ...mentors1,
        ...mentors2,
    };





    // learn rest operator
    const greetFriends = (friends: string[])=> {
        friends.forEach((friend: string) => {
            console.log(`Hello ${friend}`);
        });
    }
    greetFriends(["Mir", "Fir", "Kir"]);
    
    }




    function sum(...num: number[]): number {
        return num.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
