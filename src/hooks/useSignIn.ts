import { useCallback, useEffect } from 'react';
import { useAuth } from '@/hooks/firebase/useAuth';
import { getRedirectResult, signInWithRedirect, TwitterAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { pagesPath } from '@/utils/$path';

export const useSignIn = () => {
  const router = useRouter();

  const { auth } = useAuth();

  const signIn = useCallback(() => {
    void signInWithRedirect(auth, new TwitterAuthProvider());
  }, [auth]);

  const onReturn = useCallback(async () => {
    const result = await getRedirectResult(auth).catch((err) => {
      // TODO: フィードバック
      console.error(err);
    });
    if (!result) {
      return;
    }

    void router.push(pagesPath.dashboard.$url());
  }, [auth, router]);

  useEffect(() => {
    void onReturn();
  }, [onReturn]);

  return {
    signIn,
  };
};
