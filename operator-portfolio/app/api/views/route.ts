import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

// This runs when the page first loads to just GET the current views
export async function GET() {
  try {
    const views = await kv.get('firefly_views') || 0;
    return NextResponse.json({ views });
  } catch (error) {
    return NextResponse.json({ views: 0 });
  }
}

// This runs when they click "Initiate" to ADD +1 to the views
export async function POST() {
  try {
    // .incr() automatically adds 1 to the number in the database
    const views = await kv.incr('firefly_views');
    return NextResponse.json({ views });
  } catch (error) {
    return NextResponse.json({ views: 0 });
  }
}