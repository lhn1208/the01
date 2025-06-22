import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/slices/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "hepsi");
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex justify-end text-xl font-bold ">TOPLAM TUTAR: <span className="text-green-600 text-2xl ml-2">{totalAmount} TL </span>
          </div>
        </div>
      ) : (
        <div>Kartınız boş...</div>  
      )}
    </div>
  );
};

export default Cart;
