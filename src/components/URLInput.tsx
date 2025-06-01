import React from 'react';
import { Youtube } from 'lucide-react';

interface URLInputProps {
  url: string;
  setUrl: (url: string) => void;
  error: string | null;
}

const URLInput: React.FC<URLInputProps> = ({ url, setUrl, error }) => {
  return (
    <div className="mb-6">
      <label htmlFor="youtube-url\" className="block text-sm font-medium text-gray-700 mb-1">
        YouTube Video URL
      </label>
      <div className={`relative rounded-lg border ${error ? 'border-red-300' : 'border-gray-300'} focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Youtube className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="url"
          id="youtube-url"
          className="block w-full pl-10 pr-3 py-3 border-0 bg-transparent rounded-lg focus:ring-0 focus:outline-none text-sm sm:text-base"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
      <p className="mt-2 text-xs text-gray-500">
        Paste a valid YouTube video URL to extract audio
      </p>
    </div>
  );
};

export default URLInput;