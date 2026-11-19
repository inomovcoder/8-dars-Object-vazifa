const account = {
  owner: "Ali",
  balance: 500
};

function withdraw(account,amount){
    if(account.balance >= amount){
        account.balance -= amount
        return account.balance
    }
    else{
        return "Insufficient balance"
    }
}

console.log(withdraw(account,600))