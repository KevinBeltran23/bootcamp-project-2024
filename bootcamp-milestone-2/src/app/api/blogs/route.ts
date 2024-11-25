// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { getBlogs } from '@/database/db'; // Import your getBlogs function

export async function GET() {
  const blogs = await getBlogs();
  
  if (!blogs) {
    return NextResponse.json({ message: 'No blogs found for kevin' }, { status: 404 });
  }
  
  return NextResponse.json(blogs);
}
