function inputField(Id){
  const inputValue = document.getElementById(Id);
  const inputValueString = inputValue.value;
  const totalInput = parseFloat(inputValueString);
  inputValue.value = '';
  return totalInput;
}
function totalAmountField(Id){
  const amountValue = document.getElementById(Id);
  const amountValueString = amountValue.innerText;
  const totalAmount = parseFloat(amountValueString);
  return totalAmount;
}

function updateBalance(Id , value){
  const balanceUpdate = document.getElementById(Id);
  balanceUpdate.innerText = value;

}





document.getElementById('deposit-btn').addEventListener('click', function(){
  const totalInput = inputField('deposit-input');
  const totalAmount = totalAmountField('deposit');
  
  
  const newDepositTotal = totalAmount + totalInput;
  
  updateBalance('deposit', newDepositTotal);

  const currentBalance = totalAmountField('balance');
  const totalBalance = currentBalance + totalInput;
  updateBalance('balance', totalBalance);

   
})