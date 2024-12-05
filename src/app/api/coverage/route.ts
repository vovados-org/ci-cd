import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    coverage: (global as any).__coverage__ || null,
  })
}
