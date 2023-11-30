export const getRelativeYear = (date: Date, relativeYear: number) => {
  const newDate = new Date(date);

  newDate.setFullYear(newDate.getFullYear() + relativeYear);

  return newDate;
};
