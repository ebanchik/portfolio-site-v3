
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './About.css';

export function About() {
  // Use Framer Motion hooks to control the motion
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-50, 25]);  // These values control the range of motion, adjust as needed

  return (
    <div className="about-container">
      <div className="circle-hover">
        <motion.img
          className='linkedin-photo'
          src="public/linkedin2.png"
          alt="LinkedIn Profile"
          style={{ y }}  // Apply the motion effect to the y-axis
        />
      </div>
      <div className="about-text-container">
        <h3 className="about-text">
          Ambitious Web Designer and Developer focusing on crafting 
          engaging, dynamic, and performative web projects. Additional professional in Marketing and Graphic Design compiles a well-rounded skillset to tackle any project, simple or complex.
        </h3>
      </div>
    </div>
  );
}

export default About;
