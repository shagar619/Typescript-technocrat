{
    // type assertion
    
    let anything: any;

    anything = "Next level web development";
    anything = 123;
    
    // (anything as number).

    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if(typeof value === "number") {
            const convertedValue = value * 1000;
            return `The converted value is : ${convertedValue}`;
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;
    console.log(result1);
    console.log(result2);


    type customError = {
        message: string;
        errorCode: number;
    }

    try{

    } catch (error) {
        console.log((error as customError).message);
    }

}
