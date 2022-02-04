import { CONST } from '@/config/const';
import { ENV } from '@/config/env';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useHooks = () => {
  const router = useRouter();

  const genRandomStr = useCallback(() => Math.random().toString(32).substring(2), []);

  const authorizationURL = useMemo(() => {
    const baseURL = new URL(CONST.TWITTER_AUTHORIZATION_URL);
    Object.entries({
      response_type: 'code',
      client_id: ENV.TWITTER_CLIENT_ID,
      redirect_uri: ENV.TWITTER_REDIRECT_URI,
      scope: ['offline.access', 'tweet.read', 'tweet.write'].join(' '),
    }).map(([key, value]) => baseURL.searchParams.append(key, value));
    return baseURL;
  }, []);

  const redirect = useCallback(async () => {
    const state = genRandomStr();
    const codeChallenge = genRandomStr();
    localStorage.setItem('auth_state', state);
    localStorage.setItem('auth_code_challenge', codeChallenge);

    Object.entries({
      state,
      code_challenge: codeChallenge,
      code_challenge_method: 'plain',
    }).map(([key, value]) => authorizationURL.searchParams.append(key, value));

    await router.replace(authorizationURL);
  }, [authorizationURL, genRandomStr, router]);

  return { redirect };
};
