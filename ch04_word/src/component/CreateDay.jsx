import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch";

const CreateDay = () => {
   const days = useFetch("http://localhost:3010/days");
   const navigate = useNavigate();
   const addDay = () =>{
      fetch(`http://localhost:3010/days`,{
         method:"POST",
         headers: {
            "Content-Type" : "application/json"
         },
         body:JSON.stringify({
            id:"" + (days.length+1),
            day: days.length+1
         })
      }) //post방식
      .then(res =>{
         if(res.ok){
            alert("생성 완료");
            navigate('/');
         }else{
            alert("생성 실패");
            navigate('/');
         }
      })
   }
  return (
    <div>
      <h3>현재 일수 : {days.length}</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}

export default CreateDay