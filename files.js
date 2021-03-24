const fs = require('fs')

// => file system

fs.writeFile ('myFile.txt', 'Mensagem qualquer', (err) => {
    if(err){
        console.log("Error: "+err.message)
    }
})