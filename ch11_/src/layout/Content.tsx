import { Container, Nav, Navbar, Col, Row, Card, Button } from "react-bootstrap";
// import MyCarousel from "../components/Carousel";
// import bookdata, {Book} from "../data/Bookdata";
// import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
// import BookItem from "../components/BookItem";
 import AboutPage from '../pages/AboutPage';
// import ListPage from '../pages/ListPage';
// import ContactPage from '../pages/ContactPage';
// import CartPage from '../pages/CartPage';
// import DetailPage from '../pages/DetailPage';
// import DetailPage2 from '../pages/DetailPage2';
// import LoginPage from '../pages/LoginPage';
 import HomePage from '../pages/HomePage';
 import { PersonFill, BasketFill } from 'react-bootstrap-icons';


const Content : React.FC = () => {
  

    return (
        <div>
            <Navbar style={{ backgroundColor: '#4169E1' }} data-bs-theme="dark">           
                <Container>
                    <Navbar.Brand href = "/"><h1>BookStore</h1></Navbar.Brand>             
                    <Nav className="me-auto">
                        <Nav.Link href = "/">Home</Nav.Link>               
                        <Nav.Link href = "/about">About</Nav.Link>               
                        <Nav.Link href = "/list">Product</Nav.Link>               
                        <Nav.Link href = "/contact">Contact</Nav.Link>             
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" className="d-flex align-items-center">
                            <PersonFill size={20} className="me-2" />
                            Login
                        </Nav.Link>    
                        <Nav.Link href="/cart" className="d-flex align-items-center">
                            <BasketFill size={20} className="me-2" />
                            Cart
                        </Nav.Link>                 
                    </Nav>
                </Container>
            </Navbar> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />           
                <Route path="*" element={'페이지가 존재하지 않습니다. 확인해주세요.'} />        
            </Routes>

        </div>
    );
};
export default Content;