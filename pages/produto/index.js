import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Image, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [produto, setProduto] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/produto').then(resultado => {
            setProduto(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/produto/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="produto">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Restaurante</th>
                        <th>Nome Produto</th>
                        <th>Preco Produto</th>
                        <th>Informações Pagamento</th>
                        <th>Informações Adicionais</th>
                    </tr>
                </thead>
                <tbody>
                    {produto.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/produto/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.restaurante}</td>
                            <td>{item.produto}</td>
                            <td>{item.preco}</td>
                            <td>{item.pagamento}</td>
                            <td>{item.infos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Link href="/produto/form" className="mb-2 btn btn-warning">
                    Adicionar
                </Link>
            </div>
        </Pagina>
    )
}

export default index