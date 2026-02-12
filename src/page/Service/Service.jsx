import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Service1 from './Service1';
import service from "../../assets/service/eye-exams.jpg";

function Service() {
  const textRef = useRef();
  const { scrollYProgress } = useScroll({ target: textRef });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  return (
    <>
    <div>
      <div
        className="relative w-full h-[60vh] overflow-hidden bg-fixed bg-cover bg-center"
        loading="lazy"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <motion.div
          ref={textRef}
          style={{ y: y }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
        >
          <p className="font-Marcellus text-4xl md:text-6xl mb-8 underline underline-offset-8 font-extralight">
            Services
          </p>
        </motion.div>
      </div>
      <div className='mt-10 mb-10'></div>
      <Service1/>
    </div>
    </>
  )
}

export default Service
