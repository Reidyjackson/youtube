import React from 'react';
import { Download, Loader2, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

type ConversionStatus = 'idle' | 'converting' | 'completed' | 'error';
type AudioFormat = 'mp3' | 'wav' | 'aac';

interface ConversionResultProps {
  status: ConversionStatus;
  format: AudioFormat;
  videoTitle: string;
  onReset: () => void;
}

const ConversionResult: React.FC<ConversionResultProps> = ({
  status,
  format,
  videoTitle,
  onReset
}) => {
  if (status === 'converting') {
    return (
      <div className="flex flex-col items-center py-8">
        <Loader2 className="h-12 w-12 text-purple-600 animate-spin mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Converting...</h3>
        <p className="text-gray-600 text-center">
          We're extracting the audio from your YouTube video.
          <br />This may take a few moments.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center py-8">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Conversion Failed</h3>
        <p className="text-gray-600 text-center mb-6">
          We encountered an error while processing your request.
          <br />Please try again with a different video.
        </p>
        <button
          onClick={onReset}
          className="flex items-center gap-2 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    );
  }

  if (status === 'completed') {
    return (
      <div className="flex flex-col items-center py-6">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Conversion Complete!</h3>
        <p className="text-gray-600 text-center mb-6 max-w-md">
          Your {format.toUpperCase()} file is ready to download
        </p>
        
        <div className="w-full bg-gray-100 p-4 rounded-lg mb-6">
          <p className="font-medium text-gray-800 truncate">{videoTitle}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">{format.toUpperCase()} • {Math.floor(Math.random() * 10) + 1}MB</span>
            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">High Quality</span>
          </div>
        </div>
        
        <div className="flex gap-4 w-full">
          <button
            onClick={onReset}
            className="flex-1 py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
          >
            Convert Another
          </button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // In a real app, this would be the actual download link
              alert('In a real application, this would download your converted file.');
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="h-5 w-5" />
            Download
          </a>
        </div>
      </div>
    );
  }

  return null;
};

export default ConversionResult;