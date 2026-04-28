import type { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'form__button';
  const variantClasses = variant === 'secondary' ? 'form__button_secondary' : 'form__button_primary';

  return (
    <button type="button" className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;