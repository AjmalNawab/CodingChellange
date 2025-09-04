import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Upload } from "lucide-react";

const AddItem = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    // update form state
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static functionality - just show alert for now
    alert(`Product "${form.name}" would be added! (Static demo)`);

    // Reset form
    setForm({ name: "", price: "", img: "" });
  };

  return (
    <main className="flex-1 px-32 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Add New Product
            </h1>
            <p className="text-gray-600 text-lg">
              Create a new product listing for your store
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Image
              </label>
              <div className="relative">
                <input
                  name="img"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={form.img}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
                />
                <Upload
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Enter a valid image URL
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold flex items-center justify-center gap-2 rounded-xl"
            >
              <Plus size={20} />
              Add Product
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddItem;
