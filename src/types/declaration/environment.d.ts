namespace NodeJS {
  // eslint-disable-next-line
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
  }
}
