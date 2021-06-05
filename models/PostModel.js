import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   title: {
       type: String,
       required: true
   },
   content: {
       type: String,
       required: true
   },
    picture: {
       type: String,

    }
});

export default mongoose.model('PostModel', PostModel);