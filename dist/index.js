"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amounr');
        }
        else {
            this.balance += amount;
        }
    }
}
//# sourceMappingURL=index.js.map