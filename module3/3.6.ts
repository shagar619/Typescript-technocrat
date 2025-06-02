{
    // getter and setter
    class BankAccount {
        public readonly  id: string;
        public name: string;
        private _balance: number;

        constructor(id: string, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // setter
        set deposit(amount: number){
            this._balance += amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance += amount;
        // }






        // getter
        get balance(): number {
            return this._balance;
        }

        // public getBalance(): number {
        //     return this._balance;
        // }


    }


    const goribManusherAccount = new BankAccount("123456789", "GoribManush", 20);

  // goribManusherAccount.deposit = 0;
  // goribManusherAccount.addDeposit(20); // function call korte hsse
    goribManusherAccount.deposit = 50;
  // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

  const myBalance = goribManusherAccount.balance; // property er mto kore
    console.log(myBalance);





}