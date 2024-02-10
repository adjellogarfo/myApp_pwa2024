//integracao ao modulo Express
const express = require('express');

const app = express ();

/*responder com "Bem vindo ao myApp" 
quando é efectuado um pedido 
GET para o endereco "/" ou pagina inicial */

app.get('/', (req, res) => res.send('Hello World!'));

/*iniciar a porta 3000 para 
responder aos pedidos de clientes */

app.listen(3000, () => 
console.log("A aplicacao myApp esta' pronta para receber pedidos na porta 3000!")
);
