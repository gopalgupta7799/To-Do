import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default class Database {
  static connect = () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => console.log('Database connected successfully'));
    mongoose.connection.on('diconnected', () => console.log('Database disconnected'));
    mongoose.connection.on('error', error => console.log(`Error while connecting with database`, error.message));
  }
}