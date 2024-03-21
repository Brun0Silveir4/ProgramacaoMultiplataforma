const Sequelize = require('sequelize')
const sequelize = new Sequelize('exemplo', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}).catch((e) => {
    console.log(`Erro ao conectar ${e}`)
})

const Agendamentos = sequelize.define('agendamentos', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    }
})

// Agendamentos.sync({force: true})

// Agendamentos.create({
//     nome: 'Bruno',
//     endereco: 'Av Aguia de haia',
//     bairro: 'Jd São Nicolau',
//     cep: '0390-000',
//     cidade: 'São Paulo',
//     estado: 'Sp'
// })