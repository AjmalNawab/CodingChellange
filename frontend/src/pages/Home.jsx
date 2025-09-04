import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/ecommerce.webp",
      alt: "E-commerce Products",
    },
    {
      src: "/images/bed.jpg",
      alt: "Premium Bed",
    },
    {
      src: "/images/ecommerce.webp",
      alt: "Quality Products",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Discover & Sell <br />
              <span className="text-gray-600">Quality Products</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Explore curated items, add your own, or quickly checkout — all in
              one place.
            </p>
            <div className="flex flex-col gap-4 max-w-xs">
              <Link to="/products" className="px-6 py-3 rounded-lg text-center">
                Browse Products
              </Link>
              <Link to="/add-item" className="px-6 py-3 rounded-lg text-center">
                Add New Product
              </Link>
              <Link to="/checkout" className="px-6 py-3 rounded-lg text-center">
                Checkout
              </Link>
            </div>
          </div>

          <div className="w-full relative">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-80 object-cover transition-opacity duration-500"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </main>
  );
};

export default Home;
