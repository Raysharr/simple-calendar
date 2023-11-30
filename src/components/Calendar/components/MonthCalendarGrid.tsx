import { FC, ReactNode } from 'react';

import classes from '../Calendar.module.scss';

interface MonthCalendarGridProps {
  children: ReactNode;
}

export const MonthCalendarGrid: FC<MonthCalendarGridProps> = ({ children }) => {
  return <div className={classes.calendar__monthGrid}>{children}</div>;
};
