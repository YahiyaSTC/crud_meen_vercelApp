const mongoose = require("mongoose");

const connectDB = async () => {
  let uri = "mongodb+srv://yahiyastc:HhtbKyyQ7xbufZhH@cluster0.9mqjtwm.mongodb.net/crudOperationsApp"
  try {
      // const conn = await mongoose.connect(process.env.MONGO_URI);
      const conn = await mongoose.connect(uri);
      console.log(`Database Has Been Connected ${conn.connection.host}/${conn.connection.name}`)
    //   console.log(process.mainModule.path);
  } catch (error) {
      console.log(error)
      process.exit(1)
  }
};

module.exports = connectDB;
