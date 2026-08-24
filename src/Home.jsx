import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen px-4 text-center bg-gradient-to-r from-blue-700 to-cyan-500 flex flex-col justify-center items-center text-white">

      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Explore The World 🌍
      </h1>

      <p className="text-lg sm:text-xl mb-8">
        Discover famous tourist places around the globe.
      </p>

      <Link
        to="/tourist"
        className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300"
      >
        Explore Now
      </Link>

    </div>
  );
}

export default Home;