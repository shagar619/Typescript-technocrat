{
    // interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }

    type EmilaWatch = {
        brand: string;
        model: string;
        display: string;
    }


    const poorDeveloper: Developer<EmilaWatch> = {
        name: "Shagar",
        computer: {
            brand: "Lenovo",
            model: "Yoga",
            releaseYear: 2019
        },
        smartWatch: {
            brand: "Emila",
            model: "Watch",
            display: "1.5 inch"
        }
    }


    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }


    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Shagar",
        computer: {
            brand: "Lenovo",
            model: "Yoga",
            releaseYear: 2019
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Something",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "125cc"
        }
    }





}