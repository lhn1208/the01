import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const Detailcomp = ({productDetail}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating.count) setQuantity(quantity + 1);
  };
   const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
      
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[650px] h-[650px] object-contain my-12"
        src={productDetail?.image}
      />
      <div className="flex flex-col gap-4 my-auto mx-3">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="text-red-500 text-lg">
          {/* Rating : {productDetail?.rating.rate} */}
        </div>
        {/* <div>Count : {productDetail?.rating.count}</div> */}
        <div className="text-4xl font-extrabold text-green-600">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            type="text"
            value={quantity}  
            className="w-12 text-center text-2xl font-semibold rounded-full"
            disabled
          />

          <div  onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          className="border w-[150px] text-xl rounded-lg my-2
        bg-gray-50 cursor-pointer
        h-16 flex items-center justify-center text-black font-bold"
         onClick={addBasket}
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  )
}

export default Detailcomp