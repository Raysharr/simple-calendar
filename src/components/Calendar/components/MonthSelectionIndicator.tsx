import cn from 'classnames';
import classes from '../Calendar.module.scss';
import { isSameDay, isSameMonth } from '../lib';
import { monthDayNumber } from '../lib/dateFormatters';
import { FC, ReactNode, memo } from 'react';

interface MonthSelectionIndicatorProps {
  date: Date;
  value: Date;
  children?: ReactNode;
}

export const MonthSelectionIndicator: FC<MonthSelectionIndicatorProps> = memo(({ date, value, children }) => {
  return (
    <div
      className={cn({
        [classes.calendar__monthGrid__selectionIndicator]: true,
        [classes.calendar__monthGrid__selectionIndicator__selected]: isSameMonth(date, value)
      })}
    >
      {children}
    </div>
  );
});
