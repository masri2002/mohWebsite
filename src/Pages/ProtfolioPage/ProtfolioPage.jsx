import React from 'react';
import { Prot } from '../../Component2/ProtofolioPage/Prot';
import { Navbar } from '../../component/Navbar/Navbar';
import { ImageFltier } from '../../Component2/Imagefliter/ImageFltier';

import image1 from './images/12.jpg'; // Import images with correct paths
import image2 from './images/13.jpg';
// Import additional images as needed

export const ProtfolioPage = () => {
  const imageData = [
    { id: 1, url: image1, alt: 'Image 1', category: 'category1' },
    { id: 2, url: image2, alt: 'Image 2', category: 'category2' },
    { id: 3, url: image1, alt: 'Image 3', category: 'category1' },
    { id: 4, url: image1, alt: 'Image 4', category: 'category1' },
    { id: 6, url: image1, alt: 'Image 5', category: 'category1' },
    { id: 7, url: image1, alt: 'Image 5', category: 'category1' },
    { id: 8, url: image1, alt: 'Image 5', category: 'category1' },
    { id: 9, url: image1, alt: 'Image 5', category: 'category1' },
    { id: 10, url: image2, alt: 'Image 2', category: 'category2' },
    { id: 11, url: image2, alt: 'Image 2', category: 'category2' },
    { id: 12, url: image2, alt: 'Image 2', category: 'category2' },
    // Add more image data as needed
  ];

  return (
    <div>
      <Navbar />
      <Prot />
      <hr />
      <br />
      <h1>Images </h1>
      <ImageFltier imageData={imageData} /> {/* Pass imageData as a prop */}
    </div>
  );
};
