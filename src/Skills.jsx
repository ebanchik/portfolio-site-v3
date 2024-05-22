// import { useState } from 'react';
import './Skills.css';

// Example images, replace these URLs with your actual image sources
const imageData = [
  { src: '/react.png', alt: 'Description of image 3' },
  { src: '/ts-logo.png', alt: 'Description of image 4' },
  { src: '/Python-logo.png', alt: 'Description of image 4' },
  { src: '/js-logo.png', alt: 'Description of image 1' },
  { src: '/sql-logo.png', alt: 'Description of image 4' },
  { src: '/html-css-logo.png', alt: 'Description of image 2' },
  { src: '/rails-logo.png', alt: 'Description of image 4' },
  { src: '/vue.png', alt: 'Description of image 4' },
  { src: '/flask-logo2.png', alt: 'Description of image 4' },
  { src: '/ruby-logo.png', alt: 'Description of image 4' },
  { src: '/postgres-logo.png', alt: 'Description of image 4' },
  { src: '/figma.png', alt: 'Description of image 4' },
  // Add more images as needed
];

export function Skills() {
  return (
    <div className='Skills'>
      <h1>Skills</h1>
    <div className="grid-container">
      {imageData.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>  
    </div>
  );
}

export default Skills;
