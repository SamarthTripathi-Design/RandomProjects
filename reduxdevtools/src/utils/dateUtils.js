export const selectYear = new Date().getFullYear();
export const selectMonth = new Date().getMonth();

export const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const monthDays = (date) => {
  return new Date(date).getDay();
};
