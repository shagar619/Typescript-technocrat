{
    // promise

type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};

    const getToDo = async(): Promise<Todo> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        return data;
    }

    getToDo();


    type Something = { something: string };

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((reslove, reject) => {
        const data: Something = { something: "something" };

        if(data) {
            reslove(data);
        } else {
            reject("failed to load data");
        }
        });
    }

    // calling create promise function
    const showData = async(): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
    }

    showData();

}