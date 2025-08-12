import { ApiResponse, ApiResponseSchema } from "@/types/crypto";

class ApiService {
  private readonly baseUrl =
    process.env.NEXT_PUBLIC_API_URL ;

  async fetchCryptos(start = 1, limit = 100): Promise<ApiResponse> {
    const response = await fetch(
      `${this.baseUrl}/api/cryptos?start=${start}&limit=${limit}`,
      {
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return ApiResponseSchema.parse(data);
  }
}

export const apiService = new ApiService();
