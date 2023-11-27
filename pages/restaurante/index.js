import Pagina from '@/components/Pagina'
import axios from 'axios'
import { Chart } from 'chart.js'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Card, Image, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [restaurante, setRestaurante] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurante(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/restaurante/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="restaurante">


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome Empresa</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Tempo Entrega</th>
                        <th>Horário Funcionamento</th>
                        <th>Avaliacao</th>
                        <th>Entregador</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurante.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/restaurante/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{item.entrega}</td>
                            <td>{item.funcionamento}</td>
                            <td>{item.avaliacao}</td>
                            <td>{item.entregador}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-flex justify-content-center align-items-center">
                <Link href="/restaurante/form" className="mb-2 btn btn-warning">
                    Adicionar
                </Link>
            </div>
        </Pagina>
    )
}

export default index