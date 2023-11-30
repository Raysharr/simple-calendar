import { FC, ReactNode } from 'react';
import cn from 'classnames';

import classes from '../Calendar.module.scss';

interface DayCalendarGridProps {
  children: ReactNode;
  className?: string;
}

export const DayCalendarGrid: FC<DayCalendarGridProps> = ({ children, className }) => {
  return <div className={cn(className, classes.calendar__dayGrid)}>{children}</div>;
};
