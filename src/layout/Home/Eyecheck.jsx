import eyecheck from "../../assets/category/eyecheck.jpeg";
import eyecheck2 from "../../assets/category/eyecheck2.png";
import CountUp from 'react-countup';
import { FiArrowRight } from 'react-icons/fi';

const Eyecheck = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-14 py-12 bg-white gap-x-30">
      {/* Left Text Section */}
      <div className="mb-8 md:mb-0 md:ml-10 md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
           Eye Check Details
        </h2>
        <hr className="w-52 mb-8 border-black"></hr>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At the Atal Optical, we offer a wide range of advanced treatments
          to address the root causes of dry eye and restore lasting comfort. Our
          personalized approach begins with a thorough evaluation to determine
          the best course of action for each patient. Whether you're dealing
          with mild irritation or more complex symptoms, our expert team is
          equipped with the latest technologies and treatment options to help
          you find relief. Explore our specialized services below and discover
          how we can create a customized treatment plan tailored to your unique
          needs.
        </p>
        <button className="flex items-center gap-4 text-white font-medium bg-red-600 px-4 py-2 rounded mr-22 hover:bg-black transition-colors duration-300 hover:cursor-pointer">
          Learn More
          <span className="bg-white text-black p-1 rounded-full">
            <FiArrowRight size={18} className="hover:rotate-[-45deg] transition duration-250 ease-in-out text-black" />
          </span>
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:grid grid-cols-2 md:gap-4 gap-2 my-10 md:w-1/2 md:mr-12 ">

        {/* Top Left: Image 1 */}
        <div className="overflow-hidden shadow-md h-[270px] hover:scale-105 transition-all duration-300 rounded-lg">
          <img src={eyecheck} alt="Student Reading" className="w-full h-full object-fill" loading="lazy" decoding="async" />
        </div>

        {/* Top Right: Stat 1 */}
        <div className="hover:scale-105 transition-all duration-300 rounded-lg">
          <div className="bg-gradient-to-br from-red-600 via-black to-red-600  text-white flex flex-col justify-center items-center rounded-xl shadow-xl p-8 mt-6 shadow-white">
            <h2 className="text-6xl font-bold hover:scale-120 hover:cursor-pointer"><CountUp end={1} duration={3} />K+</h2>
            <p className="mt-20 text-xl">Qualified Instructor</p>
          </div>
        </div>

        {/* Bottom Left: Stat 2 */}
        <div className="hover:scale-105 transition-all duration-300 rounded-lg">
          <div className="bg-gradient-to-br from-red-600 via-black to-red-600  text-white flex flex-col justify-center items-center rounded-xl shadow-md p-8 mt-6">
            <h2 className="text-6xl font-bold hover:scale-120 hover:cursor-pointer"><CountUp end={9} duration={3} />K+</h2>
            <p className="mt-20 text-xl">Active Student</p>
          </div>
        </div>

        {/* Bottom Right: Image 2 */}
        <div className="overflow-hidden shadow-md h-[270px] hover:scale-105 transition-all duration-300 rounded-lg md:mt-0 mt-6">
          <img src={eyecheck2} alt="Group Learning" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
};

export default Eyecheck

