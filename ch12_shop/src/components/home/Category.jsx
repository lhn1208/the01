import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCategories,
} from "../../redux/slices/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  //console.log(categories,'categories');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
     <div className="w-1/6 bg-gray-100 p-4 max-h-screen rounded-md">
      <div className="border-b pb-1 text-xl px-2">Kategoriler</div>
      {categories?.map((item, index) => (
        <div
          onClick={()=>setCategory(item)}
          className="text-lg mt-1.5 cursor-pointer hover:bg-gray-200 p-2"
          key={index} 
        >
          {item}  
        </div>
      ))}
    </div>
  )
}

export default Category