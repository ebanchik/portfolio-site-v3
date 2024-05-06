import { useState, useEffect } from 'react';
import './ProgressBar.css';  // Assume you create some basic styling for the bar

const ScrollProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        setProgress(progressHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="progress-container" style={{ width: `${progress}%`, height: '5px', backgroundColor: 'blue', position: 'fixed', top: 0, left: 0, zIndex: 100 }} />
    );
};

export default ScrollProgressBar;
