import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [entregador, setEntregador] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/entregador').then(resultado => {
            setEntregador(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/entregador/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="entregador">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Restaurante</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {entregador.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/entregador/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.restaurante}</td>
                            <td>{item.cpf}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Link href="/entregador/form" className="mb-2 btn btn-warning">
                    Adicionar
                </Link>
            </div>
        </Pagina>
    )
}

export default index