import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="px-8 py-4">
          <h2 className="text-3xl text-center mb-3 block font-comic font-bold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    );
  };
  export default Contact;
  