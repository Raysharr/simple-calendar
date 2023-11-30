import cn from 'classnames';
import classes from '../Calendar.module.scss';
import { isSameDay } from '../lib';
import { monthDayNumber } from '../lib/dateFormatters';
import { FC } from 'react';

interface DaySingleDateSelectionIndicatorProps {
  date: Date;
  value: Date;
}

export const DaySingleDateSelectionIndicator: FC<DaySingleDateSelectionIndicatorProps> = ({ date, value }) => {
  return (
    <div
      className={cn({
        [classes.calendar__dayGrid__selectionIndicator]: true,
        [classes['calendar__dayGrid__selectionIndicator--selected']]: isSameDay(date, value),
        [classes['calendar__dayGrid__selectionIndicator--currentDay']]: isSameDay(date, new Date())
      })}
    >
      {monthDayNumber(date)}
    </div>
  );
};
