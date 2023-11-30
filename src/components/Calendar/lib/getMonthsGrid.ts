export const getMonthsGrid = (locale: string, date: Date) => {
  return Array.from({ length: 12 }, (_, monthNumber) => {
    const firstOfMonthDate = new Date(Date.UTC(date.getFullYear(), monthNumber, 1));

    return {
      date: firstOfMonthDate,
      name: new Intl.DateTimeFormat(locale, { month: 'short' }).format(firstOfMonthDate)
    };
  });
};
