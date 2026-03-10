import { createClient } from 'redis';
import { NextResponse } from 'next/server';

// Prevents Next.js from freezing the view count
export const dynamic = 'force-dynamic'; 

export async function GET() {
  // 1. Initialize and connect using Vercel's environment variable
  const redis = createClient({ url: process.env.KV_URL });
  await redis.connect();

  // 2. Fetch the current views
  const currentViews = await redis.get("firefly_views");
  
  // 3. Disconnect so we don't overload the server
  await redis.disconnect();

  // 4. Return the result (if it's null, return 0)
  return NextResponse.json({ views: currentViews ? parseInt(currentViews) : 0 }, { status: 200 });
}

export async function POST() {
  const redis = createClient({ url: process.env.KV_URL });
  await redis.connect();

  // 2. The 'incr' command automatically adds +1 to the database
  const newViews = await redis.incr("firefly_views");
  
  await redis.disconnect();

  return NextResponse.json({ views: newViews }, { status: 200 });
}