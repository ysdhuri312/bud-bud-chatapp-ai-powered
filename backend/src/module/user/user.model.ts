import mongoose, { Document, model } from 'mongoose';
import type { IUser } from './user.schema.js';
interface IUserDocument extends IUser, Document {}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    clerkId: { type: String, required: true, unique: true },
    userName: {
      type: String,
      require: [true, 'Username must be required'],
      unique: true,
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      require: [true, 'Email id must be required'],
      unique: true,
    },
    avatar: String,
    status: {
      type: String,
      enum: ['online', 'offline'],
      default: 'offline',
    },
    about: String,
  },
  { timestamps: true },
);

const UserModel =
  (mongoose.models.User as mongoose.Model<IUserDocument>) ||
  model<IUserDocument>('User', userSchema);
export default UserModel;
