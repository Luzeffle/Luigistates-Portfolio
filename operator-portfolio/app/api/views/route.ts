import { createClient } from 'redis';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Connect using YOUR specific variable name
    const redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();

    // 2. Get the views
    const views = await redis.get("firefly_views");
    
    // 3. Disconnect
    await redis.disconnect();

    return NextResponse.json({ views: views ? parseInt(views) : 0 });
  } catch (error) {
    console.error("DATABASE GET ERROR:", error);
    return NextResponse.json({ error: "Failed to read database" }, { status: 500 });
  }
}

export async function POST() {
  try {
    const redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();

    const newViews = await redis.incr("firefly_views");
    
    await redis.disconnect();

    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error("DATABASE POST ERROR:", error);
    return NextResponse.json({ error: "Failed to add +1 to database" }, { status: 500 });
  }
}