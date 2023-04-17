const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    /**
     * Definimos las rutas
     */
    routes(){
        this.app.use('/api/users', require('../routes/users'));
        this.app.use('/api/products', require('../routes/product.routes'));
    }

    listen(){
        this.app.listen(3000,()=>{
            console.log('Servidor corriendo en el puerto 3000');
        })
    }
}

module.exports = Server;