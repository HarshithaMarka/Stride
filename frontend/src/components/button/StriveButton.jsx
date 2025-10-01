import React from 'react';

/**
 * A custom button component styled purely with Tailwind CSS.
 * @param {object} props - Standard Button props (variant, color, onClick, children, etc.)
 */
const StriveButton = ({ 
    children, 
    variant = 'contained', 
    color = 'primary', 
    size = 'medium',
    className = '',
    ...props 
}) => {
    
    // Base classes applied to all buttons
    let baseClasses = `
        font-medium rounded-lg transition duration-300 ease-in-out 
        focus:outline-none focus:ring-4 
        transform hover:scale-[1.02]
    `;

    // Size classes
    let sizeClasses = {
        'small': 'py-1 px-3 text-sm',
        'medium': 'py-2 px-4',
        'large': 'py-3 px-6 text-lg',
    }[size];

    // Variant and Color classes (Mapped to Tailwind color utilities)
    let variantClasses;
    if (variant === 'contained') {
        if (color === 'primary') {
            // Indigo theme: Primary color is #4f46e5 (Indigo-600)
            variantClasses = 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:ring-indigo-500/50';
        } else if (color === 'secondary') {
            // Emerald theme: Secondary color is #10b981 (Emerald-500/600)
            variantClasses = 'bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 focus:ring-emerald-500/50';
        }
    } else if (variant === 'outlined') {
        if (color === 'primary') {
            variantClasses = 'border border-indigo-500 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500/50';
        }
    } else if (variant === 'text') {
        if (color === 'primary') {
            variantClasses = 'text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500/20';
        }
    }

    const finalClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

    return (
        <button
            className={finalClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default StriveButton;