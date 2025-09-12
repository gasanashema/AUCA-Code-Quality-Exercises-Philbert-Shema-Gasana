const numberFormat = (number) => {
  const stringfiedNumber = String(number);

  const isNegative = stringfiedNumber[0] === '-' ? true : false;

  const removeSign = isNegative 
    ? stringfiedNumber.split('').slice(1).join('') 
    : stringfiedNumber;

  const hasDecimal = removeSign.includes('.');

  let [intPart, decimalPart] = hasDecimal 
    ? removeSign.split('.') 
    : [removeSign, null];

  const handleInteger = (num) => {
    const arr = num.split('');
    const result = [];
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      result.unshift(arr[i]);
      count++;
      if (count === 3 && i !== 0) {
        result.unshift(',');
        count = 0;
      }
    }
    return result.join('');
  };

  
  const handleDecimal = (num) => num; 

  let formatted = handleInteger(intPart);
  if (decimalPart) {
    formatted += '.' + handleDecimal(decimalPart);
  }
  if (isNegative) {
    formatted = '-' + formatted;
  }

  return formatted;
};
