export const getEndOfMonth = (date: Date): Date => {
  const newDate = new Date(date);

  newDate.setMonth(newDate.getMonth() + 1);

  newDate.setDate(0);

  return newDate;
};
