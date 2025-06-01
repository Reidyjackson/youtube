import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-amber-800 mb-1">Legal Disclaimer</h3>
          <p className="text-sm text-amber-700">
            This service is intended for personal use only. By using this converter, you agree to not violate any copyright laws or YouTube's terms of service. Please ensure you have the right to download and convert the content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer