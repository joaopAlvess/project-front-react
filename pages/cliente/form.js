import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import clienteValidator from '@/validators/clienteValidator'
import { mask } from 'remask';


const form = () => {

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        axios.post('/api/cliente', dados)
        push('/cliente')
    }

    return (
        <Pagina titulo="cliente">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Cliente: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='Digite o nome do Cliente'
                        {...register('nome', clienteValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        isInvalid={errors.email}
                        type="text"
                        placeholder='Digite o seu Email'

                        {...register('email', clienteValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="contato">
                    <Form.Label>Contato: </Form.Label>
                    <Form.Control
                        mask='(99)99999-9999'
                        maxLength={14}
                        isInvalid={errors.contato}
                        type="text"
                        placeholder='Digite o seu Contato'
                        {...register('contato', clienteValidator.contato)}
                        onChange={handleChange}></Form.Control>
                    {
                        errors.contato &&
                        <p className='text-danger'>{errors.contato.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereco: </Form.Label>
                    <Form.Control
                        isInvalid={errors.endereco}
                        type="text"
                        placeholder='Digite o seu Endereco'
                        {...register('endereco', clienteValidator.endereco)}></Form.Control>
                    {
                        errors.endereco &&
                        <p className='text-danger'>{errors.endereco.message}</p>
                    }
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId='fidelidade'>
                    <Form.Label >Fidelidade: </Form.Label>
                    <Form.Select isInvalid={errors.fidelidade} type="text" {...register('fidelidade', clienteValidator.fidelidade)}>
                        <option>Cliente Fidelidade</option>
                        <option>Sim</option>
                        <option>Não</option>
                    </Form.Select>
                    {
                        errors.fidelidade &&
                        <p className='text-danger'>{errors.fidelidade.message}</p>
                    }
                </Form.Group>
                <div className='text-center'>
                    <Button variant='warning' onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Confirmar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cliente">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form