/******************************************************************************************************************
 * Objetivo: Arquivo de funções do projeto final
 * Data: 27/11/2024
 * Autor: Eduardo
 * Versão: 1.0
*******************************************************************************************************************/

var alunos =  require('./alunos')
var curso = require('./cursos')

const getListaCursos = function(){
    let listaCurso = curso
    let lista = []
    let c = {}
    let status = false
    
    listaCurso.cursos.forEach(function(item){
        status = true
        lista.push(item)
        
    })
    c = lista
    if(status == true){
        return c
    }else{
        return status
    }

}

const getlistaAlunos = function(){
    let aluno = alunos
    let informacaoAlunos = []
    let status = false
    let dadosAluno = {}

    aluno.alunos.forEach(function(item){
        status = true
        dadosAluno.foto = item.foto
        dadosAluno.nome = item.nome
        dadosAluno.matricula = item.matricula
        dadosAluno.sexo = item.sexo
        dadosAluno.curso = item.curso
        dadosAluno.status = item.status
        informacaoAlunos.push(item)

    })
    if(status == true){
        return informacaoAlunos
    }else{
        return false
    }
    
}

const getMatricula = function(id){
    let matricula = Number(id)
    let alunoss = alunos.alunos
    let alunosJSON = {}
    let status = false

    alunoss.forEach(function(item){
        if(Number(item.matricula) == matricula){
            status = true
            alunosJSON.foto = item.foto
            alunosJSON.nome = item.nome
            alunosJSON.matricula = item.matricula
            alunosJSON.curso = item.curso
            
        }
        
    })
    if(status == true){
        return alunosJSON
    }else{
        return false
    }
    
}

const getMatriculaCurso = function(matriculaC){
    let sigla = String(matriculaC).toUpperCase()
    let alunoss = alunos.alunos
    let nomeCurso = []
    let status = false
    let siglasCurso = {}

    alunoss.forEach(function(itemC){
        alunoss = itemC.curso
        itemC.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == sigla){
                status = true
                let listaAlunos = {}
                listaAlunos.foto = itemC.foto
                listaAlunos.nome = itemC.nome
                listaAlunos.matricula = itemC.matricula
                listaAlunos.sexo = itemC.sexo
                listaAlunos.curso = itemC.curso
                listaAlunos.status = itemC.status
                nomeCurso.push(listaAlunos)
             }
        })
        
    })
    siglasCurso.curso = sigla
    siglasCurso.aluno = nomeCurso
    if(status == true){
        return siglasCurso
    }else{
        status = false
    }
}

const getListaStatus = function(Status){
    let statusAluno = String(Status).toUpperCase()
    let dadosAlunos = alunos.alunos
    let situacao = []
    let resultado = {}
    let status = false
  
    dadosAlunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusAluno){
            status = true
            let listaAlunos = {}
                listaAlunos.foto = item.foto
                listaAlunos.nome = item.nome
                listaAlunos.matricula = item.matricula
                listaAlunos.sexo = item.sexo
                listaAlunos.curso = item.curso
                listaAlunos.status = item.status
                situacao.push(listaAlunos)
        }
    })
    resultado.status = statusAluno
    resultado = situacao
    if(status == true){
        return resultado
    }else{
        return false
    }

    

        
}

const getSituacaoAluno = function(nomeSigla, nomeStatus){
    let siglas = String(nomeSigla).toUpperCase()
    let statusAluno = String(nomeStatus).toUpperCase()
    let aluno = []
    let estudante = {}
    let situacao = alunos.alunos
    let status  = false

    situacao.forEach(function(itemSigla){
        situacao.push(itemSigla)
            itemSigla.curso.forEach(function(itemS){
                if(String(itemS.sigla).toUpperCase() == siglas){
                    status = true
                    let dadosAluno = {}

                   dadosAluno.foto = itemSigla.foto
                   dadosAluno.nome = itemSigla.nome
                   dadosAluno.matricula = itemSigla.matricula
                   dadosAluno.sexo = itemSigla.sexo
                   dadosAluno.curso = itemSigla.curso
                   dadosAluno.sigla = itemS.sigla

                   itemS.disciplinas.forEach(function(itemDiciplina){
                        if(String(itemDiciplina.status).toUpperCase() == statusAluno){

                            dadosAluno.carga = itemDiciplina.carga
                            dadosAluno.media = itemDiciplina.media
                            dadosAluno.status = itemDiciplina.status

                            aluno.push(dadosAluno)
                        }
                   })
                }
            })
       
        estudante.dados = aluno
        

    })


    if(status == true){
        return estudante
    }else{
        return status
    }
}

const getMatriculaAno = function(matriculaAno, siglaCurso){
    let anoMatricula = Number(matriculaAno)
    let sigla = String(siglaCurso).toUpperCase()
    let aluno = [] 
    let estudante = {}
    let situacao = alunos.alunos
    let status = false

    situacao.forEach(function(item){
        situacao = item.curso
        item.curso.forEach(function(itemCurso){
            if(String(itemCurso.sigla).toUpperCase() == sigla){
               if(Number(itemCurso.conclusao) == anoMatricula){
                
                status = true
                let dadosAlunos = {}
                dadosAlunos.foto =  item.foto
                dadosAlunos.nome = item.nome
                dadosAlunos.matricula = item.matricula
                dadosAlunos.sexo = item.sexo
                dadosAlunos.curso = item.curso
                dadosAlunos.status = item.status
                aluno.push(dadosAlunos)
               }
            }
        })
    })
    estudante.ano_conclusao = anoMatricula
    estudante.alunos = aluno

    if(status == true){
        return estudante
    }else{
        return status
    }
    
}

// console.log(getMatriculaCurso('ds'))

//console.log(getMatriculaAno('2022', 'ds'))

module.exports = {
    getListaCursos,
    getlistaAlunos,
    getMatricula,
    getMatriculaCurso,
    getListaStatus,
    getSituacaoAluno,
    getMatriculaAno
}


