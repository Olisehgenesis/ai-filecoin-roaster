import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Share2, ThumbsUp } from 'lucide-react';

export const ImageGallery = ({ images }) => {
  if (!images?.length) {
    return (
      <div className="text-center p-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Upload an image to start roasting! 🔥</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {images.map((image, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium truncate">{image.name}</CardTitle>
              <Badge variant="secondary" className="text-xs">
                <Clock className="w-3 h-3 mr-1 inline" />
                {new Date(image.timestamp).toLocaleDateString()}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="relative group">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-56 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-md" />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="prose prose-sm" 
                   dangerouslySetInnerHTML={{ __html: image.analysis }} />
            </div>
          </CardContent>
          
          <CardFooter className="justify-between">
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {index === 0 ? 'Latest Roast 🔥' : `Roast #${images.length - index}`}
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ImageGallery;