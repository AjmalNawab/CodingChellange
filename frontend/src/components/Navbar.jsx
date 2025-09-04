import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import useCartStore from "../store/useCartStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCartStore();
  const cartItemCount = getTotalItems();

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
            Add New Product
          </Link>
          <Link
            to="/checkout"
            className="relative text-gray-600 hover:text-gray-800"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-32 pb-6 space-y-4">
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
            Add New Product
          </Link>
          <Link
            to="/checkout"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ShoppingCart className="h-6 w-6" />
            Cart
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
