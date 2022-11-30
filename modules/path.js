const path = require('path');

// Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename))

// Dirname - Nome do diretório atual
console.log(path.dirname(__filename))

// Extname - Extensão do arquivo atual
console.log(path.extname(__filename))

// Parse - Criar Objeto {} Path
console.log(path.parse(__filename))

// Join - Juntar caminhos de arquivos
console.log(path.join(__dirname, 'foo'))
console.log(path.join(__dirname, 'foo', 'bar'))
console.log(path.join(__dirname, "foo", "bar", 'teste.html'));