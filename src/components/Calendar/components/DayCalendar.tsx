import { FC } from 'react';
import { DayCalendarGrid } from './DayCalendarGrid';
import { DayCalendarGridHeaderCell } from './DayCalendarGridHeaderCell';
import { CalendarType, Day, RangeDate, SingleDate } from '../types';
import { CalendarGridCell } from './CalendarGridCell';
import { DaySingleDateSelectionIndicator } from './DaySingleDateSelectionIndicator';
import { DayRangeDateSelectionIndicator } from './DayRangeDateSelectionIndicator';
import { CalendarNavigation } from './CalendarNavigation';
import { ChevronRight } from '@material-ui/icons';
import cn from 'classnames';

import classes from '../Calendar.module.scss';

interface DayCalendarProps {
  displayDayNavigation?: boolean;
  displayDayGridHeader?: boolean;
  className?: string;
  currentMonth: Date;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  locale: string;
  weekDayNames: string[];
  monthDaysGrid: Day[] | undefined;
  isRangeValue: (value: unknown) => value is RangeDate;
  onChangeHandler: (date: Date) => void;
  value?: SingleDate | RangeDate;
  onMonthSelectClick: (type: CalendarType) => void;
}

export const DayCalendar: FC<DayCalendarProps> = ({
  displayDayNavigation,
  displayDayGridHeader,
  className,
  currentMonth,
  locale,
  onNextMonth,
  onPrevMonth,
  weekDayNames,
  monthDaysGrid,
  isRangeValue,
  onChangeHandler,
  value,
  onMonthSelectClick,
}) => {
  return (
    <>
      {displayDayNavigation && (
        <CalendarNavigation
          onNext={onNextMonth}
          onPrev={onPrevMonth}
          onHeaderClick={() => onMonthSelectClick('month')}
        >
          {currentMonth.toLocaleString(locale, {
            month: 'long',
            year: 'numeric',
          })}
          <ChevronRight
            className={cn(
              classes.calendar__navigation__icon,
              classes.calendar__navigation__icon__down,
            )}
          />
        </CalendarNavigation>
      )}

      <DayCalendarGrid className={className}>
        {displayDayGridHeader &&
          weekDayNames.map((weekDayName, index) => (
            <DayCalendarGridHeaderCell key={index}>
              {weekDayName}
            </DayCalendarGridHeaderCell>
          ))}

        {monthDaysGrid?.map((day, index) => (
          <CalendarGridCell
            key={index}
            onClick={onChangeHandler.bind(null, day.date)}
            disabled={!day.isCurrentMonth}
          >
            {value && !isRangeValue(value) && (
              <DaySingleDateSelectionIndicator date={day.date} value={value} />
            )}

            {isRangeValue(value) && (
              <DayRangeDateSelectionIndicator date={day.date} value={value} />
            )}
          </CalendarGridCell>
        ))}
      </DayCalendarGrid>
    </>
  );
};
