import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      require: true,
      unique: [true, 'Email must be require'],
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

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
