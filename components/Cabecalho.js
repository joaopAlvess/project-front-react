import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from '../styles/style.module.css';

const Cabecalho = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', backgroundColor: 'yellow', fontSize: '20px', marginBottom: '30px' }}>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Fox Delivery</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='nav-link' href="/restaurante">Restaurantes</Nav.Link>
              <Nav.Link className='nav-link' href="/cliente">Clientes</Nav.Link>
              <Nav.Link className='nav-link' href="/entregador">Entregadores</Nav.Link>
              <Nav.Link className='nav-link' href="/produto">Produtos</Nav.Link>
              <Nav.Link className='nav-link' href="/card">Card Empresa</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

    </>
  )
}

export default Cabecalho

//bg="light" variant="dark"