export interface RedditPost {
  id: string;
  title: string;
  author: string;
  created_utc: number;
  url: string;
  permalink: string;
  selftext: string;
  score: number;
  num_comments: number;
  subreddit: string;
}

export interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}