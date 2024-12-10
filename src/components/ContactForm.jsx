import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complete user details.", userDetails);
    toast.success("Form submitted successfully, see the Console for more information.")
    setUserDetails({
      name: "",
      email: "",
      message: "",
    });
  };
  return (

    <form
      className="max-w-lg mx-auto bg-white p-6 shadow-pink-200 shadow-2xl rounded"
      onSubmit={handleSubmit}
    >
    <ToastContainer />
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-comic text-2xl font-bold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent ">
          Name 
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded font-comic font-bold focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-comic text-2xl font-bold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">
          Email 
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          value={userDetails.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded font-comic font-bold focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-comic  text-2xl font-bold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Share your thoughts and brighten your day!"
          value={userDetails.message}
          onChange={handleInputChange}
          className="w-full resize-none p-2 border rounded font-comic font-bold focus:outline-none focus:ring-2 focus:ring-pink-500 "
        ></textarea>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-40 bg-pink-600  hover:bg-pink-300 font-semibold  text-white p-2 rounded">
          Submit
        </button>
      </div>
      <p className="text-center text-lg font-semibold text-pink-600 mt-4">"Let laughter heal your soul!"</p>
    </form>
  );
};
export default ContactForm;
