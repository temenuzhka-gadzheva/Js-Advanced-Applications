class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        let {firstName, lastName, personalId} = customer;

        if (this.allCustomers.some(c => c.firstName == firstName
            && c.lastName == lastName && c.personalId == personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;
    }


    depositMoney(personalId, amount) {
        let myCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (!myCustomer) {
            throw new Error(`We have customer with this ID!`);
        }
        if (!myCustomer.hasOwnProperty('totalMoney')) {
            myCustomer.totalMoney = 0;
        }

        myCustomer.totalMoney += Number(amount);

        if (!myCustomer.hasOwnProperty('transaction')) {
            myCustomer.transaction = [];
        }

        let currentTransaltion = { type: `made deposit of`, amount };

        myCustomer.transaction.push(currentTransaltion);
       
        return `${myCustomer.totalMoney}$`;
    }

    withdrawMoney (personalId, amount){
        let myCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (!myCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (myCustomer.totalMoney < amount || !myCustomer.hasOwnProperty('totalMoney')) {
            throw new Error(`${myCustomer.firstName} ${myCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        myCustomer.totalMoney -= amount;


        if (!myCustomer.hasOwnProperty('transaction')) {
            myCustomer.transaction = [];
        }

        let currentTransaltion = { type: `withdrew`, amount };

        myCustomer.transaction.push(currentTransaltion);
       
        return `${myCustomer.totalMoney}$`;
    }

    customerInfo(personalId){

        let myCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (!myCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        let customerResult = '';

        customerResult += `Bank name: ${this._bankName}\n` + 
        `Customer name: ${myCustomer.firstName} ${myCustomer.lastName}\n` +
        `Cusomer ID: ${personalId}\n`+
        `Total Money: ${myCustomer.totalMoney}$\n` +
        `Transactions:\n`;

        for (let i = myCustomer.transaction.length -1; i >= 0; i--) {
            let {type,amount} = myCustomer.transaction[i];

            customerResult += `${i+1}. ${myCustomer.firstName} ${myCustomer.lastName} ${type} ${amount}$!\n`;
            
        }

        return customerResult.trimEnd();

    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
