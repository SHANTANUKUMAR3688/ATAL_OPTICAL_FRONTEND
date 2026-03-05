import contact from "../../assets/about/contact.jpg";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import API from '../../API/Api';

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

  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [email,setemail]=useState("");
  const [message,setmessage]=useState("");
  const [subject,setsubject]=useState("");

  const handleSendMail = async (e) => {
    e.preventDefault();
        try {
          // console.log(firstname,lastname,email,message,subject);
            const response = await API.post("/send-mail", {
                to:'skr36880@gmail.com',
                subject: "Action Required: Please Review Customer",
                html: generateHtmlTemplate()
            });
            console.log(response.data);
            //toast.success(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

  const generateHtmlTemplate = () => {
        return `
   <!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #f9f9f9;
      }
    .header {
        background-color:rgb(55, 105, 180);
        color: white;
        padding: 15px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      }
      .content {
        padding: 20px;
        color: #333;
      }
      .btn {
        display: inline-block;
        padding: 10px 20px;
        margin: 10px 5px 0;
        font-size: 16px;
        text-decoration: none;
        border-radius: 5px;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Customer Action Required</h2>
      </div>
      <div class="content">
        <p>Dear Super Manager,</p>
        <p>
          A new customer has been added by <br>
          <strong>Manager Name :</strong> manager <br>
          <strong>Manager Email : </strong>manager email and requires your action.
        </p>
        <strong>Customer Name:</strong> cusgtomer <br>
        <strong>Customer Email: </strong> customer mail</p>

        <p style="margin-top: 20px;">Thanks,<br/>Your Team</p>
      </div>
    </div>
  </body>
</html>
  `;
    };
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
          className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
        >
          <p className="font-Marcellus text-4xl md:text-6xl mb-8 underline underline-offset-8 font-extralight">
            Contact Us
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="mt-14 md:ml-16 ml-10 mr-10">
          <p className="text-5xl font-Marcellus font-medium">You tell us. We listen.</p>
          <hr className="mt-2 mb-4 md:w-122 w-80 border-t-2"/>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4679444636968!2d77.37455947349697!3d28.615734231100813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d9b356b8ed%3A0x49adf36c8f202317!2sWorld%20WebLogic!5e0!3m2!1sen!2sin!4v1747035730974!5m2!1sen!2sin"  className="w-[350px] md:w-[600px] h-[300px] md:h-[350px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
          </div>
        </div>

        <div>
          <div className="max-w-xl md:mt-28 mt-10 p-6 mb-6 md:ml-8 mx-6 bg-white rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    value={firstname} 
                    onChange={(e)=>setfirstname(e.target.value)}
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
                    value={lastname} 
                    onChange={(e)=>setlastname(e.target.value)}
                    id="lastname"
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
                  id="email"
                  value={email} 
                  onChange={(e)=>setemail(e.target.value)}
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
                  id="subject"
                  value={subject}
                  onChange={(e)=>setsubject(e.target.value)}
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
                  id="message"
                  value={message}
                  onChange={(e)=>setmessage(e.target.value)}
                  placeholder="Your Message"
                  className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit" onClick={handleSendMail}
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
