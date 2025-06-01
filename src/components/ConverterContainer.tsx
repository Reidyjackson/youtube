import React, { useState } from 'react';
import URLInput from './URLInput';
import QualitySelector from './QualitySelector';
import ConversionProgress from './ConversionProgress';
import { validateYouTubeUrl } from '../utils/validators';
import toast from 'react-hot-toast';

type ConversionStatus = 'idle' | 'fetching' | 'converting' | 'completed' | 'error';
type AudioQuality = '128' | '192' | '320';

const ConverterContainer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [quality, setQuality] = useState<AudioQuality>('320');
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [videoTitle, setVideoTitle] = useState('');

  const handleConvert = async () => {
    if (!validateYouTubeUrl(url)) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }

    setStatus('fetching');
    setProgress(0);

    try {
      // Simulate video info fetching
      await new Promise(resolve => setTimeout(resolve, 1500));
      setVideoTitle('Sample YouTube Video - Audio Track');
      setStatus('converting');

      // Simulate conversion progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(i);
      }

      setStatus('completed');
      toast.success('Conversion completed successfully!');
    } catch (error) {
      setStatus('error');
      toast.error('An error occurred during conversion');
    }
  };

  const handleReset = () => {
    setUrl('');
    setStatus('idle');
    setProgress(0);
    setVideoTitle('');
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Convert YouTube Videos to High-Quality MP3
        </h2>
        
        {status === 'idle' && (
          <>
            <URLInput url={url} setUrl={setUrl} />
            <QualitySelector quality={quality} setQuality={setQuality} />
            <button
              onClick={handleConvert}
              disabled={!url.trim()}
              className={`w-full py-3 px-4 mt-6 rounded-lg font-medium transition-all ${
                url.trim() 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Convert to MP3
            </button>
          </>
        )}

        {(status === 'fetching' || status === 'converting' || status === 'completed') && (
          <ConversionProgress
            status={status}
            progress={progress}
            quality={quality}
            videoTitle={videoTitle}
            onReset={handleReset}
          />
        )}
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 text-center">
          High-quality MP3 converter - {quality}kbps bitrate
        </p>
      </div>
    </div>
  );
};

export default ConverterContainer