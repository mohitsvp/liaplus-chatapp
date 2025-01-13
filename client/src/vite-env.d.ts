/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Add your environment variables here
    readonly NODE_ENV: string; // Example
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  