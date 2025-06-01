import React from 'react';
import { FileAudio, FileCode, FileMusic } from 'lucide-react';

type AudioFormat = 'mp3' | 'wav' | 'aac';

interface FormatOption {
  value: AudioFormat;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface FormatSelectorProps {
  selectedFormat: AudioFormat;
  onFormatChange: (format: AudioFormat) => void;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({ 
  selectedFormat, 
  onFormatChange 
}) => {
  
  const formats: FormatOption[] = [
    {
      value: 'mp3',
      label: 'MP3',
      icon: <FileMusic className="h-6 w-6" />,
      description: 'Small size, good quality'
    },
    {
      value: 'wav',
      label: 'WAV',
      icon: <FileAudio className="h-6 w-6" />,
      description: 'Lossless, large size'
    },
    {
      value: 'aac',
      label: 'AAC',
      icon: <FileCode className="h-6 w-6" />,
      description: 'High quality, medium size'
    }
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Output Format
      </label>
      <div className="grid grid-cols-3 gap-2">
        {formats.map((format) => (
          <button
            key={format.value}
            type="button"
            onClick={() => onFormatChange(format.value)}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
              selectedFormat === format.value
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className={`${selectedFormat === format.value ? 'text-purple-600' : 'text-gray-500'}`}>
              {format.icon}
            </div>
            <span className="font-medium mt-1">{format.label}</span>
            <span className="text-xs mt-1 text-gray-500">{format.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormatSelector;