const clienteValidator = {
    nome: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'

        }
    },
    email: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|com.br)$/,
            message: 'digite um e-mail válido!',
        },
    },
    contato: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 10,
            message: 'O valor minimo é 10'
        },
        maxLength: {
            value: 20,
            message: 'O valor máximo é 14'
        }
    },
    endereco: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 5,
            message: 'Digite seu endereco completo'
        },
    },
    fidelidade: {
        required: 'Campo Obrigatorio',
    }


}


export default clienteValidator