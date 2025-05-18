import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
   const [data, setData] = useState([]);
   useEffect(() =>{
         fetch(url)
         .then((res)=>{
            return res.json(); //받아온 문자열을 json객체로 변경
         })
         .then((data)=>{
            setData(data);
         })
      },[url]);
  return data;
}

export default useFetch