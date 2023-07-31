

document.getElementById('deposit-btn').addEventListener('click', function(){
  const inputField = document.getElementById('deposit-input');
  const enterDeposit = inputField.value;
  const enterDeposittNumber = parseFloat(enterDeposit);
  const depositField = document.getElementById('deposit');
  const depositFieldstring = parseFloat(depositField);
  const newDeposit = depositFieldstring.innerText;
  const totalDeposit = enterDeposittNumber + newDeposit;

  inputField.value = ''; 
})