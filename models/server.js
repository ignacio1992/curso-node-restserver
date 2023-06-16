const express = require('express')
const cors = require('cors')


class Serve {

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 3000,
        this.usuariosRoutePath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mis aplicaciones
        this.routes();
    }

    middlewares (){

        // CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico 
        this.app.use( express.static('public') )

    }

    routes() {

          this.app.use(this.usuariosRoutePath, require('../routes/user'));
    
    }

    listen(){
        this.app.listen(this.port, ()=>{  
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}



module.exports = Serve;
