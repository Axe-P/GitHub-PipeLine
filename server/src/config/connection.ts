import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

mongoose.connect(mongoUri);

export default mongoose.connection;
