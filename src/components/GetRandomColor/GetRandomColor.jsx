import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function GetRandomColor() {
  const colors = ['red', 'green', 'purple', 'yellow', 'blue', 'orange', 'cyan'];
  const [randomColor, SetRandomColor] = useState('');
  const [currentColorName, setCurrentColorName] = useState('');
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectColor = colors[randomIndex];
    SetRandomColor(selectColor);
    setCurrentColorName(selectColor);
  };

  return (
  
 
  
  <Container>
  <Row className='justify-content-center mt-5'>
    <Col xs={12} md={6} className='text-center'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'white', fontSize: '24px' }}>GetRandomColor</p>
        <div style={{ backgroundColor: randomColor, padding: '20px', borderRadius: '10px', width: '200px', height: '200px' }}>
        </div>
        <div className='mt-3'>
          <Button variant='primary' onClick={getRandomColor}>Get Random Color</Button>
        </div>
        {currentColorName && (
          <div className='mt-3'>
            <p style={{ textAlign: 'center' }}>Current Color: {currentColorName}</p>
          </div>
        )}
      </div>
    </Col>
  </Row>
</Container>
  )

}

export default GetRandomColor;
