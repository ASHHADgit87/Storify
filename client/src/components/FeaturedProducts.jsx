import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaStar, FaRegStar, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const FeaturedProducts = () => {
  const featured = [
    { id: 1, name: "Backpack", brand: "UrbanGear", price: "$50.00", image: assets.backpack1 },
    { id: 2, name: "Ergonomic Chair", brand: "Flexi", price: "$120.00", image: assets.chair1 },
    { id: 3, name: "Gaming Console", brand: "GamePro", price: "$350.00", image: assets.console1 },
    { id: 4, name: "Gaming Chair", brand: "ProGamer", price: "$200.00", image: assets.gamingchair1 },
    { id: 5, name: "Gaming Mouse", brand: "ClickMax", price: "$45.00", image: assets.gamingmouse1 },
    { id: 6, name: "Hand Bag", brand: "LeatherLux", price: "$95.00", image: assets.handbag1 },
    { id: 7, name: "Wireless Headphones", brand: "SoundMax", price: "$150.00", image: assets.headphones1 },
    { id: 8, name: "Trendy Hoodie", brand: "UrbanWear", price: "$60.00", image: assets.hoodie1 },
    { id: 9, name: "Modern Lamp", brand: "LightWave", price: "$40.00", image: assets.lamp1 },
    { id: 10, name: "Laptop Pro", brand: "TechEdge", price: "$900.00", image: assets.laptop1 },
    { id: 11, name: "Mechanical Keyboard", brand: "KeyMaster", price: "$110.00", image: assets.mechanicalkeyboard1 },
    { id: 12, name: "Smartphone", brand: "NextGen", price: "$650.00", image: assets.mobile1 },
    { id: 13, name: "Running Shoes", brand: "AirRun", price: "$80.00", image: assets.shoes1 },
    { id: 14, name: "Smartwatch", brand: "TimeX", price: "$220.00", image: assets.smartwatch1 },
    { id: 15, name: "Study Table", brand: "FurniMax", price: "$140.00", image: assets.table1 },
    { id: 16, name: "Casual T-shirt", brand: "CottonClub", price: "$30.00", image: assets.tshirt1 },
  ];

  // Local state to track product quantities
  const [cart, setCart] = useState({});

  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev; // nothing to decrease
      if (prev[id] === 1) {
        // remove product from cart when qty = 0
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  return (
    <div className="section-p1 relative py-12 bg-black text-white">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center">Featured Products</h2>
      <p className="text-gray-400 text-center">Our most latest products - here for you</p>

      {/* Products Grid */}
      <div className="pro-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-8 relative z-10">
        {featured.map((item) => {
          const qty = cart[item.id] || 0;

          return (
            <div
              key={item.id}
              className="group relative rounded-2xl shadow-md overflow-hidden cursor-pointer"
            >
              {/* Full Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <span className="text-gray-300 text-xs">{item.brand}</span>
                <h5 className="text-sm font-semibold truncate">{item.name}</h5>
                <div className="flex text-yellow-400 text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                </div>
                <h4 className="text-[#ff7f32] font-bold text-sm">{item.price}</h4>
              </div>

              {/* Cart / Qty Buttons */}
              {qty === 0 ? (
                <button
                  onClick={() => increaseQty(item.id)}
                  className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center 
                  border border-gray-400 text-[#ff7f32] rounded-full 
                  bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100
                  hover:bg-[#ff7f32] hover:text-white transition-all duration-300"
                >
                  <FaShoppingCart className="text-sm" />
                </button>
              ) : (
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button onClick={() => decreaseQty(item.id)} className="text-white hover:text-[#ff7f32]">
                    <FaMinus />
                  </button>
                  <span className="text-white text-sm">{qty}</span>
                  <button onClick={() => increaseQty(item.id)} className="text-white hover:text-[#ff7f32]">
                    <FaPlus />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
