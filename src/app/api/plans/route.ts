import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://apis.storentia.com/v1/public/plans", {
    headers: { accept: "application/json" },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json({ success: false }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
