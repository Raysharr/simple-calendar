import { getDaysOfMonth } from './getDaysOfMonth';

export const getDaysOfCurrentMonth = () => {
  return getDaysOfMonth(new Date());
};
