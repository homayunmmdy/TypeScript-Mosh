class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amounr");
    } else {
      this._balance += amount;
    }
  }

  private calculateTax() {
    return this._balance - 1.2;
  }

  getBalance(): number {
    return this.calculateTax();
  }
}

let account = new Account(1, "Homayoun", 0);
account.deposite(100);
console.log(account.getBalance());
