{
    // access modifiers
    class BankAccount {
        public readonly  id: string;
        public name: string;
        private _balance: number;

        constructor(id: string, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        public addDeposit(amount: number) {
            this._balance += amount;
        }

        public getBalance(): number {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
    test(){
    //   this.
    }
    }


    const goribManusherAccount = new BankAccount("123456789", "GoribManush", 20);

    // goribManusherAccount.balance = 0;

    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);





}