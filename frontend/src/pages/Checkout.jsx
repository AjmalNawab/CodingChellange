import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  // Static cart items for demo
  const staticCartItems = [
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
  ];

  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const total = staticCartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields.");
      return;
    }

    // Static functionality - just show alert for now
    alert("Thank you! Your order has been placed! (Static demo)");
  };

  const handleRemove = (itemId) => {
    // Static functionality - just show alert for now
    alert(`Item would be removed from cart! (Static demo)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Checkout
      </h1>

      {staticCartItems.length === 0 ? (
        <div className="max-w-2xl mx-auto grid gap-6">
          <p className="text-center text-gray-500">Your cart is empty.</p>
          <Link to="/products" className="flex justify-center">
            <Button className="text-center bg-gray-800 text-white hover:bg-gray-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto grid gap-6">
          {/* Cart Items */}
          {staticCartItems.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between gap-4 p-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col justify-between items-end gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => handleRemove(item.id)}
                  className="flex items-center gap-2 w-32 bg-red-600 text-white hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Remove
                </Button>
              </div>
            </Card>
          ))}

          <div className="text-right text-lg font-bold">Total: ${total}</div>

          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-2 rounded-lg w-full"
              />
              <textarea
                placeholder="Shipping Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="border p-2 rounded-lg w-full resize-none"
                rows={3}
              />
              <Button
                onClick={handleOrder}
                className="w-full bg-gray-800 text-white hover:bg-gray-700 font-semibold"
              >
                Create Order
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
