import { RangeDate, SingleDate } from './types';
import { useCalendar } from './hooks';
import { DayCalendar, MonthCalendar } from './components';

import classes from './Calendar.module.scss';

export type CalendarProps<T> = {
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
  displayDayGridHeader?: boolean;
  displayDayNavigation?: boolean;
  locale?: string;
};

export const Calendar = <T extends SingleDate | RangeDate>({
  value,
  onChange,
  className,
  displayDayGridHeader,
  displayDayNavigation,
  locale = 'en-US',
}: CalendarProps<T>) => {
  const {
    monthDaysGrid,
    weekDayNames,
    onChangeHandler,
    isRangeValue,
    currentMonth,
    goToNextMonth,
    goToPreviousMonth,
    calendarType,
    setCalendarTypeHandler,
    goToNextYear,
    goToPreviousYear,
    monthsGrid,
    setCurrentMonthHandler,
  } = useCalendar({ value, onChange, locale });

  return (
    <div className={classes.calendar}>
      {calendarType === 'day' && (
        <DayCalendar
          currentMonth={currentMonth}
          isRangeValue={isRangeValue}
          locale={locale}
          monthDaysGrid={monthDaysGrid}
          onChangeHandler={onChangeHandler}
          onNextMonth={goToNextMonth}
          onPrevMonth={goToPreviousMonth}
          weekDayNames={weekDayNames}
          displayDayGridHeader={displayDayGridHeader}
          className={className}
          displayDayNavigation={displayDayNavigation}
          value={value}
          onMonthSelectClick={setCalendarTypeHandler}
        />
      )}

      {calendarType === 'month' && (
        <MonthCalendar
          currentMonth={currentMonth}
          locale={locale}
          onNextYear={goToNextYear}
          onPrevYear={goToPreviousYear}
          monthsGrid={monthsGrid}
          isRangeValue={isRangeValue}
          value={value}
          onChangeHandler={(date) => {
            setCurrentMonthHandler(date);
          }}
        />
      )}
    </div>
  );
};
