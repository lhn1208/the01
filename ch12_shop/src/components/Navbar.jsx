import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);
  
  //처음 블러 올때 카트 안의 카운터를 읽어와 화면에 뿌려지는데 getCartTotal액션에 의해서 카운터가 계산된다.
  return (
    // Main Navbar
    <div className="flex justify-between items-center my-2 py-2">
      {/* Left Navbar */}
      <div className="text-6xl mx-12 cursor-pointer" onClick={() => navigate("/")}>Shopzon</div>
      {/* Right Navbar */}
      <div className="flex items-center gap-8 mx-12">
        <div
          className="flex items-center border
        p-3 rounded-full bg-gray-100"
        >
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Arama Yapınız..."
          />
          <BiSearch size={28} className="hover:animate-pulse" />
        </div>
        <AiOutlineHeart size={28} />
        <div onClick={() => navigate("cart")} className="relative">
          <div
            className="absolute -top-3 -right-3 bg-red-500
          text-white rounded-full w-5 h-5 flex items-center justify-center "
          >
            {itemCount}
          </div>
          <SlBasket size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
