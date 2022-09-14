export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
            API_URL: string
        }
    }
}