import React from 'react'
import Detailcomp from '../detail/Detailcomp'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailProduct } from '../redux/slices/productSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../components/Loading';


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails, productDetailStatus } = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch]);

   console.log(productDetails,'details');
  return (
    <div>
        <>
          {productDetailStatus === "LOADING" && <Loading />}
          {productDetailStatus === "SUCCESS" &&
            <Detailcomp productDetail={productDetails} />
            }
          </>
    </div>
  )
}

export default Detail