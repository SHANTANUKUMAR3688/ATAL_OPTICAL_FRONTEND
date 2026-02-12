import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import about1 from "../../assets/about/about-1.webp";
import about2 from "../../assets/about/about-2.webp";
import about3 from "../../assets/about/about-3.jpeg";
import about from "../../assets/about/optical-store.jpg";
function About() {
  const textRef = useRef();
  const { scrollYProgress } = useScroll({ target: textRef });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <>
      <div
      className="relative w-full h-[60vh] overflow-hidden bg-fixed bg-cover bg-center"
      loading="lazy"
      style={{ backgroundImage: `url(${about})` }} 
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <motion.div
        ref={textRef}
        style={{ y: y }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
      >
        <p className="font-Marcellus text-4xl md:text-6xl mb-8 underline underline-offset-8 font-extralight">
          About Us
        </p>
      </motion.div>
    </div>
   
    <section>
    <div className="flex flex-row gap-8 mx-14 my-14">
    <div>
      <img src={about3} alt="About Us" className="h-180 object-cover rounded-xl w-250" />
    </div>
    <div className="space-y-7 mt-46 text-lg">
    <p className="text-4xl font-semibold text-center tracking-tighter italic">
      Identity
    </p>
      <p>
        We’re curators. The protagonist of the Indian luxury eyewear scene. 
      </p>
      <p>
        On the surface, our stores offer eyewear products and optometry services. 
      </p>
      <p>
        But the unique essence of Dayal Opticals comes from our endeavour to offer a personalised boutique experience.
      </p>
    </div>
    </div>
    </section>
     <hr className="border-t border-gray-300 my-8 mx-10" />
    <section>
    <div className="flex flex-row gap-8 mx-14 my-14">
    <div className="space-y-7 w-1/2 mt-26 text-lg">
    <p className="text-4xl font-semibold text-center tracking-tighter italic">
      Work
    </p>
      <p>
       We host an extensive curation of eyewear,  hand-picked specially for the Indian audience, from brands at the forefront of luxury  to independent houses with a singular artistic vision. 
      </p>
      <p>
        Our optometry service is also supported by a highly-qualified and seasoned staff, and we dispense visioncare solutions using only the world-leading technologies of brands like Zeiss and Essilor.
      </p>
      <p>
        Our assistance is tailored to meet each need of our client, because we want our customers to experience luxury, not simply own it.
      </p>
    </div>
    <div>
      <img src={about2} alt="About Us" className="w-full h-full object-cover rounded-xl" />
    </div>
    </div>
    </section>
    <hr className="border-t border-gray-300 my-8 mx-10" />
    <section>
    <div className="flex flex-row gap-8 mx-14 my-14">
    <div>
      <img src={about1} alt="About Us" className="w-full h-full object-cover rounded-xl"/>
    </div>
    <div className="space-y-7 w-1/2 mt-36 text-lg">
    <p className="text-4xl font-semibold text-center tracking-tighter italic">
      Presence
    </p>
      <p>
        With 14 stores nestled in Delhi NCR prime locations, we are at the heart of the city. Our journey doesn’t stop there. Expanding into Punjab, we now proudly operate 17 stores, including a store in Chandigarh and India’s very first Luxury Pop-Up Store in Mohali。
      </p>
      <p>
        In 2021, we embraced the digital realm, bringing our collections closer to you. Every store—both offline and online—stands as a testament to our commitment to eyewear fashion.
      </p>
      <p>
        This is our journey of uniting you and the best of eyewear fashion in one frame.
      </p>
    </div>
    </div>
    </section>

      <section className="bg-black text-[#f5f1ec] px-6 md:px-16 py-20">
      <h1 className="text-center text-3xl md:text-4xl tracking-widest mb-16">
        FROM ATAL OPTICALS
      </h1>

      {/* Timeline */}
      <div className="hidden md:flex items-center justify-center mb-20">
        <span className="w-2.5 h-2.5 bg-[#f5f1ec] rounded-full" />
        <span className="w-122 h-px bg-[#f5f1ec]" />
        <span className="w-2.5 h-2.5 bg-[#f5f1ec] rounded-full" />
        <span className="w-122 h-px bg-[#f5f1ec]" />
        <span className="w-2.5 h-2.5 bg-[#f5f1ec] rounded-full" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mx-24">
        {/* Item 1 */}
        <div>
          <span className="text-2xl opacity-80">01</span>
          <h3 className="mt-3 text-lg tracking-wide">AUTHENTICITY</h3>
          <p className="mt-5 leading-5 opacity-90">
            Atal Opticals is the authorized reseller of 60+ international
            eyewear brands. We offer a curation which is nothing but authentic
            because it's hand-picked directly from the brands & their
            distributors.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <span className="text-2xl opacity-80">02</span>
          <h3 className="mt-3 text-lg tracking-wide">DIVERSITY</h3>
          <p className="mt-5 leading-5 opacity-90">
            We house the most expansive curation of luxury eyewear in India,
            ranging from brands at the height of luxury to independent maisons
            with refined artistic visions.
          </p>
          <p className="mt-4 leading-5 opacity-90">
            With Atal Opticals, you'll never miss out on what the world is
            wearing.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <span className="text-2xl opacity-80">03</span>
          <h3 className="mt-3 text-lg tracking-wide">SERVICE</h3>
          <p className="mt-5 leading-5 opacity-90">
            Our service is centered around our core belief that true luxury is
            not just bought but also thoroughly experienced. To sustain that,
            we are supported by a team of highly qualified and seasoned staff of
            optometrists and consultants.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;