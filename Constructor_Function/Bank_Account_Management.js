// Create a constructor function called BankAccount
function BankAccount(accountNumber, name, type, balance) {
    // Initializing properties inside the constructor
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;

    // Method to deposit the specified amount into the account
    this.deposit = function (amount) {
        this.balance += amount;
        return {
            message: "Amount Deposited Successfully!",
            depositedAmount: amount,
            totalBalance: this.balance,
        };
    };

    // Method to withdraw the specified amount from the account if the balance is sufficient
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return {
                message: "Amount Withdrawn Successfully",
                withdrawnAmount: amount,
                totalBalance: this.balance,
            };
        } else {
            return {
                message: "Insufficient Balance, Please Check your Balance",
                withdrawnAmount: amount,
                totalBalance: this.balance,
            };
        }
    };

    // Method to print the account's balance
    this.checkBalance = function () {
        return {
            message: "Your Available Balance Is",
            totalBalance: this.balance,
        };
    };

    // Method to check and return whether the account is active
    this.isActive = function () {
        return {
            message: this.active ? "This is an Active Account" : "This is an Inactive Account",
            isActive: this.active,
            totalBalance: this.balance,
        };
    };
}

// Function to calculate and return the total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive().isActive) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Creating multiple bank accounts objects
const acc1 = new BankAccount(101, "Pranjal Pagar", "Saving Account", 3000);
const acc2 = new BankAccount(102, "Sonal Pagar", "Current Account", 3900);

// Performing actions on the accounts
console.log(acc1.deposit(300));
console.log(acc1.withdraw(900));
console.log(acc2.checkBalance());

// Testing isActive method
console.log(acc1.isActive());

// Deactivating account 1
acc1.active = false;

// Checking total balance
const totalBalance = getTotalBalance([acc1, acc2]);
console.log("Total Balance of Active Account 1 is:", totalBalance);

// Activating account 1 again
acc1.active = true;

// Checking total balance again
const finalTotalBalance = getTotalBalance([acc1, acc2]);
console.log("Total Balance of Active Accounts:", finalTotalBalance);
