import { useState } from 'react';

import { Calendar, CalendarProps } from './Calendar';
import { RangeDate, SingleDate } from './types';

export default {
  component: Calendar,
  title: 'Calendar',
  tags: ['autodocs'],
};

const twoDaysPlusOrMinus = new Date(
  new Date().setDate(
    new Date().getDate() > 20
      ? new Date().getDate() - 2
      : new Date().getDate() + 2,
  ),
);

const dateRange = [
  new Date(new Date().setDate(14)),
  new Date(new Date().setDate(18)),
];

const renderCalendar = (props: CalendarProps<SingleDate | RangeDate>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [date, setDate] = useState<Date | [Date, Date]>(twoDaysPlusOrMinus);

  return <Calendar value={date} onChange={setDate} {...props} />;
};

export const Default = {
  render: renderCalendar,
  args: {
    displayDayGridHeader: true,
    displayDayNavigation: true,
  },
};

export const WithGridHeader = {
  render: renderCalendar,
  args: {
    displayDayGridHeader: true,
  },
};

export const WithNavigation = {
  render: renderCalendar,
  args: {
    displayDayNavigation: true,
  },
};

export const WithSetLocale = {
  render: renderCalendar,
  args: {
    locale: 'pl-PL',
    displayDayNavigation: true,
    displayDayGridHeader: true,
  },
};

export const DateRange = {
  args: {
    value: dateRange,
  },
};
