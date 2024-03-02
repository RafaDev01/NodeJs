// streams

const fs = require('fs')

const readStream = fs.createReadStream('./dados.txt', { encoding: 'utf-8'})
const escrita = fs.createWriteStream('./out.txt', { encoding: 'utf-8'})

readStream.on('data', (dados)=>{
    console.log('################################################################################################################################3')
    console.log(dados)
    escrita.write('\n\n============================================\n')
    escrita.write(dados)
})