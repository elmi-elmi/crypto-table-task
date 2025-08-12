import { ApiResponse, ApiResponseSchema } from "@/types/crypto";

class ApiService {
  private getBaseUrl(): string {
    if (process.env.NEXT_PUBLIC_API_URL) {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    
    return 'http://localhost:3000';
  }

  async fetchCryptos(start = 1, limit = 100): Promise<ApiResponse> {
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}/api/cryptos?start=${start}&limit=${limit}`;
    
    const response = await fetch(url, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return ApiResponseSchema.parse(data);
  }
}

export const apiService = new ApiService();
