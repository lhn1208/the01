import { useRef } from 'react';
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
const CreateWord = () => {
   const days = useFetch("http://localhost:3010/days");
   const navigate = useNavigate();
   const engRef = useRef(null);
   const korRef = useRef(null);
   const dayRef = useRef(null);

   const onSubmit = (e) =>{
      e.preventDefault();
      
      fetch('http://localhost:3010/words', {
         method : "POST",
         headers: {
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            day:Number(dayRef.current.value),
            eng:engRef.current.value,
            kor:korRef.current.value,
            isDone:false
         })
      }).then(res=>{
         if(res.ok){
            alert("생성 완료");
            navigate(`/day/${dayRef.current.value}`);
         }else{
            alert("실패");
            navigate(`/`);
         }
      })
   }
   return (
      <form onSubmit={onSubmit}>
         <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef} />
         </div>
         <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef} />
         </div>
         <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
               {days.map(day => (
                  <option key={day.id} value={day.day}>
                     {day.day}
                  </option>
               ))}
            </select>
         </div>
         <button>저장</button>
      </form>
   );
}

export default CreateWord