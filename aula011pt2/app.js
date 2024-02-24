//NodeJS módulo File System

const fs = require('fs')

//write file
fs.writeFile('./dados.txt', 'Rafael Nascimentoooooo', ()=> {
    console.log('Ficheiro escrito')
})

fs.writeFileSync('./dados4.txt', 'Ana Silva')

console.log('Ultima operação')