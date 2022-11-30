const fs = require('fs');
const path = require('path');

//Criar uma pasta
// fs.mkdir(
//     path.join(__dirname, '/teste'),
//     (error) => {
//     if (error) {
//         return console.log('Esse foi o erro: ', error);
//     }
//     console.log('Pasta criada com sucesso!');
// })

//Criar um arquivo
// fs.writeFile(
//     path.join(__dirname, '/teste', 'test.txt'),
//     'hello node!',
//     (error) => {
//         if (error) {
//             return console.log('Esse foi o erro: ', error)
//         }
//         console.log('Arquivo criada com sucesso!');
//     })

//Adicionar à um arquivo
// fs.appendFile(
//     path.join(__dirname, 'teste', 'test.txt'),
//     'From KASTEH',
//     (error) => {
//         if (error) {
//             return console.log('Esse foi o erro: ', error)
//         }
//         console.log('Arquivo modificado com sucesso!');
//     })

// Ler um arquivo

fs.readFile(path.join(__dirname, 'teste', 'test.txt'), 'utf8', (error, data) => {
    if (error) {
        return console.log('Esse foi o erro: ', error)
    }
    console.log(data)
})