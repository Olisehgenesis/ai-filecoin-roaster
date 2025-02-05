import React, { useState, useEffect } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageGallery } from './components/ImageGallery';
import { uploadImage, getAnalysis } from './services/api';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Flame, Github, Twitter } from 'lucide-react';

const STORAGE_KEY = 'filecoin-roaster-images';

export default function App() {
  const [images, setImages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ... existing code ...

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-xl">FileCoin AI Roaster</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/illmindofbanana" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" 
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Roast Your Images with AI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Upload any image and let our AI create hilarious, sarcastic memes powered by FileCoin & IPFS
          </p>
          <div className="mt-2 text-sm text-gray-500">
            Designed by Oliseh Genesis
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ImageUploader onUpload={handleUpload} isLoading={isLoading} />
        </div>

        {error && (
          <Alert variant="destructive" className="mt-4 max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {images.length > 0 && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleClearGallery}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-800 border border-red-200 rounded-full hover:bg-red-50 transition-colors"
            >
              Clear Gallery
            </button>
          </div>
        )}

        <ImageGallery images={images} />
      </main>

      <footer className="border-t bg-white/80 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Built with 💙 using FileCoin, IPFS & OpenAI
        </div>
      </footer>
    </div>
  );
}