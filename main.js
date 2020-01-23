const form = document.getElementById('passwordForm');

const range = document.getElementById('amountRange'); // 8-50
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = range.value;
  const includeUppercase = uppercase.checked;
  const includeLowercase = lowercase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;
  const password = generatePassword(amount, uppercase, symbols, numbers);
  // console.log('submit');
  // console.log(amount);
  // console.log(includeUppercase);
});

function generatePassword() {}
