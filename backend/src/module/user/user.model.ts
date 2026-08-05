import mongoose, { Document, model } from 'mongoose';
import type { IUser } from './user.schema.js';
interface IUserDocument extends IUser, Document {}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    clerkId: String,
    userName: {
      type: String,
      require: true,
      unique: [true, 'Username must be require'],
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      require: true,
      unique: [true, 'Emailid must be require'],
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
