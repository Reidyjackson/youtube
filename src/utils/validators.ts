/**
 * Validates if a string is a valid YouTube URL
 * Supports standard youtube.com URLs and youtu.be short URLs
 */
export function validateYouTubeUrl(url: string): boolean {
  if (!url) return false;
  
  // Regular expression to validate YouTube URLs
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(&.*)?$/;
  
  return youtubeRegex.test(url);
}