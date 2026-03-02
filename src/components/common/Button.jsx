import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
    secondary: "border-transparent text-primary-900 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500",
    outline: "border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-primary-500",
    white: "border-transparent text-primary-700 bg-white hover:bg-gray-50 focus:ring-white",
    ghost: "border-transparent text-slate-600 hover:text-primary-600 hover:bg-primary-50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
