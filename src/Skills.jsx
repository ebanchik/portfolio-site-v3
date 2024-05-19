// import { useState } from 'react';
import './Skills.css';

// Example images, replace these URLs with your actual image sources
const imageData = [
  { src: '../public/react.png', alt: 'Description of image 3' },
  { src: '../public/ts-logo.png', alt: 'Description of image 4' },
  { src: '../public/Python-logo.png', alt: 'Description of image 4' },
  { src: '../public/js-logo.png', alt: 'Description of image 1' },
  { src: '../public/sql-logo.png', alt: 'Description of image 4' },
  { src: '../public/html-css-logo.png', alt: 'Description of image 2' },
  { src: '../public/rails-logo.png', alt: 'Description of image 4' },
  { src: '../public/vue.png', alt: 'Description of image 4' },
  { src: '../public/flask-logo2.png', alt: 'Description of image 4' },
  { src: '../public/ruby-logo.png', alt: 'Description of image 4' },
  { src: '../public/postgres-logo.png', alt: 'Description of image 4' },
  { src: '../public/figma.png', alt: 'Description of image 4' },
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
