import { useEffect } from 'react'

const Cart = () => {
    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);
  return (
    <div>Cart</div>
  )
}

export default Cart