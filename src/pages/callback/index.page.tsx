import { useHooks } from './index.hook';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  useHooks();

  return <div></div>;
};

export default Page;
