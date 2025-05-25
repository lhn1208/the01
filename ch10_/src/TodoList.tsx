import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import TodoModal from "./TodoModal";

type Todo = {
   id : number;
   text : string;
   isChecked : boolean;
   }
const TodoList: React.FC = () => {
    const title: string = '오늘 할일'; // 타이틀만 유지
    const [todos,setTodos] = useState<Todo[]>([
      {id:1, text:"잠자기1", isChecked:false},
      {id:2, text:"잠자기2", isChecked:false},
      {id:3, text:"잠자기3", isChecked:false},
      {id:4, text:"잠자기4", isChecked:false},
    ]);
    
    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    //상세보기창 보여주기
    const handleTodoClick = (todo:Todo) => {
      setShowDetail(true);
      setSelectedTodo(todo);
    }
    //상세보기창 닫기
    const handleCloseDetail = () => {
       setShowDetail(false);
    }

   //할일 추가
   const addTodo = () => {
      if(newTodo.trim() !=='')  {
         setTodos([
            ...todos,
            {id:Date.now(), text: newTodo, isChecked:false}
         ]);
         setNewTodo('');
      }
   }
   //체크박스 체크하기
   const handleCheckboxChange = (itemId:number) => {
      //기존 데이터에 itemId를 찾아서 isChecked속성을 반전
      setTodos((prevItems)=>prevItems.map((item) =>item.id === itemId?{...item, isChecked:!item.isChecked} : item));
      
   }

    //할일 삭제
    const removeTodo = (id:number)=>{
      setTodos(todos.filter((todo) =>  todo.id !== id));
    }

    return (
        <Container fluid className="mt-5" style={{ maxWidth: '1200px' }}>
            {/* 제목 */}
            <Container className="p-3 mb-4 bg-dark text-white rounded">
                <h1 className="text-center">{title}</h1>
            </Container>


            {/* 할일 입력 폼 */}
            <Row className="justify-content-center mb-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4 shadow-sm">
                        <Form className="d-flex">
                            <Form.Group controlId="newTodo" className="flex-grow-1 me-2">
                                <Form.Control
                                    type="text"
                                    placeholder="할일 입력"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    size="lg"
                                />
                            </Form.Group>
                            <Button onClick={addTodo} variant="warning" size="lg">추가</Button>
                        </Form>
                    </div>

                     <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo} />

                    {/* 할일 목록 - 더미 데이터 1개만 표시 */}
                    <div className="border p-3 rounded shadow-sm">
                        <ul className="list-unstyled">
                            { todos.map((todo)=>(
                                 <li key={todo.id} className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: '1.25rem' }}>
                                    <Form.Check
                                          type="checkbox"
                                          checked={todo.isChecked}
                                          onChange={() => handleCheckboxChange(todo.id)}
                                          label={todo.isChecked? <del>{todo.text}</del> : <span onClick={()=>handleTodoClick(todo)}>{todo.text}</span>}
                                          style={{ fontSize: '1.25rem' }}
                                    />
                                    <Button onClick={()=>removeTodo(todo.id)} variant="danger" size="lg" style={{ fontSize: '1rem' }}>
                                          삭제
                                    </Button>
                                 </li>
                              ))
                           }
                        </ul>
                    </div>
                </Col>
            </Row>


            {/* 날씨 및 시간 정보 */}
            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded shadow-sm">
                        <h4 className="mb-3">날씨 예보</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            현재 날씨: 맑음, 25°C
                        </p>
                        <h4 className="mt-4 mb-3">현재 시간</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            {new Date().toLocaleTimeString()}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList