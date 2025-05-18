import { Link } from "react-router-dom"
import dummy from "../db/data.json"
import useFetch from "../hooks/useFetch"

const DayList = () => {
    const days = useFetch("http://localhost:3010/days");
    // const [days, setDays] = useState([]); //days값이 바뀌면 화면갱신 -> rest서버에 데이터 요청
    // useEffect(() =>{
    //     fetch("http://localhost:3010/days")
    //     .then((res)=>{
    //         return res.json(); //받아온 문자열을 json객체로 변경
    //     })
    //     .then((data)=>{
    //         setDays(data);
    //     })
    // },[]) //한번만 실행
  return (
    <div>
        <ul className="list_day">
            {
                days.map(day  => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default DayList