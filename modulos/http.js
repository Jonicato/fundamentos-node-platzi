const http = require('http');

function router(req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;
        
        default:
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }

    /* Escribir respuesta al usuario */
    res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'});

    res.end();
}

http.createServer(router).listen(3000);

function hola() {
    return 'Hola, que tal';
}

console.log('Escuchando http en el puerto 3000');