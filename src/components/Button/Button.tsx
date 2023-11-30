import { FC, ReactNode } from 'react';

import classes from './Button.module.scss';

import cn from 'classnames';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={cn(classes.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
