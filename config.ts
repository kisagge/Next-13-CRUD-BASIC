class Config {
  apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
}

export const config = new Config();
