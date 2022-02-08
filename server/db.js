import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    // process.exit(1);
  }
};
