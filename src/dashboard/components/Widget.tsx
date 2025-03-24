import React from 'react';

// 9. Define the WidgetProps type

export const Widget = ({
  title = 'Untitled',
  size = 'md',
  type = 'metric',
  data
}) => {
  const renderContent = () => {
    switch (type) {
      case 'chart':
        return <p>Chart data goes here</p>;
      case 'alert':
        return <p>Alert message here</p>;
      default: // 'metric' and any other cases fall here
        return <p>Metric value: 0</p>;
    }
  };

  return (
    <div className={`widget ${size} bg-white p-4 rounded shadow`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {renderContent()}
    </div>
  );
};