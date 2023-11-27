const restauranteValidator = {
    nome: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 2,
            message: 'Valor minímo 2'
        },
        maxLength: {
            value: 70,
            message: 'O Máximo é 70'

        }
    },
    telefone: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 10,
            message: 'Valor minímo 10'
        },
        maxLength: {
            value: 14,
            message: 'O Máximo é 14'

        },
    },
    cep: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 10,
            message: 'Valor minímo 10'
        },
        maxLength: {
            value: 11,
            message: 'O Máximo é 11'
        }
    },
    entrega: {
        pattern: {
            value: /^\d+-\d+ minutos$/, // Regex pattern para validar o formato do intervalo de tempo
            message: 'Digite o tempo estimado de Entrega no formato correto (ex: 55-75 minutos)',
          },
    },
    funcionamento: {
        required: 'Campo Obrigatorio',
    },
    avaliacao: {
        required: 'Campo Obrigatorio',
    }


}

export default restauranteValidator