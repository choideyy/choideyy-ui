import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export const Button = ({
  children,
  variant = 'outline',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
