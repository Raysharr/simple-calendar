import { useEffect, useState } from 'react';
import { getMonthDaysGrid, getMonthsGrid, getRelativeMonth, getRelativeYear } from '../lib';
import { SingleDate, RangeDate, Day, CalendarType, Month } from '../types';
import { getWeekDayNames } from '../lib/getWeekDayNames';
import { set } from 'lodash';

type UseCalendarArgs<T> = {
  value?: T;
  onChange?: (value: T) => void;
  locale: string;
};

export const useCalendar = <T extends SingleDate | RangeDate>({ value, onChange, locale }: UseCalendarArgs<T>) => {
  const [monthDaysGrid, setMonthDaysGrid] = useState<Day[]>();

  const [monthsGrid, setMonthsGrid] = useState<Month[]>();

  const [currentMonth, setCurrentMonth] = useState<Date>(
    value ? (Array.isArray(value) ? value[0] : value) : new Date()
  );

  const [calendarType, setCalendarType] = useState<CalendarType>('day');

  useEffect(() => {
    setMonthDaysGrid(getMonthDaysGrid(currentMonth));
  }, [currentMonth]);

  useEffect(() => {
    setMonthsGrid(getMonthsGrid(locale, currentMonth));
  }, [currentMonth]);

  const goToNextMonth = () => {
    setCurrentMonth((month) => getRelativeMonth(month, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((month) => getRelativeMonth(month, -1));
  };

  const goToNextYear = () => {
    setCurrentMonth((date) => getRelativeYear(date, 1));
  };

  const goToPreviousYear = () => {
    setCurrentMonth((date) => getRelativeYear(date, -1));
  };

  const setCurrentMonthHandler = (date: Date) => {
    setCurrentMonth(date);
    setCalendarType('day');
  };

  const weekDayNames = getWeekDayNames(undefined, locale);

  const onChangeHandler = (date: Date) => {
    onChange?.(date as T);
  };

  const isRangeValue = (value: unknown): value is RangeDate => {
    return Array.isArray(value);
  };

  const setCalendarTypeHandler = (type: CalendarType) => {
    setCalendarType(type);
  };

  return {
    monthDaysGrid,
    weekDayNames,
    onChangeHandler,
    isRangeValue,
    goToNextMonth,
    goToPreviousMonth,
    currentMonth,
    calendarType,
    setCalendarTypeHandler,
    goToNextYear,
    goToPreviousYear,
    monthsGrid,
    setCurrentMonthHandler
  };
};
