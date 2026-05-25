import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', fullWidth, leftIcon, rightIcon, children, isLoading, disabled, ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 font-bold tracking-wide rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed";

        // Variant styles
        const variants = {
            primary: "bg-primary text-white shadow-sm hover:shadow-md hover:bg-[#0096cc]",
            secondary: "bg-secondary text-white shadow-sm hover:shadow-md hover:bg-[#bba65b]",
            outline: "border border-primary text-primary hover:bg-primary hover:text-white",
        };

        const widthStyles = fullWidth ? "w-full" : "";

        return (
            <button
                ref={ref}
                disabled={isLoading || disabled}
                className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
                {...props}
            >
                {isLoading && (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                )}
                {!isLoading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
