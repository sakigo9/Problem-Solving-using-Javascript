function bankAccount(initialBalance) {
    // Private variable to store the balance
    let balance = initialBalance;

    // Function for depositing money
    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited $${amount}. New balance: $${balance}`);
        } else {
            console.log('Invalid deposit amount');
        }
    }

    // Function for withdrawing money
    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${balance}`);
        } else {
            console.log('Invalid withdrawal amount or insufficient funds');
        }
    }

    // Return an object with references to the deposit and withdraw functions
    return {
        deposit,
        withdraw
    };
}

// Example usage:
const account = bankAccount(1000);

account.deposit(500); // Outputs: Deposited $500. New balance: $1500
account.withdraw(200); // Outputs: Withdrawn $200. New balance: $1300
account.withdraw(1500); // Outputs: Invalid withdrawal amount or insufficient funds


