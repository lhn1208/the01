import React from 'react'
import {Modal} from 'react-bootstrap';

type Todo = {
   id : number;
   text : string;
   isChecked : boolean;
}
type todoModalProps = {
   show : boolean;
   handleClose: () => void;
   todo : Todo | null;

}
const TodoModal:React.FC<todoModalProps> = ({show,handleClose,todo}) => {
  return (
    <Modal show={show} onHide ={()=>handleClose()} centered>
      <Modal.Header closeButton>
         <Modal.Title>상세정보</Modal.Title>
      </Modal.Header>
       <Modal.Body>
            {todo ?.text}의 상세정보
            <p>현재날짜: {new Date().toLocaleDateString()}</p>
         </Modal.Body>
    </Modal>
  )
}

export default TodoModal