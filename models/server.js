const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.routes();
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', require('../routes/users'));
    }

    listen(){
        this.app.listen(3000,()=>{
            console.log('Servidor corriendo en el puerto 3000');
        })
    }
}

module.exports = Server;