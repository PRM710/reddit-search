import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-8">
      {message}
    </div>
  );
}