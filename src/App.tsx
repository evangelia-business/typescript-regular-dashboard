import React from 'react';
import { DashboardComponent as Dashboard} from './dashboard/Dashboard';

// This will render but show TypeScript errors everywhere components are used
export function App() {
  return (
    <div className="app p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard Exercise</h1>
      <Dashboard />
    </div>
  );
};