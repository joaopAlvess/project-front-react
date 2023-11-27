import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

    return (
        <>
            <Cabecalho />
            <Container className='mb-5'>
                {props.children}
            </Container>
            <Rodape />
        </>
    )
}

export default Pagina