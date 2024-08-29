import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
 
function Landingpage() {

const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic incidunt minima veniam animi illum consequatur. Nihil voluptas sunt, itaque possimus nam modi ipsum, ad adipisci, voluptate perspiciatis autem quibusdam.
        Optio, consequuntur. Esse velit officiis nobis a labore voluptatum dolore quaerat, cumque deserunt optio eius aperiam repudiandae iste eligendi omnis saepe dicta. Quidem neque hic doloribus eveniet. Cupiditate, labore sapiente.
        Beatae eveniet eligendi natus consequuntur asperiores fugiat fugit reprehenderit deserunt maxime voluptatum iusto inventore sit minus, perferendis cupiditate officia illo, odio obcaecati blanditiis? Quam, veritatis unde sed blanditiis deleniti quas.</p>
        <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://th.bing.com/th/id/OIP.M6Rvcn2-eQ1DZhah9W_OnAHaHa?rs=1&pid=ImgDetMain" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">

        <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>
       
       <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
       <Card style={{ width: '18rem' }}  className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://th.bing.com/th/id/OIP.IzckaD9TqDO6AflDN2v5lgHaHa?w=498&h=498&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
        </Card.Body>
        </Card>       
       
        <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://www.creativefabrica.com/wp-content/uploads/2021/12/21/Music-sound-waves-Graphics-22099235-1.png" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
        </Card.Body>
        </Card>       
        
        <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://th.bing.com/th/id/OIP.oNH7zk71jgd9AnStm8dG0QHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title> 
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>        
      </Card.Body>
    </Card>
       </div>
      </div>

      <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">
   
      <div className="col-lg-5">
        <h4 className='text-warning'>Simple,Powerful & Fast</h4>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro eligendi adipisci, praesentium eveniet, libero esse ea deleniti ratione laboriosam fugit, officiis laborum. Sapiente explicabo quis natus exercitationem, dolore maxime.</h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro eligendi adipisci, praesentium eveniet, libero esse ea deleniti ratione laboriosam fugit, officiis laborum. Sapiente explicabo quis natus exercitationem, dolore maxime.</h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro eligendi adipisci, praesentium eveniet, libero esse ea deleniti ratione laboriosam fugit, officiis laborum. Sapiente explicabo quis natus exercitationem, dolore maxime.</h6>
      </div>
       
       <div className="col-lg-5 ms-5">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/rhrD7as3KJg?si=bkZ1ykA3kDEmvZcp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
       </div>

    </>
  )
}

export default Landingpage
