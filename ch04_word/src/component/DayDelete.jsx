import { Link } from "react-router-dom"
import dummy from "../db/data.json"
import {useState,useEffect} from "react"
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function DayList(){
    const days = useFetch("http://localhost:3010/days");
    const navigate=useNavigate();

    function del(e) {
    const dayId = e.target.id;

    if (window.confirm(`Day ${dayId}에 해당하는 단어와 날짜를 삭제하시겠습니까?`)) {
        // 1. 먼저 해당 day에 해당하는 단어들을 가져오기
        fetch(`http://localhost:3010/words?day=${dayId}`)
        .then(res => res.json())
        .then(words => {
            // 2. 개별적으로 DELETE 요청 보내기
            const deletePromises = words.map(word =>
                fetch(`http://localhost:3010/words/${word.id}`, {
                method: "DELETE",
                })
            );

            // 3. 모든 단어 삭제가 끝나면, day 삭제
            Promise.all(deletePromises).then(() => {
                    fetch(`http://localhost:3010/days/${dayId}`, {
                    method: "DELETE",
                }).then(res => {
                    if (res.ok) {
                        alert("해당 날짜와 단어가 삭제되었습니다.");
                        navigate(`/`);
                    }
                });
            });
        });
    }
    }
    return (
        <>
        <h1>삭제할 Day를 클릭하세요.</h1>
        <ul className="list_day">
        {
        days.map(day =>(
        <li key = {day.id}>
        <button onClick={del} id={day.id}>day {day.day}</button>
        </li>
        ))
        }
        </ul>
        </>
    )
}