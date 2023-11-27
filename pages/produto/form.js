import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import produtoValidator from '@/validators/produtoValidator'
import { mask } from 'remask'
import restauranteValidator from '@/validators/restauranteValidator'


const form = () => {


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [restaurante, setRestaurante] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurante(resultado.data);
        });
    }

    function salvar(dados) {
        axios.post('/api/produto', dados)
        push('/produto')
    }

    return (
        <Pagina titulo="produto">
            <Form>
                <Form.Group as={Col} className="mb-3" controlId='restaurante'>
                    <Form.Label >Restaurante Selecionado: </Form.Label>
                    <Form.Control
                        as="select"
                        isInvalid={errors.restaurante}
                        isValid={!errors.restaurante}
                        {...register('restaurante', restauranteValidator.restaurante)}
                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                    >
                        <option value="">Selecione a restaurante</option>
                        {restaurante.map((item, index) => (
                            <option key={index} value={item.nome}>
                                {item.nome}
                            </option>
                        ))}
                    </Form.Control>

                    {
                        errors.restaurante &&
                        <p className='text-danger'>{errors.restaurante.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="produto">
                    <Form.Label>Nome do Produto: </Form.Label>
                    <Form.Control
                        isInvalid={errors.produto}
                        type="produto"
                        placeholder='Informe o nome do Produto'

                        {...register('produto', produtoValidator.produto)} />
                    {
                        errors.produto &&
                        <p className='text-danger'>{errors.produto.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="preco">
                    <Form.Label>Preço do Produto </Form.Label>
                    <Form.Control
                        isInvalid={errors.preco}
                        type='text'
                        placeholder='Informe o valor do Produto'
                        {...register('preco', produtoValidator.preco)}
                    ></Form.Control>
                    {
                        errors.preco &&
                        <p className='text-danger'>{errors.preco.message}</p>
                    }
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId='pagamento'>
                    <Form.Label >Informações de Pagamento: </Form.Label>
                    <Form.Select isInvalid={errors.pagamento} type="text" {...register('pagamento', produtoValidator.pagamento)}>
                        <option>Forma de Pagamento</option>
                        <option>Cartão de Crédito</option>
                        <option>Cartão de Debito</option>
                        <option>Dinheiro</option>
                        <option>Pix</option>
                    </Form.Select>
                    {
                        errors.topicos &&
                        <p className='text-danger'>{errors.pagamento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="infos">
                    <Form.Label>Informações adicionais</Form.Label>
                    <Form.Control
                        isInvalid={errors.infos}
                        type="infos"
                        placeholder='Ex: Retirar salada, carne ao ponto...'

                        {...register('infos', produtoValidator.infos)} />

                    {
                        errors.infos &&
                        <p className='text-danger'>{errors.infos.message}</p>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/produto">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form