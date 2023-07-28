function getInput(inputId){
    const inputAmount = document.getElementById(inputId);
    const totalInputAmount = inputAmount.value;
    const totalInput = parseFloat(totalInputAmount);
    inputAmount.value = "";
    return totalInput;

}
function depositWithdraw(totalId, amount){
    const depositWithdraw = document.getElementById(totalId);
    const depositWithdrawText = depositWithdraw.innerText;
    const depositWithdrawAmount = parseFloat(depositWithdrawText);
    depositWithdraw.innerText = depositWithdrawAmount + amount;
    
}
function currentBalance(){
    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
    const totalBalanceText = parseFloat(balanceText);
    return totalBalanceText;
}

function updateBalance(total, isAdd){
    const balance = document.getElementById("balance");
    // const balanceText = balance.innerText;
    // const totalBalanceText = parseFloat(balanceText);
    const totalBalanceText = currentBalance();
    
    if(isAdd === true ){
        balance.innerText = totalBalanceText + total;
    }else {
        balance.innerText = totalBalanceText - total;

    }
    
}


document.getElementById("deposit-btn").addEventListener("click", function(){
   
   const totalDeposit = getInput("deposit-input");
   if (totalDeposit > 0 ){
    depositWithdraw("deposit", totalDeposit);
    
    updateBalance(totalDeposit, true);

   }else{
       alert("please enter a valid number");
   }
    
    

})
document.getElementById("withdraw-btn").addEventListener("click", function(){
    
    const totalWithdraw = getInput("withdraw-input");
    const myBalance = currentBalance();
    if (totalWithdraw> 0 && totalWithdraw < myBalance){
        depositWithdraw("withdraw", totalWithdraw);

    updateBalance(totalWithdraw, false);

    }else{
        alert("please enter a valid number");

    
})