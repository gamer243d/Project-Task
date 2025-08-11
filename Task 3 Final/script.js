function convertTemp() {
  const tempInput = document.getElementById('tempValue').value.trim();
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const errorMsg = document.getElementById('errorMsg');
  const resultBox = document.getElementById('resultBox');

  errorMsg.textContent = '';
  resultBox.textContent = '';

  const temp = parseFloat(tempInput);

  if (isNaN(temp)) {
    errorMsg.textContent = 'Please enter a valid number.';
    return;
  }

  if (fromUnit === 'K' && temp < 0) {
    errorMsg.textContent = 'Kelvin cannot be negative.';
    return;
  }

  if (fromUnit === toUnit) {
    resultBox.textContent = `Same units selected. Result: ${temp.toFixed(2)} °${toUnit}`;
    return;
  }

  let celsius;

  switch (fromUnit) {
    case 'C':
      celsius = temp;
      break;
    case 'F':
      celsius = (temp - 32) * 5 / 9;
      break;
    case 'K':
      celsius = temp - 273.15;
      break;
  }

  let finalTemp;

  switch (toUnit) {
    case 'C':
      finalTemp = celsius;
      break;
    case 'F':
      finalTemp = (celsius * 9 / 5) + 32;
      break;
    case 'K':
      finalTemp = celsius + 273.15;
      break;
  }

  resultBox.textContent = `Result: ${finalTemp.toFixed(2)} °${toUnit}`;
}