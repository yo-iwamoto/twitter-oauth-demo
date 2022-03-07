export const ENV = {
  PUBLIC: {
    TWITTER_REDIRECT_URI: process.env.NEXT_PUBLIC_TWITTER_REDIRECT_URI as string,
    TWITTER_CLIENT_ID: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID as string,
    FB: {
      APP_URL: process.env.NEXT_PUBLIC_FB_APP_URL as string,
      API_KEY: process.env.NEXT_PUBLIC_FB_API_KEY as string,
      AUTH_DOMAIN: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN as string,
      PROJECT_ID: process.env.NEXT_PUBLIC_FB_PROJECT_ID as string,
      STORAGE_BUCKET: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET as string,
      APP_ID: process.env.NEXT_PUBLIC_FB_APP_URL as string,
    },
  },
  SECRET: {
    TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET as string,
  },
};
