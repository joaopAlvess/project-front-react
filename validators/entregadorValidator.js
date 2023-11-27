const entregadorValidator = {
    nome: {
        required: 'O Campo Nome é Obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'

        }
    },
    telefone: {
        required: 'O Campo Telefone é Obrigatorio',
        minLength: {
            value: 9,
            message: 'o minimo é 9'
        },
        maxLength: {
            value: 14,
            message: 'O Máximo é 14'

        },        
    },
    restaurante: {
        required: 'campo obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'

        }
    },
    cpf: {
        required:'O Campo CPF é Obrigatório',
        minLength: {
            value: 9,
            message: 'o minimo é 9'
        },
        maxLength: {
            value: 14,
            message: 'O Máximo é 14'

        }, 
    }
   
    
}


export default entregadorValidator