import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import API, { IMAGE_URL } from "../../API/Api";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product() {
  const location = useLocation();
  //const { category } = location.state;

  const [product, setproduct] = useState([]);

  const fetchproduct = async () => {
    try {
      const res = await API.get("/getallsubcategory", {
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${admintoken}`,
        },
      });
      setproduct(res.data.subcategory || []);
      console.log(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };
  useEffect(() => {
    fetchproduct();
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="bg-indigo-100">
      <div className="pt-5 ml-10 font-bold text-2xl">FRAMES</div>
      <div className="grid grid-cols-4 px-10 py-8 ml-10">
        {product.map((data, index) => (
          <div
            className="w-[280px] bg-[#faf6f2] rounded-md overflow-hidden text-center mb-10 hover:shadow-red-500 hover:scale-105 hover:cursor-pointer"
            key={index}
          >
            {/* Image */}
            <div className="bg-white">
              <Link to="/cart" state={{ ID: data._id }}>
                <img
                  src={`${IMAGE_URL + data.image}`}
                  alt={data.name}
                  className="w-full h-46 object-contain mb-4 hover:scale-105 hover:cursor-pointer"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{data.name}</h3>

              <div className="flex justify-center items-center gap-2 mb-1">
                <span className="text-green-700 font-semibold">
                  ${data.current_price}
                </span>

                {data.previous_price && (
                  <span className="text-red-600 line-through">
                    ${data.previous_price}
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: data._id,
                      name: data.name,
                      price: data.current_price,
                      image: `${IMAGE_URL + data.image}`,
                    }),
                  );
                  Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart!",
                    showConfirmButton: false,
                    timer: 3000,
                  });
                }}
                className="w-full bg-red-500 text-white py-2 text-sm font-medium hover:opacity-90 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <section className="w-full bg-black p-6 md:p-10">
        <div className="border border-[#e6dccf] p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left Title */}
            <div className="md:w-1/3 text-center mt-4">
              <h2 className="text-[#e6dccf] font-serif text-3xl md:text-5xl leading-tight">
                COLLECTORS
                <br />
                EDITION
              </h2>
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 text-[#e6dccf] space-y-4 leading-relaxed">
              <p>
                You may come across some brands here which you haven&apos;t
                heard of – and that&apos;s the beauty of our collector&apos;s
                edition. Our mission is to bring you the{" "}
                <span className="font-semibold">
                  best and most unique eyewear brands, handpicked by our team
                  from all over the world.
                </span>
              </p>

              <p>
                Here, we&apos;re not just looking for big names, we&apos;re
                focused on collections that reflect our eye for{" "}
                <span className="font-semibold">
                  quality, design and distinctiveness.
                </span>{" "}
                We make sure to find the finest eyewear, thoughtfully curated
                for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
