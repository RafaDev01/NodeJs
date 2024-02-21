const fs = require('fs')

// create folder 
/*
if(!fs.existsSync('./pasta3')){
    fs.mkdir('./pasta3', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Pasta criada com sucesso')
        }
    })
}else{
    console.log('A pasta ja existe')
}
*/

//remove folder
if(fs.existsSync('./pasta1')){
    fs.rm('./pasta1', { recursive: true } ,(err)=> {
        if(err){
            console.log(err)
        }
    })
}else{
    console.log('Pasta inexistente')
}

console.log('terminado')