import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'cursor-pointer',
                    {
                        'bg-primary-600 text-white hover:bg-primary-700':
                            variant === 'primary',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200':
                            variant === 'secondary',
                        'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-600':
                            variant === 'outline',
                    },
                    {
                        'h-8 px-3 text-sm': size === 'sm',
                        'h-10 px-4 text-base': size === 'md',
                        'h-12 px-6 text-lg': size === 'lg',
                    },
                    className,
                )}
                {...props}
            />
        );
    },
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
