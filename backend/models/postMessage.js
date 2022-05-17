import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  category: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    defaullt: 0
  },
  createdAt: {
    type: Date,
  }
})

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;