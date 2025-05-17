import { useState } from 'react';
import './App.css';

//학생 정보 시스템 메인 컴포넌트
const StudentApp=()=>{
  // 현재 모드 상태 관리(현재 화면 상태) (HOME, CREATE, SELECT, UPDATE, DELETE)
  const [mode, setMode] = useState('HOME');
  // 학생 데이터 상태 관리 (초기 데이터 4명 설정)
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', username: 'alice123', age: 21, height: 160, joinDate: '2020-01-01' },
    { id: 2, name: 'Bob', username: 'bob123', age: 22, height: 170, joinDate: '2019-03-15' },
    { id: 3, name: 'Charlie', username: 'charlie123', age: 23, height: 180, joinDate: '2018-05-10' },
    { id: 4, name: 'Dave', username: 'dave123', age: 24, height: 175, joinDate: '2017-07-20' },
  ]);
  //선택된 학생 ID 관리
  const [selectedId, setSelectedId] = useState(null);
  //다음 학생 ID 생성을 위한 상태 관리
  const [nextId, setNextId] = useState(5);
  
  //선택된 학생 정보 찾기
  const selectedStudent = students.find(s => s.id === selectedId);

  

  //학생 생성 핸들러
  const handleCreate = (student) => {
    var newStudents=[...students, { ...student, id: nextId }];    
    setStudents(newStudents);
    setNextId(nextId + 1);
    
    setMode('SELECT');
    console.log(newStudents);
    //아래와 같이 기술하면 비동기 처리되어 딜레이가 생긴다.
    //setStudents([...students, { ...student, id: nextId }]);
  };
  
  //학생 정보 업데이트 핸들러
  const handleUpdate = (updatedStudent) => {
    setStudents(students.map(s => s.id === selectedId ? { ...s, ...updatedStudent } : s));
    setMode('SELECT');
  };
  
  //학생 삭제 핸들러
  const handleDelete = () => {
    if (selectedId) {
      setStudents(students.filter(s => s.id !== selectedId));
      setSelectedId(null);
      setMode('SELECT');
    }
  };

  return(
    <div className="app-container">
      <header>
        <h1>Student Info System</h1>
        <div className="menu-buttons">
          <button onClick={() => { setMode('CREATE'); setSelectedId(null); }}>CREATE</button>
          <button onClick={() => { setMode('SELECT'); setSelectedId(null); }}>SELECT</button>
          <button onClick={() => { selectedId ? setMode('UPDATE') : alert('수정할 학생을 선택하세요'); }}>UPDATE</button>
          <button onClick={() => { selectedId ? setMode('DELETE') : alert('삭제할 학생을 선택하세요'); }}>DELETE</button>
        </div>
        <p className="mode-indicator">현재 페이지: {mode}</p>
      </header>


      <main>
        {mode === 'HOME' && <p>메뉴를 선택해주세요.</p>}
        {mode === 'CREATE' && <StudentCreate onCreate={handleCreate} />}
        {mode === 'SELECT' && (
          <>
            <StudentSelect students={students} onSelect={id => setSelectedId(id)}
            />
            {selectedStudent ? (
              <StudentDetail student={selectedStudent} />
            ) : (
              <p>학생을 선택하세요.</p>
            )}
          </>
        )}
        {mode === 'UPDATE' &&
          (selectedStudent ? <StudentUpdate student={selectedStudent} onUpdate={handleUpdate} /> : <p>학생을 선택하세요.</p>)
        }
        {mode === 'DELETE' &&
          <StudentDelete
            student={selectedStudent}
            onDelete={handleDelete}
            onCancel={() => setMode('SELECT')}
          />
        }
      </main>      
      </div>
  );
};

const StudentDelete = ({ student, onDelete, onCancel }) => {
  if (!student) return <p>학생을 선택하세요.</p>;
  return (
    <div className="student-delete">
      <p><strong>{student.name}</strong> 학생을 삭제하시겠습니까?</p>
      <button onClick={onDelete}>삭제</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};
const StudentUpdate = ({ student, onUpdate }) => {
  const [form, setForm] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>학생 수정</h2>
      <div><input name="name" placeholder="이름" value={form.name} onChange={handleChange} required /></div>
      <div><input name="username" placeholder="아이디" value={form.username} onChange={handleChange} required /></div>
      <div><input name="age" type="number" placeholder="나이" value={form.age} onChange={handleChange} required /></div>
      <div><input name="height" type="number" placeholder="키(cm)" value={form.height} onChange={handleChange} required /></div>
      <div><input name="joinDate" type="date" placeholder="가입일" value={form.joinDate} onChange={handleChange} required /></div>
      <button type="submit">수정 완료</button>
    </form>
  );
};

const StudentSelect = ({ students, onSelect }) => (
  <div className="student-list">
    <h2>학생 목록</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>아이디</th>
          <th>나이</th>
          <th>키</th>
          <th>가입일</th>
          <th>선택</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.username}</td>
            <td>{student.age}</td>
            <td>{student.height}cm</td>
            <td>{student.joinDate}</td>
            <td>
              <button onClick={() => onSelect(student.id)}>선택</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const StudentDetail = ({ student }) => (
  <div className="student-detail">
    <h2>학생 상세보기</h2>
    <p><strong>이름:</strong> {student.name}</p>
    <p><strong>아이디:</strong> {student.username}</p>
    <p><strong>나이:</strong> {student.age}</p>
    <p><strong>키:</strong> {student.height}cm</p>
    <p><strong>가입일:</strong> {student.joinDate}</p>
  </div>
);

const StudentCreate = ({ onCreate }) => {
  const [student, setStudent] = useState({ name: '', username: '', age: '', height: '', joinDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
    //setStudent다음에 콜백함수(매개변수가 함수인 인자)가 오면
    //prev 변수에 이전 student값을 가저오고 함수의 리턴값이 새로운 변수가 된다.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(student);
    setStudent({ name: '', username: '', age: '', height: '', joinDate: '' });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>학생 추가</h2>
      <div><input name="name" placeholder="이름" value={student.name} onChange={handleChange} required /></div>
      <div><input name="username" placeholder="아이디" value={student.username} onChange={handleChange} required /></div>
      <div><input name="age" type="number" placeholder="나이" value={student.age} onChange={handleChange} required /></div>
      <div><input name="height" type="number" placeholder="키(cm)" value={student.height} onChange={handleChange} required /></div>
      <div><input name="joinDate" type="date" placeholder="가입일" value={student.joinDate} onChange={handleChange} required /></div>
      <button type="submit">등록</button>
    </form>
  );
};












const App = () => {
   return (
    <>
      <StudentApp></StudentApp>
    </>
  );
};


export default App;
