import mongoose, { Document, model, Types } from 'mongoose';

interface IFriendDocument extends Document {
  userId: Types.ObjectId;
  friendId: Types.ObjectId;
}

const friendSchema = new mongoose.Schema<IFriendDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  friendId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const FriendModel =
  (mongoose.models.Friend as mongoose.Model<IFriendDocument>) ||
  model<IFriendDocument>('Friend', friendSchema);
