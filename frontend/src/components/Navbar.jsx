import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-32 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          RandoStore
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">
            Products
          </Link>
          <Link to="/add-item" className="text-gray-600 hover:text-gray-800">
            Add Item
          </Link>
          <Link to="/checkout" className="text-gray-600 hover:text-gray-800">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-32 pb-6 space-y-4 ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-800"
          >
            Products
          </Link>
          <Link
            to="/add-item"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-800"
          >
            Add Item
          </Link>
          <Link
            to="/checkout"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-800"
          >
            <ShoppingCart className="h-6 w-6 text-gray-600" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
