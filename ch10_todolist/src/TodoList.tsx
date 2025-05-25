import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import React, { useState } from "react";
import TodoModal from './TodoModal'
// 1. 타입 정의
type Todo = {
    id: number; // 할일의 고유 ID
    text: string; // 할일의 내용
    isChecked: boolean; // 할일 완료 여부
};


const TodoList: React.FC = () => {
    const title: string = '오늘 할일'; // 타이틀, 타입 추론으로 문자열로 설정됨


    // 2. 상태 관리
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '잠자기', isChecked: false },
        { id: 2, text: '공부하기', isChecked: false },
        { id: 3, text: '밥먹기', isChecked: false },
        { id: 4, text: '산책하기', isChecked: false },
    ]);


    const [newTodo, setNewTodo] = useState<string>(''); // 새 할일 텍스트 입력 상태
    const [showDetail, setShowDetail] = useState<boolean>(false); // 상세보기 여부 상태
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null); // 선택된 할일 상태


    // 3. 체크박스 상태 변경 처리
    const handleCheckboxChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    }


    // 4. 새로운 할일 추가 처리
    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, isChecked: false }
            ]);
            setNewTodo(''); // 새 할일 입력 후 입력 필드를 비움
        }
    }


    // 5. 할일 삭제 처리
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id)); // 해당 ID를 제외한 나머지 할일로 필터링
    }


    // 6. 할일 클릭 시 상세보기 열기
    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo); // 선택된 할일을 상태에 저장
    }


    // 7. 상세보기 닫기
    const handleCloseDetail = () => {
        setShowDetail(false);
    }


    return (
        <Container fluid className="mt-5" style={{ maxWidth: '1200px' }}>
            {/* 제목 */}
            <Container className="p-3 mb-4 bg-dark text-white rounded">
                {/* p-3: 패딩, mb-4: 하단 마진, bg-dark: 어두운 배경색, text-white: 흰색 텍스트, rounded: 둥근 모서리 */}
                <h1 className="text-center">{title}</h1>
            </Container>
           
            {/* 할일 입력 폼 */}
            <Row className="justify-content-center mb-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4 shadow-sm">
                        {/* border: 테두리, p-3: 패딩, rounded: 둥근 모서리, mb-4: 하단 마진, shadow-sm: 작은 그림자 */}
                        <Form className="d-flex">
                            {/* d-flex: Flexbox 레이아웃, 자식 요소들이 가로로 정렬됨 */}
                            <Form.Group controlId="newTodo" className="flex-grow-1 me-2">
                                {/* flex-grow-1: 가능한 공간을 채우도록 설정, me-2: 오른쪽 마진 */}
                                <Form.Control
                                    type="text"
                                    placeholder="할일 입력"
                                    value={newTodo} // 입력 값은 newTodo 상태에 바인딩
                                    onChange={(e) => setNewTodo(e.target.value)} // 입력 값 변경 시 상태 업데이트
                                    size="lg"
                                />
                            </Form.Group>
                            <Button variant="warning" onClick={addTodo} size="lg">추가</Button>
                        </Form>
                    </div>


                    {/* 할일 목록 출력 */}
                    <div className="border p-3 rounded shadow-sm">
                        {/* border: 테두리, p-3: 패딩, rounded: 둥근 모서리, shadow-sm: 작은 그림자 */}
                        <ul className="list-unstyled">
                            {/* list-unstyled: 기본 목록 스타일 제거 */}
                            { /*id: 1, text: '잠자기', isChecked: false */}
                            {
                                todos.map((todo) => (
                                    <li key={todo.id} className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: '1.25rem' }}>
                                        {/* d-flex: Flexbox 레이아웃, align-items-center: 수직 중앙 정렬, justify-content-between: 양쪽 끝 정렬, mb-3: 하단 마진 */}
                                        {/* 체크박스와 할일 텍스트 */}
                                        <Form.Check
                                            type="checkbox"
                                            checked={todo.isChecked}
                                            onChange={() => handleCheckboxChange(todo.id)}
                                            label={todo.isChecked ? <del>{todo.text}</del> : <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>}
                                            style={{ fontSize: '1.25rem' }}
                                        />
                                        {/* 삭제 버튼 */}
                                        <Button variant="danger" size="lg" onClick={() => removeTodo(todo.id)} style={{ fontSize: '1rem' }}>
                                            삭제
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Col>
            </Row>

            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo} />
            {/* 날씨 및 시간 정보 */}
            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded shadow-sm">
                        {/* border: 테두리, p-3: 패딩, rounded: 둥근 모서리, shadow-sm: 작은 그림자 */}
                        <h4 className="mb-3">날씨 예보</h4>
                        {/* mb-3: 하단 마진 */}
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            현재 날씨: 맑음, 25°C
                        </p>
                        <h4 className="mt-4 mb-3">현재 시간</h4>
                        {/* mt-4: 상단 마진, mb-3: 하단 마진 */}
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            {new Date().toLocaleTimeString()}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default TodoList;