const avaliacaoValidator = {
    nome: {
        required: 'Campo Nome Obrigatorio',
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
        required: 'Campo Email Obrigatorio',
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
    empresa: {
        required: 'Campo Nome Empresa brigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'
        }
    },
    cnpj: {
        required:'Campo CNPJ obrigatorio',
        minLength: {
            value: 10,
            message: 'o minimo é 10'
        },
        maxLength: {
            value: 20,
            message: `O maximo é 20`
        }
    },
    card: {
        required:'É obrigatorio ao menos 1',
    }
    
}


export default avaliacaoValidator