import { FC, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import cn from 'classnames';

import classes from '../Calendar.module.scss';
import { Button } from '../../Button';

interface CalendarNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onHeaderClick?: () => void;
  children: ReactNode;
}

export const CalendarNavigation: FC<CalendarNavigationProps> = ({
  onNext,
  onPrev,
  children,
  onHeaderClick,
}) => {
  return (
    <div className={classes.calendar__navigation}>
      <Button onClick={onPrev} className={classes.calendar__navigation__button}>
        <ChevronLeft className={classes.calendar__navigation__icon} />
      </Button>

      <div
        className={cn({
          [classes.calendar__navigation__header]: true,
          [classes.calendar__navigation__header__clickable]:
            Boolean(onHeaderClick),
        })}
        {...(onHeaderClick && { onClick: onHeaderClick })}
      >
        {children}
      </div>

      <Button onClick={onNext} className={classes.calendar__navigation__button}>
        <ChevronRight className={classes.calendar__navigation__icon} />
      </Button>
    </div>
  );
};
