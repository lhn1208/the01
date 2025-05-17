import React, { useState } from 'react'

const Word = ({id, word}) => {
    const [isDone, setIsDone] = useState(word.isDone); //외운 단어
    const [isShow, setIsShow] = useState(false); //뜻 보여주기

    const toggleShow = () =>{
        setIsShow(!isShow);
    }
    const toggleDone = () =>{
        setIsDone(!isDone);
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
                <button className='button_delete'>삭제</button>
            </td>
        </tr>
    </>
  )
}

export default Word