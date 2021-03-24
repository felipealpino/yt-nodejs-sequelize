const fs = require('fs')

// => file system

// fs.writeFile ('myFile.txt', 'Mensagem qualquer', (err) => {
//     if(err){
//         console.log("Error: "+err.message)
//     }
// })

fs.readFile('myFile.txt', (err, data) => { 
    try{
        console.log(data.toString('utf-8'))
    } catch(error) {
        console.log("Ocorreu algum error não esperado")
    }
})