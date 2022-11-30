const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-rba8asa-shard-00-00.mvy9ihr.mongodb.net:27017,ac-rba8asa-shard-00-01.mvy9ihr.mongodb.net:27017,ac-rba8asa-shard-00-02.mvy9ihr.mongodb.net:27017/?ssl=true&replicaSet=atlas-1l0pjz-shard-0&authSource=admin&retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;