import React from 'react';
import { PostCard } from './PostCard';
import type { RedditPost } from '../types/reddit';

interface SearchResultsProps {
  posts: RedditPost[];
  currentSearch: { subreddit: string; keyword: string } | null;
}

export function SearchResults({ posts, currentSearch }: SearchResultsProps) {
  if (!currentSearch) return null;

  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Results for "{currentSearch.keyword}" in r/{currentSearch.subreddit}
        </h2>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No posts found matching your search criteria.
        </div>
      )}
    </>
  );
}