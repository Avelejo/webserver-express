const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-type': 'application/json' })

        // res.write('hola mundo');
        let salida = {
            nombre: 'Antonio',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchand el puerto 8080');