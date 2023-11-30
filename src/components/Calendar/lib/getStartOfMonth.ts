export const getStartOfMonth = (date: Date): Date => {
  const newDate = new Date(date);

  newDate.setDate(1);

  return newDate;
};
