const filterName = (str) => {
  str = str.split('');
  str = str.filter((l) => l.match(/[a-zA-Z\s]/));
  str.map((l, i) => {
    if (l === ' ') {
      return str[i] = '-';
    }
    return null;
  });
  return str = str.join('').toLowerCase();
};

export default filterName;
