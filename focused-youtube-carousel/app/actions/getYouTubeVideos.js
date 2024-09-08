'use server'

export async function getYouTubeVideos(channelId) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error('API key not found');
  }

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&order=date&type=video&key=${apiKey}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }

  const data = await response.json();
  return data.items;
}