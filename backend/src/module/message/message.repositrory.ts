import MessageModel from './message.model.js';

export class MessageRepository {
  addMessages = async (
    currentUser: string,
    receiverId: string,
    message: string,
  ) => {
    return MessageModel.create({
      senderId: currentUser,
      receiverId,
      text: message,
    });
  };
}
