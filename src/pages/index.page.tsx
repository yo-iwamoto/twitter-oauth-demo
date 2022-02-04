import { useHooks } from './index.hook';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  const { redirect } = useHooks();

  return (
    <div className="text-center grid gap-4 py-8">
      <h1 className="text-2xl">Hello Twitter OAuth</h1>
      <button className="shadow-lg py-2 px-6 mx-auto bg-blue-500 rounded-lg text-white w-40" onClick={redirect}>
        Connect
      </button>
    </div>
  );
};

export default Page;
