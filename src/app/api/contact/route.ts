import { type NextRequest, NextResponse } from 'next/server';
import { getContactsCollection } from '@/lib/mongodb';
import { checkRateLimit } from '@/lib/ratelimit';

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const { allowed, retryAfterSec } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfterSec}s.` },
      { status: 429, headers: { 'Retry-After': String(retryAfterSec) } }
    );
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof subject !== 'string' || !subject.trim() ||
    typeof message !== 'string' || !message.trim()
  ) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  try {
    const collection = await getContactsCollection();
    await collection.insertOne({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      ip,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}
