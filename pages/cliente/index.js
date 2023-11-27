import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [cliente, setCliente] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/cliente').then(resultado => {
            setCliente(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/cliente/' + id)
            getAll()
        }
    }

    return (


        <Pagina titulo="cliente">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contato</th>
                        <th>Endereco</th>
                        <th>Plano Fidelidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cliente.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/cliente/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.contato}</td>
                            <td>{item.endereco}</td>
                            <td>{item.fidelidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Link href="/cliente/form" className="mb-2 btn btn-warning">
                    Adicionar
                </Link>
            </div>
        </Pagina>
    )
}

export default index