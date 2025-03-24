import React from 'react';

// 2. Fix the props type (should use Alert from types.ts)
export const AlertComponent = ({ alert, onDismiss }) => {
  // 3. Implement proper type narrowing
  const alertStyles = {
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700'
  };

  // 4. Fix the event handler type
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss(alert.id); // 5. Why is this error happening?
    }
  };

  return (
    <div className={`${alertStyles[alert.type]} border px-4 py-3 rounded relative`}>
      {alert.message}
      {onDismiss && (
        <button onClick={handleDismiss} className="absolute top-0 right-0 px-4 py-3">
          ×
        </button>
      )}
    </div>
  );
};