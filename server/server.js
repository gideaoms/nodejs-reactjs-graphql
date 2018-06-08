const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./schema/schema");

const app = express();

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://gideao:gideao1990@ds239359.mlab.com:39359/graphql-data"
    );

    app.use(cors());
    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true
      })
    );

    app.listen(3001, () => console.log("Running"));
  } catch (err) {
    console.error(err);
  }
};

start();
