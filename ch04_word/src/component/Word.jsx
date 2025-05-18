import React, { useState } from 'react'

const Word = ({word:w}) => {
    const [word, setWord] = useState(w);
    const [isDone, setIsDone] = useState(word.isDone); //외운 단어
    const [isShow, setIsShow] = useState(false); //뜻 보여주기

    const toggleShow = () =>{
        setIsShow(!isShow);
    }
    const toggleDone = () =>{
        setIsDone(!isDone);
    }
    const del = () =>{
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3010/words/${word.id}`,{
                method:"DELETE",
            }).then(res => {
                if(res.ok){
                    setWord({id: 0})
                }else{
                    alert("삭제 실패")
                }
            })
        }
    }
    if(word.id == 0){
        return null;
    }
  return (
    <>
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type='checkbox' checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button className='button_show' onClick={toggleShow}>뜻 {isShow ? "숨기기": "보기"}</button>
                <button className='button_delete' onClick={del}>삭제</button>
            </td>
        </tr>
    </>
  )
}

export default Word