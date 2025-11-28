import React from "react";
import { assets } from "../assets/assets";
const features = [
  { id: 1, img: assets.feature1, title: "Free Shipping" },
  { id: 2, img: assets.feature2, title: "Online Order" },
  { id: 3, img: assets.feature3, title: "Save Money" },
  { id: 4, img: assets.feature4, title: "Promotions" },
  { id: 5, img: assets.feature5, title: "Happy Sell" },
  { id: 6, img: assets.feature6, title: "24/7 Support" },
];

const Features = () => {
  return (
    <div id="feature" className="bg-black section-p1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-6 gap-10 h-50">
          {features.map((f) => (
            <div
              key={f.id}
              className="fe-box bg-black   rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <img
                src={f.img}
                alt={f.title}
                className="h-30 w-auto object-contain mb-2"
              />
              <h6 className="text-sm font-medium text-white">{f.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;