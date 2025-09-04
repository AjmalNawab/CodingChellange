import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <main>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Discover & Sell <br />
              <span className="text-gray-600">Quality Products</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Explore curated items, add your own, or quickly checkout — all in
              one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="px-6 py-3 rounded-lg">
                Browse Products
              </Link>
              <Link to="/add-item" className="px-6 py-3 rounded-lg">
                Add New Product
              </Link>
              <Link to="/checkout" className="px-6 py-3 rounded-lg">
                Checkout
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/images/ecommerce.webp"
              alt="Product showcase"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
        {/* Why Shop Section */}
      </div>
      <Cards />
    </main>
  );
};

export default Home;
