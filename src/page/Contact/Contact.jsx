import contact from "../../assets/about/contact.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const textRef = useRef();
  const { scrollYProgress } = useScroll({ target: textRef });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cards = [
    {
      icon: <FaEnvelope className="text-5xl text-red-600" />,
      title: "Email Us",
      subtitle: "info@google.com",
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-red-600" />,
      title: "Locate Us",
      subtitle: "B 200, 1st Floor, Office No. 2nd, Sector 65, Noida - 201301",
    },
    {
      icon: <FaPhoneAlt className="text-5xl text-red-600" />,
      title: "Call Us",
      subtitle: "+91 85058 37891, +91 1204645733",
    },
  ];
  return (
    <>
      <div
        className="relative w-full h-[60vh] overflow-hidden bg-fixed bg-cover bg-center"
        loading="lazy"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <motion.div
          ref={textRef}
          style={{ y: y }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
        >
          <p className="font-Marcellus text-4xl md:text-6xl mb-8 underline underline-offset-8 font-extralight">
            Contact Us
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 ">
        <div className="mt-14 ml-16">
          <p className="text-5xl font-Marcellus font-medium">You tell us. We listen.</p>
          <hr className="mt-2 mb-4 w-122 border-t-2"/>
          <p className="text-justify font-serif mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mb-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4679444636968!2d77.37455947349697!3d28.615734231100813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d9b356b8ed%3A0x49adf36c8f202317!2sWorld%20WebLogic!5e0!3m2!1sen!2sin!4v1747035730974!5m2!1sen!2sin" width="600" height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=""></iframe>
          </div>
        </div>

        <div>
          <div className="max-w-xl mt-28 p-6 mb-6 ml-8 bg-white rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white border border-red-500 rounded-tr-2xl rounded-bl-2xl shadow-md hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out transform"
        >
          {card.icon}
          <h3 className="font-bold text-lg mt-4 font-Marcellus">{card.title}</h3>
          <p className="text-gray-600 mt-1 font-Marcellus">{card.subtitle}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Contact;
