// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { getPortfolios } from '@/database/db'; 

export async function GET() {
  const portfolios = await getPortfolios();
  
  if (!portfolios) {
    return NextResponse.json({ message: 'No portfolios found for kevin' }, { status: 404 });
  }
  
  return NextResponse.json(portfolios);
}
