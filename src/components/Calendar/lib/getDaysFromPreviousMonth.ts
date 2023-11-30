import { weekDayNameToNumberMap } from '../constants';
import { Day, DayName } from '../types';

export const getDaysFromPreviousMonth = (date: Date, weekDayStart: DayName = 'Monday'): Day[] => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  let startDayOfFirstWeek = startOfMonth.getDay() - weekDayNameToNumberMap[weekDayStart];

  // Prevents days overflow
  if (startDayOfFirstWeek < 0) startDayOfFirstWeek += 7;

  const daysFromPreviousMonth = Array.from({ length: startDayOfFirstWeek }, (_, index) => {
    const date = new Date(startOfMonth);

    date.setDate(date.getDate() - startDayOfFirstWeek + index);

    return {
      date,
      isCurrentMonth: false
    };
  });

  return daysFromPreviousMonth;
};
