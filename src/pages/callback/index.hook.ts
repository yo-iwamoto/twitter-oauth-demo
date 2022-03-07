import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useHooks = () => {
  const router = useRouter();

  const issueToken = useCallback(async (code: string, codeVerifier: string) => {
    const res = await axios.post<{ token: string }>('/api/issueToken', { code, codeVerifier });
    console.log(res.data.token);
  }, []);

  useEffect(() => {
    const { state: stateQuery, code: codeQuery } = router.query;
    if (typeof stateQuery !== 'string' || typeof codeQuery !== 'string') {
      return;
    }

    if (stateQuery !== localStorage.getItem('auth_state')) {
      alert('認証情報が誤っているため、トップページに戻ります');
      void router.push('/');
      return;
    }

    const codeVerifier = localStorage.getItem('auth_code_challenge');
    if (!codeVerifier) {
      return;
    }

    void issueToken(codeQuery, codeVerifier);
  }, [issueToken, router, router.query]);
};
