class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

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
