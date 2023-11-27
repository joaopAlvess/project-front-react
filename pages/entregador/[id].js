import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';
import entregadorValidator from '@/validators/entregadorValidator';
import restauranteValidator from '@/validators/entregadorValidator';
import Pagina from '@/components/Pagina';

const form = () => {


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }

    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [restaurante, setRestaurante] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurante(resultado.data);
        });
    }


    useEffect(() => {
        if (query.id) {
            axios.get('/api/entregador/' + query.id).then(resultado => {
                const entregador = resultado.data

                for (let atributo in entregador) {
                    setValue(atributo, entregador[atributo])
                }
            })
        }
    }, [query.id])


    const opcoesEntregas = ['Carro', 'Moto', 'Bicicleta', 'Outros'];


    const salvar = (dados) => {
        dados.entregas = entregasSelect;
        axios.post('/api/entregador', dados);
        push('/entregador');
    };

    const handleCheckboxChange = (event) => {
        const valor = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setEntregasSelect([...entregasSelect, valor]);
        } else {
            const atualizados = entregasSelect.filter((recurso) => recurso !== valor);
            setEntregasSelect(atualizados);
        }
    };



    return (
        <Pagina titulo="entregador">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='Digite seu Nome'
                        {...register('nome', entregadorValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        mask='(99)99999-9999'
                        maxLength={14}
                        isInvalid={errors.telefone}
                        type="telefone"
                        placeholder='Digite seu Telefone'
                        {...register('telefone', entregadorValidator.telefone)}
                        onChange={handleChange} />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control
                        mask='999.999.999-99'
                        maxLength={14}
                        isInvalid={errors.cpf}
                        type="cpf"
                        placeholder='Digite seu CPF'
                        {...register('cpf', entregadorValidator.cpf)}
                        onChange={handleChange} />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>
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

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/entregador">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form