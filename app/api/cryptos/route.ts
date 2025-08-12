import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/types/crypto";
import { API_CONFIG } from "@/lib/constants";

const CMC_API_KEY = process.env.CMC_API_KEY!;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const start = searchParams.get("start") || "1";
  const limit = searchParams.get("limit") || "100";

  const queryParams = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(API_CONFIG.DEFAULT_PARAMS).map(([k, v]) => [k, String(v)])
    ),
    start,
    limit,
  });

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}?${queryParams.toString()}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": CMC_API_KEY,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`CMC API Error: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch crypto data" },
      { status: 500 }
    );
  }
}
