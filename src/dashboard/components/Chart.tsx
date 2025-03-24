import React from 'react';

// 6. Define proper props type (title: string, data: ChartData[], type?: 'bar'|'line'|'pie')
export const ChartComponent = ({ title, data, type = 'bar' }) => {
  // 7. Add type guard to validate data
  const isValidData = data.every(item => 'x' in item && 'y' in item);

  // 8. Fix the click handler type
  const handleClick = (item) => {
    console.log('Selected:', item.x, item.y);
  };

  if (!isValidData) return <div>Invalid data</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="h-40 flex items-end gap-1">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="bg-blue-500 hover:bg-blue-700 transition-all w-8"
            style={{ height: `${item.y}%` }}
          />
        ))}
      </div>
    </div>
  );
};