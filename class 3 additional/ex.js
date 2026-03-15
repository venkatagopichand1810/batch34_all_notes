

let balance = 1000; //public variable

function deposit(amount){
    balance += amount;
    console.log("deposited:", amount)

}

function getBalance(){
    console.log("Your balance is", balance)
}

getBalance(); //1000
deposit(500); //500
getBalance(); //1500

balance = 0;
getBalance();

//data leakage,, global/public