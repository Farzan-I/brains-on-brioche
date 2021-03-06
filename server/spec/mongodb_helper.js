var mongoose = require("mongoose");
import {setCollectionName} from "../models/user.js"
import dotenv from "dotenv";

beforeAll(function (done) {
  mongoose.connect("mongodb+srv://BoBTest:brainsonbriochetest@cluster0.3x6pb1s.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
