import { Container } from "react-bootstrap";

const Footer : React.FC = () => {     
    return(
        <footer className="text-white py-1 mt-3" style={{ backgroundColor: '#4169E1' }}>
            <Container className="text-center">
                대표 : 이창현<br />
                이메일 : <a href="mailto:jamsuham75@naver.com" className="text-white">jamsuham75@naver.com</a><br />
                블로그 : <a href="https://blog.naver.com/jamsuham75" className="text-white" target="_blank" rel="noopener 
                  noreferrer">https://blog.naver.com/jamsuham75</a><br />                 
                  Copyright ⓒ 이창현코딩연구소 Corp. All Rights Reserved.<br />             
            </Container>
        </footer>
    )
}
export default Footer;