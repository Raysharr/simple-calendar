export const getRelativeMonth = (date: Date, relativeMonth: number) => {
  const newDate = new Date(date);

  newDate.setMonth(newDate.getMonth() + relativeMonth);

  return newDate;
};
