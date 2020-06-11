
const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const config = require('./index');

let connectDb = function(){
    mongoose.connect( config.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      } )
      .then(() => console.log("Connected to MongoDB..."))
        .catch(err => {
          console.error("Could not connect to MongoDB, exiting the application");
      });
}
module.exports = connectDb;