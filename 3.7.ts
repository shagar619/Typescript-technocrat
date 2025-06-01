{
    // static
    class Counter {
        static count: number = 0;

        static increment() {
            Counter.count++;
        }

        static decrement() {
            Counter.count--;
        }
    }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  // const instance3 = new Counter();
    console.log(Counter.increment());





}