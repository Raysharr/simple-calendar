import { FC, ReactNode } from 'react';
import cn from 'classnames';

import classes from '../Calendar.module.scss';

interface CalendarGridCellProps {
  onClick: (day: any) => void;
  disabled?: boolean;
  children: ReactNode;
}

export const CalendarGridCell: FC<CalendarGridCellProps> = ({ onClick, disabled, children }) => {
  return (
    <div
      className={cn({
        [classes.calendar__gridCell]: true,
        [classes.calendar__gridCell__disabled]: disabled
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
