import { useFirebaseApp } from '@/hooks/firebase/useFirebaseApp';
import { getAuth } from 'firebase/auth';
import { useMemo } from 'react';

export const useAuth = () => {
  const { app } = useFirebaseApp();

  const auth = useMemo(() => getAuth(app()), [app]);

  return {
    auth,
  };
};
