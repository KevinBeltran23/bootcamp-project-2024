import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
	title: string;
	slug: string; 
	date: Date;
	description: string; // for preview
	content: string; // for individual blog page
	comments: IComment[]; // array for comments
};

type IComment = {
	user: string;
	comment: string;
	time: Date;
}

const commentSchema = new Schema<IComment>({
	user: { type: String, required: true },
	comment: { type: String, required: true },
	time: { type: Date, default: new Date() },
});

// mongoose schema 
const blogSchema = new Schema<Blog>({
	title: { type: String, required: true },
	slug: { type: String, required: true },
	date: { type: Date, required: false, default: new Date()},
	description: { type: String, required: true },
	content: { type: String, required: true },
	comments: [commentSchema] 
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;