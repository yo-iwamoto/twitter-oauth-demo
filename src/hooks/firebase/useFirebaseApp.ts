import { ENV } from '@/config/env';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { useCallback } from 'react';

export const useFirebaseApp = () => {
  const initialize = useCallback(
    () =>
      initializeApp({
        apiKey: ENV.PUBLIC.FB.API_KEY,
        authDomain: ENV.PUBLIC.FB.AUTH_DOMAIN,
        projectId: ENV.PUBLIC.FB.PROJECT_ID,
        storageBucket: ENV.PUBLIC.FB.STORAGE_BUCKET,
        appId: ENV.PUBLIC.FB.APP_ID,
      }),
    []
  );

  const app = useCallback(() => (getApps().length ? getApp() : initialize()), [initialize]);

  return {
    app,
  };
};
