/******************************************************************************************************************
 * Objetivo: Arquivo de funções do projeto final
 * Data: 27/11/2024
 * Autor: Eduardo
 * Versão: 1.0
*******************************************************************************************************************/

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=>{
    //Permissão de acesso para quem irá chamar a API
    response.header('Access-Control-Allow-Origin', '*') // de vode pode vir a requisição

    //Permissão de acesso para quais métodos a API irá responder 
    response.header('Access-Control-Allow-Methods', 'GET')

    //Ativa as configurações do header para o cors
    app.use(cors())

    next()
})

const  lionSchool = require('./modulo/funcoes.js')

app.get('/v1/lion-school/cursos', cors(), async function(resquest, response){

    //chama a função que retorna todos os estados
    let dados = lionSchool.getListaCursos()

    //Resposta da API com JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado o curso'})
    }
})

app.get('/v1/lion-school/alunos', cors(), async function(request, response){

    let dados = lionSchool.getlistaAlunos()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado aluno'})
    }
})

app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){
    let statusA = request.query.status
    let curso = request.query.curso
    let statusDiciplina = request.query.disciplina
    let ano = request.query.ano

    let dados

    console.log(curso, ano)
    if(curso != '' && curso != undefined  && ano != '' && ano != undefined){
        dados = lionSchool.getMatriculaAno(ano, curso)
        
        console.log(dados)
    }else if(statusDiciplina != '' && statusDiciplina != undefined && curso != '' && curso != undefined){
        dados = lionSchool.getSituacaoAluno(curso, statusDiciplina )
        console.log('tchau')
    }else if(statusA != '' && statusA != undefined){
        dados = lionSchool.getListaStatus(statusA)
        console.log('web')
    }
     
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado a inforamçao requisitada'})
    }
       
})

app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response){

    let matricula = request.params.matricula
    let dados = lionSchool.getMatricula(matricula)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado um estado'})
    }
})

app.get('/v1/lion-school/alunos/cursos/:curso', cors(), async function(request,response){

    let matricula = request.params.curso

    let dados = lionSchool.getMatriculaCurso(matricula)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'Status': 404, 'message': 'Não foi encontrado um estado'})
    }
})


app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições..')
}) 