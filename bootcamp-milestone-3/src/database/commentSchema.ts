import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IComment = {
	user: string;
	comment: string; 
	date: Date;
};


// mongoose schema 
const commentSchema = new Schema<IComment>({
	user: { type: String, required: true },
	comment: { type: String, required: true },
	date: { type: Date, required: false, default: new Date()}
})

// defining the collection and model
const Comment = mongoose.models['comments'] ||
    mongoose.model('comments', commentSchema);

export default IComment;