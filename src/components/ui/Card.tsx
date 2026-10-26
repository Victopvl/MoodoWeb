import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    {children}
  </div>
);