import React from 'react';
import { Waves } from 'lucide-react';

type AudioQuality = '128' | '192' | '320';

interface QualitySelectorProps {
  quality: AudioQuality;
  setQuality: (quality: AudioQuality) => void;
}

const QualitySelector: React.FC<QualitySelectorProps> = ({ quality, setQuality }) => {
  const qualities: { value: AudioQuality; label: string; description: string }[] = [
    {
      value: '128',
      label: '128 kbps',
      description: 'Good quality, smaller size'
    },
    {
      value: '192',
      label: '192 kbps',
      description: 'Better quality, medium size'
    },
    {
      value: '320',
      label: '320 kbps',
      description: 'Best quality, larger size'
    }
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Audio Quality
      </label>
      <div className="grid grid-cols-3 gap-3">
        {qualities.map((q) => (
          <button
            key={q.value}
            onClick={() => setQuality(q.value)}
            className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
              quality === q.value
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Waves className={`h-6 w-6 ${
              quality === q.value ? 'text-purple-600' : 'text-gray-400'
            }`} />
            <span className="font-medium mt-1">{q.label}</span>
            <span className="text-xs mt-1 text-gray-500">{q.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QualitySelector