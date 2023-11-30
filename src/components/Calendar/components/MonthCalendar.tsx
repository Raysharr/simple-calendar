import { FC } from 'react';
import { MonthCalendarGrid } from './MonthCalendarGrid';
import { CalendarGridCell } from './CalendarGridCell';
import { Month, RangeDate, SingleDate } from '../types';
import { MonthSelectionIndicator } from './MonthSelectionIndicator';
import { CalendarNavigation } from './CalendarNavigation';

interface MonthCalendarProps {
  currentMonth: Date;
  locale: string;
  onNextYear: () => void;
  onPrevYear: () => void;
  monthsGrid?: Month[];
  value?: SingleDate | RangeDate;
  isRangeValue: (value: unknown) => value is RangeDate;
  onChangeHandler: (date: Date) => void;
}

export const MonthCalendar: FC<MonthCalendarProps> = ({
  value,
  currentMonth,
  locale,
  onNextYear,
  onPrevYear,
  monthsGrid,
  isRangeValue,
  onChangeHandler
}) => {
  return (
    <>
      <CalendarNavigation onNext={onNextYear} onPrev={onPrevYear}>
        {currentMonth.toLocaleString(locale, { year: 'numeric' })}
      </CalendarNavigation>

      <MonthCalendarGrid>
        {monthsGrid?.map((month, index) => (
          <CalendarGridCell key={index} onClick={onChangeHandler.bind(null, month.date)}>
            {!isRangeValue(value) && value && (
              <MonthSelectionIndicator date={month.date} value={value}>
                {month.name}
              </MonthSelectionIndicator>
            )}
          </CalendarGridCell>
        ))}
      </MonthCalendarGrid>
    </>
  );
};
