

document.getElementById('deposit-btn').addEventListener('click', function(){
  const inputField = document.getElementById('deposit-input');
  const enterDeposit = inputField.value;
  const enterDepositNumber = parseFloat(enterDeposit);
  const depositField = document.getElementById('deposit');
  const depositFieldstring = depositField.innerText;
  const depositFieldNumber = parseFloat(depositFieldstring);
  const newDepositTotal = depositFieldNumber + enterDepositNumber;
  depositField.innerText = newDepositTotal;

  const balance = document.getElementById('balance');
  const balanceString = balance.innerText;
  const balanceNumber = parseFloat(balanceString);
  const totalBalance = balanceNumber + enterDepositNumber;
  balance.innerText = totalBalance;

  inputField.value = ''; 
})