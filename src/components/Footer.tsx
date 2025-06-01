import React from 'react';
import { HelpCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              Our YouTube to MP3 converter provides high-quality audio extraction for personal use.
              We support various quality options up to 320kbps for the best audio experience.
            </p>
          </div>
          
          <div id="faq">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  What quality should I choose?
                  <span className="block text-gray-500">
                    320kbps offers the best audio quality but larger file size
                  </span>
                </p>
              </li>
              <li className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  How long does conversion take?
                  <span className="block text-gray-500">
                    Usually just a few minutes, depending on video length
                  </span>
                </p>
              </li>
            </ul>
          </div>
          
          <div id="support">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <div className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:support@example.com" className="text-sm">
                support@example.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} YouTube MP3 Converter
            <span className="block text-xs mt-1">
              This application is for demonstration purposes only
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer