const feedbackValidator = {
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
    produto: {
        required: 'campo obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 30,
            message: 'O Máximo é 30'

        },        
    },
    preco: {
        required:'campo obrigatorio',
    },
    pagamento: {
        required:'campo obrigatorio',
    },
    infos: {
        required:'campo obrigatorio',
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'
        }
    }
   
    
}


export default feedbackValidator