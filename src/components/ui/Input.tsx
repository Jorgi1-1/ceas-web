import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, required, id, ...props }, ref) => {
        const defaultId = id || label.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className="w-full">
                <label htmlFor={defaultId} className="block text-sm font-semibold text-text-dark mb-2">
                    {label} {required && <span className="text-primary">*</span>}
                </label>
                <input
                    ref={ref}
                    id={defaultId}
                    required={required}
                    className={`w-full px-4 py-3 rounded-md border ${error
                            ? "border-red-500 bg-red-50/30 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary focus:border-primary bg-bg-light/50"
                        } shadow-sm transition-colors focus:outline-none focus:ring-2 ${className}`}
                    {...props}
                />
                {error && (
                    <p className="mt-2 text-sm text-red-600 font-medium animate-pulse">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
