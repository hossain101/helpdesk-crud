import mongoose from "mongoose";
let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return mongoose.connection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return mongoose.connection;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
