import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useEffect } from 'react';
import '../App.css';

const AboutPage: React.FC = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(`감지된 요소:`, entry.target); // 감지된 요소 출력
                console.log(`보이는 상태?:`, entry.isIntersecting); // 화면에 보이는지 확인
                if (entry.isIntersecting) {                     
                    entry.target.classList.add('show');                
                } else {
                    entry.target.classList.remove('show');                 
                }
            });
        }, { threshold: 0.1 });
    
        const elements = document.querySelectorAll('.hidden');
        console.log('감지할 요소들:', elements); //요소가 선택되었는지 확인
    
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Container>
                <Row className="text-center">                     {/* 소개 섹션 */}
                    <Col md={6} className='header_left hidden'>
                        <header className='header_left_intro'>이창현 코딩연구소 대표, 성신여대 융합보안공학과 겸임교수</header>
                        <header className='header_left_introduce'>안녕하세요,</header>
                        <header className='header_left_introduce'>이창현입니다.</header>
                        <div className='header_left_introduce_body_container'>
                            <span className='header_left_introduce_body'>안녕하세요. 이창현코딩연구소의 이창현입니다.</span><br />
                            <span className='header_left_introduce_body'>늘 새로운 개발에 대해 연구하는 것을 좋아하고</span><br />
                            <span className='header_left_introduce_body'>개발자되기를 희망하는 청년들을 교육합니다.</span>
                        </div>
                        {/* 버튼 섹션 */}             
                        <div className='btn_header_container'>
                            <a href='https://blog.naver.com/jamsuham75'>
                                <button className='btn_header btnHover'>블로그</button>
                            </a>
                            <a href='https://www.youtube.com/@jamsuham75'>
                                <button className='btn_header btnHover'>유튜브</button>
                            </a>                         
                        </div>                     
                    </Col>
                    {/* 이미지 섹션 */}                     
                    <Col md={6}>
                        <img src='/image/member.jpg' width={"50%"} alt="대표 이미지" />
                    </Col>                 
                </Row>             
            </Container>         
        </>

    );
}
export default AboutPage;