routes.get('/bem_vindo', (reg, res) => {
    res.jason({name: 'Bem vindo'})
})

routes.post('/alunos', (reg, res)=> {
    res.jason({name: 'aluno criado'})
})