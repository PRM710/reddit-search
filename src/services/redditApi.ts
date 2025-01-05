const BASE_URL = 'https://www.reddit.com';

export async function searchSubreddit(subreddit: string, keyword: string): Promise<RedditPost[]> {
  const url = `${BASE_URL}/r/${subreddit}/search.json?q=${encodeURIComponent(keyword)}&restrict_sr=1&sort=new&limit=25`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data from Reddit');
    }
    
    const data: RedditResponse = await response.json();
    return data.data.children.map(child => child.data);
  } catch (error) {
    console.error('Error fetching Reddit data:', error);
    throw error;
  }
}