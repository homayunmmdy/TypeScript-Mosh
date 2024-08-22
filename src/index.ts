class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amounr");
    } else {
      this.balance += amount;
    }
  }
}

let account = new Account(1, "Homayoun", 0);
account.deposite(100);
console.log(account.balance);
