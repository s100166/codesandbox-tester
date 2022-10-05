export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      API_URL: string;
      TOKEN_SECRET: string;
    }
  }
}
