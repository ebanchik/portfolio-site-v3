import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Banner() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const width = window.innerWidth;
            const height = window.innerHeight;
            const xVal = clientX - width / 2;
            const yVal = clientY - height / 2;
            const yRotation = 20 * (xVal / width); // Max rotation 20 degrees based on mouse move
            const xRotation = -20 * (yVal / height); // Max rotation -20 degrees based on mouse move

            setRotation({ x: xRotation, y: yRotation });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="banner">
            <motion.img className="chrome"
                src="../public/eli-chrome.png"
                alt="Descriptive Alt Text"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 1.5 } }}
                style={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    transformOrigin: 'center'
                }}
            />
        </div>
    );
}

export default Banner;
