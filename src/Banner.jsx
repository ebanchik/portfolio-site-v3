import { useState, useEffect } from 'react';


export function Banner() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xVal = clientX - width / 2;
      const yVal = clientY - height / 2;
      const yRotation = 20 * (xVal / width); // 20 degrees max rotation on mouse move
      const xRotation = -20 * (yVal / height); // 20 degrees max rotation on mouse move

      setRotation({ x: xRotation, y: yRotation });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="banner">
      <img className="chrome"
           src="../public/eli-chrome.png"
           style={{ transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)` }}
           alt="Descriptive Alt Text"/>
    </div>
  )
}

export default Banner;
