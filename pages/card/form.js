import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import cardValidator from '@/validators/cardValidator'
import { mask } from 'remask'


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
        axios.post('/api/card', dados)
        push('/card')
    }

    return (
        <Pagina titulo="card">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='Digite o Nome Completo'
                        {...register('nome', cardValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Coorporativo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.email}
                        type="email"
                        placeholder='Digite o Email coorporativo'
                        {...register('email', cardValidator.email)}  />
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
                        placeholder='Digite seu WhatsApp com DDD'    
                        {...register('contato', cardValidator.contato)}
                        onChange={handleChange}
                        ></Form.Control>
                    {
                        errors.contato &&
                        <p className='text-danger'>{errors.contato.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="empresa">
                    <Form.Label>Nome Empresa: </Form.Label>
                    <Form.Control
                        isInvalid={errors.empresa}
                        type="text"
                        placeholder='Digite o nome da Empresa'                  
                        {...register('empresa', cardValidator.empresa)}  />                   
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.empresa.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>CNPJ Empresa: </Form.Label>
                    <Form.Control
                        mask="99.999.999/9999-99"
                        maxLength={18}
                        isInvalid={errors.cnpj}
                        type="text"
                        placeholder='Digite o CNPJ da Empresa'
                        {...register('cnpj', cardValidator.cnpj)}
                        onChange={handleChange}  />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cnpj.message}</p>
                    }
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId='card'>
                    <Form.Label >Cartões para Empresas: </Form.Label>
                    <Form.Select isInvalid={errors.card} type="text" {...register('card', cardValidator.card)}>
                        <option>Quantidade de Cartões</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                    {
                        errors.card &&
                        <p className='text-danger'>{errors.card.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/card">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form