import React from 'react';
import { Music2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music2 className="h-8 w-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              YouTube to <span className="text-purple-600">MP3</span>
            </h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header