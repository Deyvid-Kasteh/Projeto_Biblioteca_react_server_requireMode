const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Welcome to home page</h1>')
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'John Doe',
                email: 'john@example.com'
            },
            {
                name: 'Jane Doe',
                email: 'jane@example.com'
            }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})