import { FC, ReactNode } from 'react';

import classes from './Card.module.scss';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
