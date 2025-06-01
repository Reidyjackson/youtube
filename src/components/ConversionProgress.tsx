import React from 'react';
import { Download, Loader2, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

type ConversionStatus = 'fetching' | 'converting' | 'completed' | 'error';
type AudioQuality = '128' | '192' | '320';

interface ConversionProgressProps {
  status: ConversionStatus;
  progress: number;
  quality: AudioQuality;
  videoTitle: string;
  onReset: () => void;
}

const ConversionProgress: React.FC<ConversionProgressProps> = ({
  status,
  progress,
  quality,
  videoTitle,
  onReset
}) => {
  const getStatusMessage = () => {
    switch (status) {
      case 'fetching':
        return 'Fetching video information...';
      case 'converting':
        return 'Converting to MP3...';
      case 'completed':
        return 'Conversion Complete!';
      case 'error':
        return 'Conversion Failed';
      default:
        return '';
    }
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-center mb-6">
        {status === 'fetching' || status === 'converting' ? (
          <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
        ) : status === 'completed' ? (
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        ) : (
          <AlertCircle className="h-12 w-12 text-red-500" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-center mb-4">
        {getStatusMessage()}
      </h3>

      {(status === 'converting' || status === 'completed') && (
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{progress}% Complete</span>
            <span>{quality}kbps MP3</span>
          </div>
        </div>
      )}

      {status === 'completed' && (
        <>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium text-gray-800">{videoTitle}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">
                MP3 • {quality}kbps • ~{Math.floor(Math.random() * 10) + 1}MB
              </span>
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                High Quality
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onReset}
              className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
            >
              Convert Another
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // In a real app, this would be the actual download link
                alert('In a real application, this would download your converted MP3 file.');
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              <Download className="h-5 w-5" />
              Download MP3
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ConversionProgress