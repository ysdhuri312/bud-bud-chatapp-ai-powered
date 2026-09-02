import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: [true, 'User already register'],
    require: [true, 'Email must be required'],
  },
  password: { type: String, require: [true, 'Password must be required'] },
});

export const User = mongoose.model('user', userSchema);
