 
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import HeaderImg from '../images/head_mockup.png'
const header = () => {
    return (
        <Container className='my-3'>
  <Row className="row align-items-center p-2">
    <Col lg="8" sm="12"><div className='mx-auto'>
                    <h1  className='mb-4 fw-bold '> 
                        Hello, I am Mayo!</h1>
                <p className='fs-5'>Another stunning minimalist business services, agency & portfolio theme. Build your own amazing website with Mayo.</p></div></Col>
    <Col lg="4" sm="12"><Image className='mx-auto p-2'
        src={HeaderImg}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></Col>
  </Row>  
</Container>
    )
}

export default header
