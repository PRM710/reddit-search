import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (subreddit: string, keyword: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [subreddit, setSubreddit] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subreddit && keyword) {
      onSearch(subreddit, keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex md:space-x-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter subreddit name"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter search keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2"
      >
        <Search size={20} />
        <span>Search</span>
      </button>
    </form>
  );
}