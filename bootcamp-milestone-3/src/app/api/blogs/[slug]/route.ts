import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
    params: {
        slug: string;
    }
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;

    try {
        // Fetch blog by slug (without populate if comments are embedded)
        const blog = await Blog.findOne({ slug }).orFail();
        
        console.log("Fetched Blog with Embedded Comments:", blog);  // Log the blog with comments

        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json('Blog not found.', { status: 404 });
    }
}

// POST for adding comments
export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;

    try {
        // Parse the incoming JSON body
        const { user, comment } = await req.json();

        // Validate user and comment
        if (!user || !comment) {
            return NextResponse.json(
                { error: 'User and comment are required' }, 
                { status: 400 }
            );
        }

        // Find the blog post by slug
        const blog = await Blog.findOne({ slug }).orFail();
        
        // Create a new comment object
        const newComment = {
            user,
            comment,
            time: new Date(),  // Automatically set the current date and time
        };

        // Push the new comment into the blog's comments array
        blog.comments.push(newComment);

        // Save the blog with the new comment
        await blog.save();

        // Return the updated blog post with the new comment
        return NextResponse.json(blog);
    } catch (err) {
        console.error('Error adding comment:', err);
        return NextResponse.json({ error: 'Error adding comment' }, { status: 500 });
    }
}