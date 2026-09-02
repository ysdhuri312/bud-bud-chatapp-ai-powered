import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  try {
    mongoose.connect(uri as string);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // Exit process with failure
  }

  const dbConnection = mongoose.connection;
  dbConnection.once('open', (_) => {
    console.log(`Database connected: ${uri}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
};
