import { Day } from '../types';

export const getDaysFromNextMonth = (date: Date, daysNumber?: number): Day[] => {
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const lastDayOfLastWeek = endOfMonth.getDay();

  // If daysNumber is not provided, we want to display the whole week
  let daysCount = daysNumber ?? 6 - lastDayOfLastWeek;

  return Array.from({ length: daysCount }, (_, index) => {
    const date = new Date(endOfMonth);

    date.setDate(date.getDate() + index + 1);

    return {
      date,
      isCurrentMonth: false
    };
  });
};
