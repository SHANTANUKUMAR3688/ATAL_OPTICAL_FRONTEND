import { motion } from "framer-motion";

const services = [
  {
    title: "Contact Lenses",
    description:
      "Choose from our premium selection of contact lenses for a seamless blend of vision correction and modern aesthetics.",
    //img: payforclick,
  },
  {
    title: "Eye Exams",
    description:
      "Get accurate prescriptions and expert care with quick, hassle-free eye checkups by certified professionals.",
    //img: computer,
  },
  {
    title: "Promotions",
    description:
      "Enjoy exciting discounts on sunglasses, contact lenses, and more. Limited-time offers to upgrade your style and save big!",
    //img: mobile,
  },
  {
    title: "Brand Store",
    description:
      "Shop from leading names like Ray-Ban, Oakley, Vogue, Bausch & Lomb, and more — all in one place.",
    //img: seo,
  },
  {
    title: "Optometrists",
    description:
      "Our certified optometrists offer professional eye care, accurate prescriptions, and personalized vision solutions.",
    //img: social,
  },
  {
    title: "Insurance Claims",
    description:
      "Easily submit your vision insurance claims with our support team by your side—fast, simple, and stress-free.",
    //img: design,
  },
];

export default function Service1() {
  return (
    <div className="text-center">
      {/* Top Section */}
      <div className="">
        <h1 className="md:text-6xl text-3xl font-Marcellus ">
          What We Offers
          <div className="flex justify-center">
            <hr className="border-t-2 border-black md:w-118 w-62 mt-2 " />
          </div>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 md:px-16 ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden bg-gray-50 text-black py-18 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer border border-red-500 border-r-5 border-b-5 rounded-tr-4xl rounded-bl-4xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* red Overlay */}
            <div className="absolute inset-0 bg-red-500 scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 z-0 "></div>

            {/* Content Layer */}
            <div className="relative z-10 text-black group-hover:text-white transition-colors duration-300 px-4 py-6 justify-center items-center">
              {/* <div className="mb-4 flex justify-center items-center bg-gray-50 rounded-full w-32 h-32 mx-auto">
                <img
                  src={service.img}
                  loading="lazy"
                  className="w-20 h-20 object-contain"
                  alt={service.title}
                />
              </div> */}
              <h3 className="text-2xl font-medium mb-2 font-Marcellus">
                {service.title}
              </h3>
              <p className="text-xl p-2">{service.description}</p>
              <button className="mt-4 rounded-full font-semibold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-red-500 text-white py-2 px-4 text-xl hover:bg-white hover:text-red-500 group-hover:bg-white group-hover:text-red-500">
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}