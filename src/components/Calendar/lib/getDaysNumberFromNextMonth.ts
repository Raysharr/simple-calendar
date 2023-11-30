import { DayName } from '../types';
import { getDaysFromPreviousMonth } from './getDaysFromPreviousMonth';
import { getDaysOfMonth } from './getDaysOfMonth';

export const getDaysNumberFromNextMonth = (date: Date, weekDayStart: DayName) => {
  const totalDaysNeeded = 6 * 7; // 6 weeks * 7 days

  const previousMonthDaysNumber = getDaysFromPreviousMonth(date, weekDayStart).length;

  const currentMonthDaysNumber = getDaysOfMonth(date).length;

  const totalDaysFromPrevAndCurrentMonth = previousMonthDaysNumber + currentMonthDaysNumber;

  return totalDaysNeeded - totalDaysFromPrevAndCurrentMonth;
};
