import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Image } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import restauranteValidator from '@/validators/restauranteValidator'
import { mask } from 'remask'
import Pagina from '@/components/Pagina'


const form = () => {


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [entregador, setEntregador] = useState([]);


    function getAll() {
        axios.get('/api/entregador').then(resultado => {
            setEntregador(resultado.data);
        });
    }

    useEffect(() => {
        getAll();
    }, []);

    function salvar(dados) {
        axios.post('/api/restaurante', dados)
        push('/restaurante')
    }

    return (
        <Pagina titulo="restaurante">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Empresa: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='Digite o nome da Empresa'
                        {...register('nome', restauranteValidator.nome)} />
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
                        type="text"
                        placeholder='Digite o Telefone da Empresa'
                        {...register('telefone', restauranteValidator.telefone)} 
                        onChange={handleChange}/>
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                         mask='99.999-999'
                         maxLength={10}
                        isInvalid={errors.cep}
                        type="text"
                        placeholder='Digite o CEP do seu estabelecimento'
                        {...register('cep', restauranteValidator.cep)}
                        onChange={handleChange}></Form.Control>
                    {
                        errors.cep &&
                        <p className='text-danger'>{errors.cep.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="entrega">
                    <Form.Label>Tempo Entrega</Form.Label>
                    <Form.Control
                        isInvalid={errors.entrega}
                        type="text"
                        placeholder='Digite o tempo estimado de Entrega'
                        {...register('entrega', restauranteValidator.entrega)}></Form.Control>
                    {
                        errors.entrega &&
                        <p className='text-danger'>{errors.entrega.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="funcionamento">
                    <Form.Label>Horário Funcionamento</Form.Label>
                    <Form.Control
                        isInvalid={errors.funcionamento}
                        mask={'00'}
                        type="time"
                        placeholder='Informe o Horário de funcionamento'
                        onChange={handleChange}
                        {...register('funcionamento', restauranteValidator.funcionamento)} />

                    {
                        errors.funcionamento &&
                        <p className='text-danger'>{errors.funcionamento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="avaliacao">
                    <Form.Label>Avaliacao</Form.Label>
                    <Form.Control
                        isInvalid={errors.avaliacao}
                        mask={'99'}
                        type="text"
                        placeholder='Informe o Horário de avaliacao'
                        onChange={handleChange}
                        {...register('avaliacao', restauranteValidator.avaliacao)} />

                    {
                        errors.avaliacao &&
                        <p className='text-danger'>{errors.avaliacao.message}</p>
                    }
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId='entregador'>
                    <Form.Label >Selecionar Entregador: </Form.Label>
                    <Form.Control
                        as="select"
                        isInvalid={errors.entregador}
                        isValid={!errors.entregador}
                        {...register('entregador', restauranteValidator.nome)}
                        style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
                    >
                        <option value="">Selecione o entregador</option>
                        {entregador.map((item, index) => (
                            <option key={index} value={item.nome}>
                                {item.nome}
                            </option>
                        ))}
                    </Form.Control>

                    {
                        errors.entregador &&
                        <p className='text-danger'>{errors.entregador.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant='warning' onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Confirmar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/restaurante">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form