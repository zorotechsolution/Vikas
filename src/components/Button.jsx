import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, type, onClick, to, className = '' }) => {
  const buttonType = type === 'outline' ? 'btn-outline' : 'btn-primary';
  const combinedClasses = `btn ${buttonType} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
