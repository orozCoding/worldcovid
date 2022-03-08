const filterName = (str) => {
  let newStr = str.split('');
  newStr = newStr.filter((l) => l.match(/[a-zA-Z\s]/));
  newStr.map((l, i) => {
    if (l === ' ') {
      newStr[i] = '-';
      return newStr[i];
    }
    return null;
  });
  newStr = newStr.join('').toLowerCase();
  return newStr;
};

export default filterName;
