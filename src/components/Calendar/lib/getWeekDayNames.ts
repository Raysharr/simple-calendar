import { DayNameLength, DaysOfWeekNumber } from '../types';

export const getWeekDayNames = (
  weekDayStart: DaysOfWeekNumber = 1,
  locale: string = 'en-US',
  dayNameLength: DayNameLength = 'narrow'
) => {
  return Array.from({ length: 7 }, (_, index) => {
    const day = (weekDayStart + index) % 7;

    const date = new Date(Date.UTC(1970, 0, 4 + day));

    return new Intl.DateTimeFormat(locale, { weekday: dayNameLength }).format(date);
  });
};
