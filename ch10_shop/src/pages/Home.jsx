import SliderComp from "../components/home/SliderComp";
import Category from "../components/home/Category";
import { useState } from "react";
import Products from "../components/home/Products";
import Sorting from "../components/home/Sorting";

const Home = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} />
      </div>
    </div>
  );
};

export default Home;
