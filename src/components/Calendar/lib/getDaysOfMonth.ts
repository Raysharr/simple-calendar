import { Day } from '../types';
import { getStartOfMonth } from './getStartOfMonth';
import { getEndOfMonth } from './getEndOfMonth';

export const getDaysOfMonth = (date: Date): Day[] => {
  const startOfCurrentMonth = getStartOfMonth(date);

  const endOfCurrentMonth = getEndOfMonth(date);

  const daysInMonth = endOfCurrentMonth.getDate();

  return Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(startOfCurrentMonth);

    date.setDate(index + 1);

    return {
      date,
      isCurrentMonth: true
    };
  });
};
