// TODO Config DB
import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

const urlDB: string = process.env.MONGO_URI!;

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(urlDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log(`MongoDb Conected on: ${db.connection.host}:${db.connection.port}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};
