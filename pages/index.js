import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FaUserNinja } from 'react-icons/fa'

const index = () => {
    return (
        <Pagina titulo='Fox Delivery'>

            <div className="d-flex justify-content-end align-items-start">
                <Link className="ms-2 btn btn-danger mt-3 mb-3" href="/cliente/form">
                <FaUserNinja className="me-2" />
                    Sou Cliente
                </Link>
            </div>
            <Row>
                <Col>
                    <Card style={{ width: '20rem', textAlign: 'center', border: "solid 2px yellow" }}>
                        <Card.Img variant="top" src="images/restaurante2.jpg" />
                        <Card.Body>
                            <Card.Title>Restaurantes</Card.Title>
                            <Card.Text>
                                Cadastre seu Restaurante para melhores experiências
                            </Card.Text>
                            <Link className='btn' style={{ backgroundColor: "yellow", color: "black" }} href={'/restaurante'}>Cadastre aqui</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', textAlign: 'center', border: "solid 2px yellow" }}>
                        <Card.Img variant="top" src="images/produtos.jpg" />
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            <Card.Text>
                                Todas os Produtos diponíveis para você e sua família!
                            </Card.Text>
                            <Link className='btn' style={{ backgroundColor: "yellow", color: "black" }} href={'/produto'}>Cadastre aqui</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', textAlign: 'center', border: "solid 2px yellow" }}>
                        <Card.Img variant="top" src="images/entregador.jpg" />
                        <Card.Body>
                            <Card.Title>Entregador</Card.Title>
                            <Card.Text>
                                Você entregador, experimente o melhor app com as melhores condições.
                            </Card.Text>
                            <Link className='btn' style={{ backgroundColor: "yellow", color: "black" }} href={'/entregador'}>Cadastre aqui</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Pagina >
    )
}

export default index
