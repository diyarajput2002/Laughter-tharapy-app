import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="px-8 py-4 mt-2">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="./home.webp"
              className="rounded shadow-pink-300 shadow-lg w-auto h-[300px] sm:h-[450px] aspect-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-6 font-comic">
                Welcome to <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent leading-normal">
                  DileMagda
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-comic font-bold text-center px-4">
                I'm <span className="font-semibold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">Magdalena Muñoz</span>, a
                laughter therapist dedicated to spreading happiness and
                transforming lives. Through tailored activities and stand-up
                comedy, I bring joy to workplaces, events, and families, leaving
                smiles and stronger connections in my wake.
              </p>
              <p className="mt-4 text-lg sm:text-2xl font-bold text-center font-comic">
                Whether you're looking to uplift your team, celebrate a special
                occasion, or simply lighten the mood, <span className="font-semibold bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">DileMagda</span> is here to make
                every moment unforgettable. Let's create laughter and lasting
                memories together.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="mt-6 px-6 py-3 bg-pink-600 text-white shadow-pink-200  text-sm sm:text-xl font-semibold font-comic rounded-lg shadow-xl"
                >
                 Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-4 mt-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-bold mb-3 sm:mb-6 font-comic bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 ">
            <div>
              <p className="text-lg sm:text-2xl font-comic font-bold text-center">
                Hi, I'm <span className="font-semibold">Magdalena Muñoz</span>,
                a laughter therapist from Chile, passionate about spreading joy
                and transforming lives. With a background in performing arts and
                years of experience in corporate and family events, I've honed
                the art of using humor as a tool for connection and growth.
              </p>
              <p className="mt-4 text-lg sm:text-2xl font-comic font-bold text-center">
                <span className="bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">Laughter therapy</span> is more than just entertainment—it's a
                science-backed approach to reducing stress, boosting morale, and
                improving mental health. I work with teams, families, and
                individuals, bringing them together through engaging activities
                and stand-up comedy sessions.
              </p>
              <p className="mt-4 text-lg sm:text-2xl font-comic font-bold text-center">
                The world we live in can often feel overwhelming, but I firmly
                believe in the healing power of laughter. <span className="bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">My mission</span> is to bring
                that spark of joy to as many people as possible.
              </p>
            </div>
            <img
              src="./image2.png"
              className="rounded shadow-md  shadow-pink-300 w-auto h-[300px] sm:h-[450px] aspect-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="photos" className="px-8 py-4 ">
        <h2 className="text-center text-4xl font-bold mb-6 font-comic bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent">Photos</h2>
        <PhotoGallery />
      </section>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={24} />
        </button>
    </div>
  );
};

export default Home;
