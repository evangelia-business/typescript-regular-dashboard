import React, { useState } from 'react';
import { AlertComponent } from './components/Alert';
import { ChartComponent } from './components/Chart';
import { Widget, WidgetUpdate } from '../types';

export const Dashboard = () => {
  // 10. Fix the state type (should be Widget[])
  const [widgets, setWidgets] = useState([]);

  // 11. Add proper type for newWidget state
  const [newWidget, setNewWidget] = useState({});

  // 12. Fix the event handler type
  const handleAddWidget = () => {
    setWidgets([...widgets, {
      id: Date.now(),
      ...newWidget,
      createdAt: new Date()
    }]);
  };

  // 13. Implement this using WidgetUpdate type
  const updateWidget = (update) => {
    setWidgets(widgets.map(w =>
      w.id === update.id ? { ...w, ...update } : w
    ));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-4">
        <input
          name="title"
          placeholder="Widget title"
          onChange={(e) => setNewWidget({ ...newWidget, title: e.target.value })}
          className="mr-2 p-2 border rounded"
        />
        <button onClick={handleAddWidget} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Widget
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {widgets.map((widget) => {
          switch (widget.type) {
            case 'alert':
              return <AlertComponent
                key={widget.id}
                alert={widget.data}
                onDismiss={() => updateWidget({
                  id: widget.id,
                  title: '[Dismissed]',
                  lastUpdated: new Date() // 14. Fix this shape
                })}
              />;
            case 'chart':
              return <ChartComponent
                key={widget.id}
                title={widget.title}
                data={widget.data}
              />;
            default:
              return <div key={widget.id}>{widget.title}</div>;
          }
        })}
      </div>
    </div>
  );
};