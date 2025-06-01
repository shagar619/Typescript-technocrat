{
    // mapped type

    const arrOfNum : number[] = [1,2,3];

    // const arrOfStr : string[] = ['1','2','3'];
    // Or,

    const arrOfStr = arrOfNum.map((val) => val.toString());

    console.log(arrOfStr);

    type AreaNum = {
        width : number;
        height : number;
    };

    type Height = AreaNum['height']; // look up type


    // T = {height : string, width : number}

    type AreaStr<T> = {
        [key in keyof T] : T[key]
    };

    const area1: AreaStr<{height : string, width : number}> = {
        height : '10',
        width : 10,
    }


}