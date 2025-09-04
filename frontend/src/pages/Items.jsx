import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    addToCart,
    updateQuantity,
    // eslint-disable-next-line no-unused-vars
    removeFromCart,
    isInCart,
    items: cartItems,
  } = useCartStore();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        alert("Error loading items. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const getCartItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  if (loading) {
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
          <div className="text-center text-xl text-gray-600 py-12">
            Loading products...
          </div>
        </div>
      </main>
    );
  }

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

        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Shop Products</h1>
          <Link
            to="/checkout"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium"
          >
            <ShoppingCart size={20} />
            View Cart ({useCartStore.getState().getTotalItems()})
          </Link>
        </div>

        <div className="mb-12 max-w-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
          />
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => {
            const cartQuantity = getCartItemQuantity(item.id);
            const isItemInCart = isInCart(item.id);

            return (
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
                  ${parseFloat(item.price).toFixed(2)}
                </p>

                {!isItemInCart ? (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-center gap-3">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, cartQuantity - 1)
                      }
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-lg font-semibold min-w-[2rem] text-center">
                      {cartQuantity}
                    </span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, cartQuantity + 1)
                      }
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {filteredItems.length === 0 && !loading && (
            <div className="col-span-full text-center text-gray-500 text-xl py-12">
              No items found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Items;
