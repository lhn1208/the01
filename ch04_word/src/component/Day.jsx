import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "./Word";
import { useEffect, useState } from "react";

const Day = () => {
    const {day} = useParams(); //주소 값 받기
    //const wordList=dummy.words.filter(word=>word.day==day);
    const [words, setWords] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:3010/words?day=${day}`)
        .then(res => res.json())
        .then(data =>{
            setWords(data);
        })
    },[day])
  return (
    <div>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {
                    words.map(word => (
                        <Word key={word.id} word={word}/>
                    ))
                }
            </tbody>
        </table>
    
    </div>
  )
}

export default Day