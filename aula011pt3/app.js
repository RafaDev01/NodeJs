//NodeJS módulo File System

const fs = require('fs')

//fs.appendFileSync('./dados.txt', ' Carlos\n', (err) => {
//    console.log(err)
//})

//write file - append
fs.appendFileSync('./dados.txt', 'Rafael\n')

console.log('Ultima operação')