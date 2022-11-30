const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.status(200).send("<p>Hello world == Olá mundo</p>");
})

app.get('/users', (req, res) => {
    const users = [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
    ];
    res.status(200).json(users);
})

const port = 8081

app.listen(port, () => console.log('Rodando na porta 8081'))