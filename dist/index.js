"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amounr");
        }
        else {
            this.balance += amount;
        }
    }
}
let account = new Account(1, "Homayoun", 0);
account.deposite(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map