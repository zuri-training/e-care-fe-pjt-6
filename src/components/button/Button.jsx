import React from 'react';
import styles from './Button.module.css';
function Button({ children }) {
  return (
    <button
      className={`${styles.btn} bg-black text-white rounded-3xl px-8 py-2 text-lg font-medium capitalize `}
    >
      {children}
    </button>
  );
}

export default Button;
