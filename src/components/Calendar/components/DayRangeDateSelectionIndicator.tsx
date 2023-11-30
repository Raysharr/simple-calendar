import { FC } from 'react';
import cn from 'classnames';

import { RangeDate } from '../types';
import classes from '../Calendar.module.scss';
import { isDateInRange, isSameDay } from '../lib';
import { monthDayNumber } from '../lib/dateFormatters';

interface DayRangeDateSelectionIndicatorProps {
  date: Date;
  value: RangeDate;
}

export const DayRangeDateSelectionIndicator: FC<DayRangeDateSelectionIndicatorProps> = ({ date, value }) => {
  return (
    <div
      className={cn({
        [classes.calendar__dayGrid__rangeSelectionIndicator]: isDateInRange(date, [value[0], value[1]]),
        [classes.calendar__dayGrid__rangeSelectionIndicator__first]: isSameDay(date, value[0]),
        [classes.calendar__dayGrid__rangeSelectionIndicator__last]: isSameDay(date, value[1])
      })}
    >
      <div
        className={cn({
          [classes.calendar__dayGrid__selectionIndicator]: true,
          [classes['calendar__dayGrid__selectionIndicator--selected']]:
            isSameDay(date, value[0]) || isSameDay(date, value[1]),
          [classes['calendar__dayGrid__selectionIndicator--currentDay']]: isSameDay(date, new Date())
        })}
      >
        {monthDayNumber(date)}
      </div>
    </div>
  );
};
