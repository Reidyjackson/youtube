import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import ConverterContainer from './components/ConverterContainer';
import Footer from './components/Footer';
import LegalDisclaimer from './components/LegalDisclaimer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <Toaster position="top-center" />
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <ConverterContainer />
        <LegalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;