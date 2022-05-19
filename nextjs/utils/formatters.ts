export const formatError = (error: any):string => {
  if(typeof error === 'string') return error;
  else if (!error) {}
  else if (typeof error.response?.data?.error === 'string') return error.response?.data?.error;
  else if (Array.isArray(error.response?.data?.error)) return error.response?.data?.error.map(formatError).join("\n ");
  else if (error.response?.status && error.response?.statusText) return `[${error.response?.status}] ${error.response?.statusText}`;
  else if (error.response?.status) return `Error ${error.response?.status}`;
  
  console.info('Unknown error', error)
  return "Error";
}

export const formatMoney = (amount: any, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    
    const negativeSign = amount < 0 ? "-" : "";
    
    let i:any = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;
    
    return negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
  
  return amount;
}
export const capitalizeFirstLetter = (string: string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
