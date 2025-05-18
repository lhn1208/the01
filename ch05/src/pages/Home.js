import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import { motion } from "framer-motion";
import "../styles/Home.css";

function Home() {
  return (
     <motion.div
      initial={{ opacity: 0, x: -50 }} // 초기 상태
      animate={{ opacity: 1, x: 0 }}  // 애니메이션 적용
      exit={{ opacity: 0, x: 50 }}    // 페이지 나갈 때
      transition={{ duration: 0.5 }}  // 지속 시간
    >

      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Pedro's Pizzeria </h1>
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
                <p> PIZZA TO FIT ANY TASTE</p>
          </motion.div>

          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.2 }} // 마우스 오버 시 크기 확대
              whileTap={{ scale: 0.9 }} // 클릭 시 크기 축소
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                border: "none",
                backgroundColor: "#007BFF",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Order Now
            </motion.button>
          </Link>
        </div>
      </div>
     </motion.div>

  );
}

export default Home;
