import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = () => {
  // Static items data
  const staticItems = [
    {
      id: 1,
      name: "King Size Bed",
      price: "300",
      img: "/images/bed.jpg",
    },
    {
      id: 2,
      name: "Comfy Slippers",
      price: "15",
      img: "/images/ecommerce.webp",
    },
    {
      id: 3,
      name: "CD Rack",
      price: "100",
      img: "/images/ecommerce.webp",
    },
    {
      id: 4,
      name: "Glow Stick Bundle",
      price: "10",
      img: "/images/ecommerce.webp",
    },
    {
      id: 5,
      name: "Cookie Jar",
      price: "25",
      img: "/images/ecommerce.webp",
    },
  ];

  // search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = staticItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCart = (item) => {
    // Static functionality - just show alert for now
    alert(`Added "${item.name}" to cart! (Static demo)`);
  };

  return (
    <main className="flex-1 px-32 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Shop Products
        </h1>

        <div className="mb-12 max-w-lg mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
          />
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-100 rounded-2xl shadow-lg bg-white p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover mb-6 rounded-xl"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.name}
              </h2>
              <p className="text-2xl font-bold text-gray-600 mb-6">
                ${item.price}
              </p>
              <button
                onClick={() => handleCart(item)}
                className="w-full py-3 text-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center text-gray-500 text-xl py-12">
              No items available.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Item;
