import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const MyCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-custom" style={{ position: 'relative' }}>
          <img
            className="fixed-size-img"
            src="/image/5.jpg"
            alt="First slide"
          />
         
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-custom" style={{ position: 'relative' }}>
          <img
            className="fixed-size-img"
            src="/image/6.jpg"
            alt="Second slide"
            //style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />          
        </div>
         <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0)',
              color: '#000',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            정말 좋은 책입니다
          </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-custom" style={{ position: 'relative' }}>
          <img
            className="fixed-size-img"
            src="/image/7.jpg"
            alt="Third slide"
            // style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
