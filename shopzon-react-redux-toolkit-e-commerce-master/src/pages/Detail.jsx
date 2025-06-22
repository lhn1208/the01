import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/slices/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetailStatus, productDetails } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  console.log(productDetails,'details');
  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetails} />
      )}
    </div>
  );
};

export default Detail;
