import React from "react";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between">
      <img
        className="w-[120px] h-[120px] object-contain my-5"
        src={cart?.image}
      />
      <div className="w-[476px] ">
        <div className="text-xl font-bold"> {cart?.title} </div>
      </div>
      <div className="font-bold text-2xl"> {cart?.price} TL </div>
      <div className="font-bold text-xl"> {cart?.quantity} </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="cursor-pointer bg-red-500 rounded-xl text-white w-[100px] h-[16] flex items-center justify-center "
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
