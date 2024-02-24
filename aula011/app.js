//NodeJS módulo File System

const fs = require('fs')

//reading files
if(fs.existsSync('./dados.csv')){
    let dados = fs.readFileSync('./dados.csv')
    console.log(dados.toString())
}else{
    console.log('Ficheiro não encontrado')
}

console.log('Ultima operação')