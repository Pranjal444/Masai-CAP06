// Bank Account Constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;

    // Inside the constructor, initialize the properties of the bank account object.
    // Method to deposit money into the account
    this.deposit = function (amount) {
        this.balance += amount;
        return { totalbalance: this.balance, message: "Deposit successfully", depositamount: amount };
    };

    // Method to withdraw money from the account
    this.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return { totalbalance: this.balance, message: "Withdrawal successfully", withdrawalamount: amount };
        } else {
            return { totalbalance: this.balance, message: "You have Insufficient Balance", withdrawalamount: 0 };
        }
    };

    // Method to check the account balance
    this.checkBalance = function () {
        return this.balance;
    };

    // Method to check if the account is active
    this.isActive = function () {
        return this.active;
    };
}

// Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Creating multiple BankAccount objects
const account1 = new BankAccount(1, 'Sonal Pagar', 'Savings', 1000);
const account2 = new BankAccount(2, 'Akash Solanki', 'Checking', 500);

// Perform deposit, withdrawal, and balance check operations
account1.deposit(500);
console.log(account1.checkBalance());
account1.withdraw(200);
console.log(account1.checkBalance());

account2.deposit(100);
console.log(account2.checkBalance());
account2.withdraw(50);
console.log(account2.checkBalance());

// Test isActive method
console.log(`Account 1 is active: ${account1.isActive()}`);
console.log(`Account 2 is active: ${account2.isActive()}`);

// Test getTotalBalance function
const allAccounts = [account1, account2];
const totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
