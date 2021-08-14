document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-input");
    const totalDepositAmount = depositAmount.value;
    const totaldeposit = parseFloat(totalDepositAmount);
    const currentDeposit = document.getElementById("deposit");
    const currentDepositText = currentDeposit.innerText;
    const currentAmount = parseFloat(currentDepositText);
    const totalAmount = totaldeposit + currentAmount;
    currentDeposit.innerText = totalAmount;

    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
    const totalBalanceText = parseFloat(balanceText);
    const totalDepositBalance = totalBalanceText + totaldeposit;
    balance.innerText = totalDepositBalance;


    depositAmount.value = "";
})
document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-input");
    const totalWthdrawAmount = withdrawAmount.value;
    const totalWithdraw = parseFloat(totalWthdrawAmount);
    const withdraw = document.getElementById("withdraw");
    const currentWithdraw = withdraw.innerText;
    const totalCurrentWithdraw = parseFloat(currentWithdraw);
    const totalWithdrawAmount = totalWithdraw + totalCurrentWithdraw;
    withdraw.innerText = totalWithdrawAmount;
    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
    const totalBalanceText = parseFloat(balanceText);
    const totalWithdrawBalance = totalBalanceText - totalWithdraw;
    balance.innerText = totalWithdrawBalance;



    withdrawAmount.value = "";
})