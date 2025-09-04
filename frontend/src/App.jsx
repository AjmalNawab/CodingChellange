import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import AddItem from "./pages/AddItem";
import Items from "./pages/Items";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="add-item" element={<AddItem />} />
        <Route path="products" element={<Items />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
