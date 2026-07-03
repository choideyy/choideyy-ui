import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export const Button = ({
  children,
  variant = 'outline',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
