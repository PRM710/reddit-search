import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { Header } from './components/Header';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { searchSubreddit } from './services/redditApi';
import type { RedditPost } from './types/reddit';

function App() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSearch, setCurrentSearch] = useState<{ subreddit: string; keyword: string } | null>(null);

  const handleSearch = async (subreddit: string, keyword: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchSubreddit(subreddit, keyword);
      setPosts(results);
      setCurrentSearch({ subreddit, keyword });
    } catch (err) {
      setError('Failed to fetch posts. Please try again.');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header />
        
        <div className="mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && (
          <SearchResults 
            posts={posts} 
            currentSearch={currentSearch} 
          />
        )}
      </div>
    </div>
  );
}

export default App;