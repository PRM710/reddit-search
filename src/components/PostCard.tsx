import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, ArrowUpRight, ThumbsUp } from 'lucide-react';
import type { RedditPost } from '../types/reddit';

interface PostCardProps {
  post: RedditPost;
}

export function PostCard({ post }: PostCardProps) {
  const timeAgo = formatDistanceToNow(new Date(post.created_utc * 1000), { addSuffix: true });

  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-semibold text-gray-900 flex-1">
          {post.title}
        </h2>
        <a
          href={`https://reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-gray-500 hover:text-blue-600"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      
      <div className="mt-2 text-gray-600">
        {post.selftext && (
          <p className="line-clamp-3">{post.selftext}</p>
        )}
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
        <span>Posted by u/{post.author}</span>
        <span>{timeAgo}</span>
        
        <div className="flex items-center space-x-1">
          <ThumbsUp size={16} />
          <span>{post.score}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <MessageSquare size={16} />
          <span>{post.num_comments} comments</span>
        </div>
      </div>
    </article>
  );
}