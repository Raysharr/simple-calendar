import cn from 'classnames';

import classes from '../Calendar.module.scss';
import { FC, ReactNode } from 'react';

interface DayCalendarGridHeaderCellProps {
  children: ReactNode;
}

export const DayCalendarGridHeaderCell: FC<DayCalendarGridHeaderCellProps> = ({ children }) => {
  return <div className={cn(classes.calendar__gridCell, classes.calendar__gridCell__disabled)}>{children}</div>;
};
