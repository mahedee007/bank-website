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







document.getElementById('deposit-btn').addEventListener('click', function(){
  const totalInput = inputField('deposit-input');
  const totalAmount = totalAmountField('deposit');
  
  
  const newDepositTotal = totalAmount + totalInput;
  console.log(newDepositTotal);
  totalAmount.innerText = newDepositTotal;

  
  // const totalBalance = balanceNumber + enterDepositNumber;
  // balance.innerText = totalBalance;

   
})