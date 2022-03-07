import { useFirebaseApp } from '@/hooks/firebase/useFirebaseApp';
import { getFirestore } from 'firebase/firestore';
import { useMemo } from 'react';

export const useFirestore = () => {
  const { app } = useFirebaseApp();

  const firestore = useMemo(() => getFirestore(app()), [app]);

  return {
    firestore,
  };
};
