import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  channel: String,
  selectedFile: String,
  upvoteCount: {
    type: Number,
    default: 0
  },
  downvoteCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;