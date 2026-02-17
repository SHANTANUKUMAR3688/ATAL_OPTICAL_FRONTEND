import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import human1 from '../../assets/test/human1.jpg';
import human2 from '../../assets/test/human2.jpg';
import human3 from '../../assets/test/human3.jpg';
import human4 from '../../assets/test/human4.jpg';
import human5 from '../../assets/test/human5.jpg';
import human6 from '../../assets/test/human6.jpg';
const testimonials = [
    {
        name: 'Sneha Sharma',
        title: 'Excellent Service!',
        feedback: 'The sunglasses fit perfectly and the customer support was really helpful. Loved the packaging too!',
        rating: 5,
        image: human1,
    },
    {
        name: 'Rekha Verma',
        title: 'Stylish and Comfortable',
        feedback: 'Loved the collection! My order arrived on time and the lenses are very comfortable.',
        rating: 4,
        image: human2,
    },
    {
        name: 'Pallavi Mehta',
        title: 'Value for Money',
        feedback: 'Great quality for the price. Will definitely recommend to my friends!',
        rating: 5,
        image: human3,
    },
    {
        name: 'Amit Sharma',
        title: 'Excellent Service!',
        feedback: 'The sunglasses fit perfectly and the customer support was really helpful. Loved the packaging too!',
        rating: 5,
        image: human4,
    },
    {
        name: 'Nidhi Verma',
        title: 'Stylish and Comfortable',
        feedback: 'Loved the collection! My order arrived on time and the lenses are very comfortable.',
        rating: 4,
        image: human6,
    },
    {
        name: 'Rohan Mehta',
        title: 'Value for Money',
        feedback: 'Great quality for the price. Will definitely recommend to my friends!',
        rating: 5,
        image: human5,
    },
];

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
         responsive: [
    {
      breakpoint: 1024, // below 1024px (tablet)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // below 640px (mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
    };

    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
            <h3 className="text-3xl font-bold">What Our <span className="text-red-600">Customers Say</span></h3>
            <hr className='mb-12 mt-2 md:w-106 w-60 md:ml-110 ml-15 border-black'></hr>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index} className="px-6">
                        <div className="bg-white hover:bg-red-600 hover:text-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border-1 border-red-600">
                            <div className="flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-28 h-28 rounded-full object-cover mb-4 shadow"
                                    loading='lazy'
                                    decoding='async'
                                />
                                <div className="w-full flex justify-center text-left pl-4 mb-2">
                                    <h4 className="text-lg font-semibold">{item.name}</h4>
                                </div>
                                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                                <p className="italic text-sm mb-4 max-w-xl">"{item.feedback}"</p>
                                <div className="flex justify-center text-yellow-500 mb-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialsSlider;
