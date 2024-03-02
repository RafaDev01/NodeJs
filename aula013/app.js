//NodeJS módulo File System

const fs = require('fs')

// delete files 
if(fs.existsSync('./dados1.txt')){
    fs.rm('./dados1.txt', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Ficheiro eliminado com sucesso.')
        }
    })
}else{
    console.log('O ficheiro não existe')
}