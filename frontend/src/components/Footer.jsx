import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} RandoStore. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">
            Products
          </Link>
          <Link to="/add-item" className="text-gray-600 hover:text-gray-800">
            Add Item
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
