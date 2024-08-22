"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amounr");
        }
        else {
            this._balance += amount;
        }
    }
    calculateTax() {
        return this._balance - 1.2;
    }
    getBalance() {
        return this.calculateTax();
    }
}
let account = new Account(1, "Homayoun", 0);
account.deposite(100);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map