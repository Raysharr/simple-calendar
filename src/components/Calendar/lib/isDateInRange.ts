export const isDateInRange = (date: Date, dateRange: [Date, Date]) => {
  const [startDate, endDate] = dateRange;

  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return day >= start && day <= end;
};
