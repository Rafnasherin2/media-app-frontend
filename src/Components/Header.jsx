import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
      
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-dark fw-bolder fs-3'>
            <Link style={{textDecoration:"none",color:"blueviolet"}} to={'/'}>
          <i class="fa-solid fa-play fa-beat"></i> Media-Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    
  )
}

export default Header
