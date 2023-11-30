export type Day = {
  date: Date;
  isCurrentMonth: boolean;
};

export type DayName = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type DaysOfWeekNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DayNameLength = 'long' | 'short' | 'narrow';

export type SingleDate = Date;

export type RangeDate = [Date, Date];

export type IsRangeValue<T> = T extends RangeDate ? true : false;

export type CalendarType = 'day' | 'month';

export type Month = {
  date: Date;
  name: string;
};
