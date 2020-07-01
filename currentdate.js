const formatDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

console.log(formatDate());
