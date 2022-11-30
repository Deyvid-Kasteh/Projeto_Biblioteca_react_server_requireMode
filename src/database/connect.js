const mongoose = require('mongoose');
const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@biblio.bvlodsu.mongodb.net/?retryWrites=true&w=majority`,
      (error) => {
        if (error) {
          return console.log(
            "Ocorreu um erro ao se conectar ao banco de dados",
            error
          );
        }
        return console.log("Conexão estabelecida com sucesso!");
      }
    );
}

module.exports = connectToDatabase