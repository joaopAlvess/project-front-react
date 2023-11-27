import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [card, setCard] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/card').then(resultado => {
            setCard(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/card/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="card">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email Coorporativo</th>
                        <th>Contato</th>
                        <th>Nome da Empresa</th>
                        <th>CNPJ</th>
                        <th>Quantidade de Cartões</th>
                    </tr>
                </thead>
                <tbody>
                    {card.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/card/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.contato}</td>
                            <td>{item.empresa}</td>
                            <td>{item.cnpj}</td>
                            <td>{item.card}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Link href="/card/form" className="mb-2 btn btn-warning">
                    Adicionar
                </Link>
            </div>
        </Pagina>
    )
}

export default index