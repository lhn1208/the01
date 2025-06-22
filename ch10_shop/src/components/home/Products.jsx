import { useNavigate } from "react-router-dom";
import Product from "./Product";
import Loading from '../Loading';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProducts,
  getCategoryProduct
} from "../../redux/slices/productSlice";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products);
  const productStatus = useSelector((state) => state.productData.productStatus);

    useEffect(() => {
      if (category) {
           dispatch(getCategoryProduct(category));
         } else {
           dispatch(getProducts());
         }
    }, [dispatch, category]);

  return (
    <>
    {productStatus === "LOADING" && <Loading />}
    {productStatus === "SUCCESS" &&
      <div className="flex flex-wrap justify-center items-center">
        {
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>  
    }
    </>
  );
};

export default Products;
