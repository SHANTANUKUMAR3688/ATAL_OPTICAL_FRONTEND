import CountUp from "react-countup";
import women from "../../assets/frame/womenframe.jpg";

const Review = () => {
  return (
    <>
        <div className="flex md:mt-26 mt-16">
          <div>
            <div className="md:ml-26 md:mx-0 mx-6">
              <p className="text-3xl font-bold">
                We are experienced and professional
              </p>
              <hr className="border-black mt-2 md:w-122 w-42"></hr>
              <p className="mt-6">
                At Atal Optical, we pride ourselves on being an experienced and professional team dedicated to delivering exceptional eye care. With years of expertise in vision health and eyewear solutions, we combine advanced technology with personalized attention to ensure every patient receives the highest standard of care. Whether it’s a routine eye check, managing dry eye conditions, or finding the perfect pair of frames, our commitment remains the same  — helping you see clearly, feel comfortable, and look your best with confidence.
              </p>
              <div className="flex mt-10 gap-10 items-center">
                <div className="flex flex-col">
                  <div className="font-bold text-3xl">
                    <CountUp start={0} end={Number(170) || 0} duration={3} />
                    k+
                  </div>
                  <p className="text-lg">Followers</p>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-3xl">
                    <CountUp start={0} end={Number(140) || 0} duration={3} />
                    k+
                  </div>
                  <p className="text-lg">Frames</p>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-3xl">
                    <CountUp start={0} end={Number(95) || 0} duration={3} />%
                  </div>
                  <p className="text-lg">Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-16 ml-20 pb-20 w-800 md:block hidden">
            <div className="bg-red-600 rounded-xl ">
              <img
                src={women}
                alt="woman"
                loading="lazy"
                decoding="async"
                className="rounded-xl w-full h-full -translate-6 border-red-600 border-2 "
              />
            </div>
          </div>
        </div>
    </>
  );
};
export default Review;
