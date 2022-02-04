export const ENV = {
  TWITTER_REDIRECT_URI: process.env.NEXT_PUBLIC_TWITTER_REDIRECT_URI as string,
  TWITTER_CLIENT_ID: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID as string,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET as string,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL as string,
  IS_DEVELOP: process.env.NEXT_PUBLIC_APP_URL?.includes('localhost') === true,
};
