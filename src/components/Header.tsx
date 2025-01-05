import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <MessageCircle size={40} className="text-orange-500" />
        <h1 className="text-4xl font-bold text-gray-900">Reddit Search</h1>
      </div>
      <p className="text-gray-600">Search for posts in any subreddit with specific keywords</p>
    </div>
  );
}