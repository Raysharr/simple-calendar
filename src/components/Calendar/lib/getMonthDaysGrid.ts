import { Day, DayName } from '../types';
import { getDaysFromNextMonth } from './getDaysFromNextMonth';
import { getDaysFromPreviousMonth } from './getDaysFromPreviousMonth';
import { getDaysNumberFromNextMonth } from './getDaysNumberFromNextMonth';
import { getDaysOfMonth } from './getDaysOfMonth';

export const getMonthDaysGrid = (date: Date, weekDayStart: DayName = 'Monday'): Day[] => {
  const daysFromPreviousMonth = getDaysFromPreviousMonth(date, weekDayStart);

  const daysOfMonth = getDaysOfMonth(date);

  const daysNumberOfNextMonth = getDaysNumberFromNextMonth(date, weekDayStart);

  const daysOfNextMonth = getDaysFromNextMonth(date, daysNumberOfNextMonth);

  return [...daysFromPreviousMonth, ...daysOfMonth, ...daysOfNextMonth];
};
