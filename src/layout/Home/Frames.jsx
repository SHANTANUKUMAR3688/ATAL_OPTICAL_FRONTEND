import "./FlipCard.css";
import { useEffect, useState } from "react";
import API, { IMAGE_URL } from "../../API/Api";
import { Link } from "react-router-dom";
import contactlens from "../../assets/frame/contactlens.jpg";
import menframe from "../../assets/frame/menframe.jpg";
import womenframe from "../../assets/frame/woman.jpg";

const Frames = () => {
  const [frameData, setFrameData] = useState([]);

  const getAllFrames = async () => {
    try {
      const res = await API.get(
        "/getBySubCategory/Shop By Category"
      );
      setFrameData(res.data.subcategories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllFrames();
  }, []);

  return (
    <div className="py-16 md:pl-12 mb-14 mx-6 md:mx-0">
      <h1 className="text-3xl font-bold text-center">
        <span>Shop by</span>
        <span className="text-red-600"> Category</span>{" "}
      </h1>
      <hr className="w-72 ml-127 mb-10 mt-2 border-black"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* {frameData.map((frame, index) => (
          <Link
            to="/allproduct"
            key={index}
            state={{
              category: frame.cat_sec,
              subcategory: frame.subCategoryName,
            }}
          >
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front overflow-hidden">
                  <img
                    src={IMAGE_URL + frame.image}
                    loading="lazy"
                    decoding="async"
                    alt="front"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flip-card-back bg-red-600 text-white shadow-xl p-6 rounded-xl flex items-center justify-center font-medium">
                  {frame.description}
                </div>
              </div>
              <div className="flex justify-center md:mb-0 mb-10 font-semibold text-4xl">
                {frame.subCategoryName}
              </div>
            </div>
          </Link>
        ))} */}
      
      
      <Link
            to="/allproduct"
            //key={index}
            // state={{
            //   category: frame.cat_sec,
            //   subcategory: frame.subCategoryName,
            // }}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front overflow-hidden">
                  <img
                    src={contactlens}
                    loading="lazy"
                    decoding="async"
                    alt="front"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flip-card-back bg-red-600 text-white shadow-xl p-6 rounded-xl flex items-center justify-center font-medium">
                  <div>Contact Lenses are a convenient and effective alternative to traditional eyeglasses, offering clear vision without the need for frames. They sit directly on the eye’s surface and are available in a wide range of types, including daily disposables, extended wear, toric lenses for astigmatism, and multifocal lenses for presbyopia.</div>
                </div>
              </div>
              <div className="flex justify-center md:mb-0 mb-10 font-semibold text-4xl">
                <div>Contact Lenses</div>
              </div>
            </div>
          </Link>

          <Link
            to="/allproduct"
            //key={index}
            // state={{
            //   category: frame.cat_sec,
            //   subcategory: frame.subCategoryName,
            // }}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front overflow-hidden">
                  <img
                    src={menframe}
                    loading="lazy"
                    decoding="async"
                    alt="front"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flip-card-back bg-red-600 text-white shadow-xl p-6 rounded-xl flex items-center justify-center font-medium">
                  <div>Men’s Frames are designed to combine durability, comfort, and style, making them a perfect fit for everyday wear. At Atal Optical, we offer a wide selection of men’s eyeglass frames—from classic and professional styles to bold, modern designs. Crafted with high-quality materials such as titanium, stainless steel, and lightweight acetate, our frames ensure both strength and comfort for long-lasting use.</div>
                </div>
              </div>
              <div className="flex justify-center md:mb-0 mb-10 font-semibold text-4xl">
                <div>Men's Frames</div>
              </div>
            </div>
          </Link>


          <Link
            to="/allproduct"
            // key={index}
            // state={{
            //   category: frame.cat_sec,
            //   subcategory: frame.subCategoryName,
            // }}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front overflow-hidden">
                  <img
                    src={womenframe}
                    loading="lazy"
                    decoding="async"
                    alt="front"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flip-card-back bg-red-600 text-white shadow-xl p-6 rounded-xl flex items-center justify-center font-medium">
                  <div>Women's Frames bring together elegance, comfort, and individuality, offering styles that enhance both vision and personal expression. At Atal Optical, our collection of women’s eyeglass frames ranges from sleek, minimalist designs to bold, fashion-forward statements. Crafted with high-quality materials like lightweight acetate, titanium, and stainless steel, these frames ensure durability without compromising on comfort.</div>
                </div>
              </div>
              <div className="flex justify-center md:mb-0 mb-10 font-semibold text-4xl">
                <div>Women's Frames</div>
              </div>
            </div>
          </Link>
          </div>
    </div>
  );
};

export default Frames;
