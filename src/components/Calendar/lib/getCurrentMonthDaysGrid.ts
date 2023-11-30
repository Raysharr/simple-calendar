import { DayName } from '../types';
import { getMonthDaysGrid } from './getMonthDaysGrid';

export const getCurrentMonthDaysGrid = (weekDayStart: DayName = 'Monday') => {
  return getMonthDaysGrid(new Date(), weekDayStart);
};
