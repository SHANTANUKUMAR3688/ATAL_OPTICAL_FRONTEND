import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import API, { IMAGE_URL } from "../../API/Api";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product() {
  const location = useLocation();
  // const { category, subcategory } = location.state;

  const [product, setproduct] = useState([]);

  const fetchproduct = async () => {
    try {
      const res = await API.get("/getallsubcategory",
        {
          headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${admintoken}`,
        }
        }
      );
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
    <>
      <div className="mt-5 ml-10 font-bold text-2xl">
          {product[0]?.category}{" "}FRAMES
        </div>
      <div className="grid grid-cols-4 px-10 py-8 ml-10">
        {product.map((data, index) => (
          <div
            className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center hover:shadow-red-500 hover:scale-105 hover:cursor-pointer 
            shadow-gray-600"
            key={index}
          >
            {/* Image */}
              <Link to="/cart" state={{ ID: data._id }}>
                <img
                  src={`${IMAGE_URL + data.image}`}
                  alt={data.name}
                  className="w-full h-46 object-contain mb-4 hover:scale-105 hover:cursor-pointer"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            

            {/* Title and Price */}
            <div className="flex justify-between items-center w-full mt-3">
              <h2 className="font-bold text-gray-800 text-base capitalize">
                {data.name}
              </h2>
              <FaHeart className="mr-1 fill-gray-500 hover:fill-red-600 hover:cursor-pointer text-2xl" />
            </div>

            {/* Rating & Button */}
            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex items-center gap-1">
                <span className="line-through">$
                  {data.previous_price}
                  </span>
                <span className="text-red-600 font-semibold">
                  $
                  {data.current_price}
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: data._id,
                      name: data.name,
                      price: data.current_price,
                      image: `${IMAGE_URL + data.image}`,
                    })
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
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
         ))}
      </div>
    </>
  );
}

export default Product;
