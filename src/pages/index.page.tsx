import { useHooks } from './index.hook';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  const { redirect } = useHooks();

  return (
    <div className="grid gap-4 py-8 text-center">
      <h1 className="text-2xl">Hello Twitter OAuth</h1>
      {/* <button className="shadow-lg py-2 px-6 mx-auto bg-blue-500 rounded-lg text-white w-40" onClick={redirect}>
        Connect
      </button> */}
      <button className="mx-auto w-40 rounded-lg bg-blue-500 py-2 px-6 text-white shadow-lg">Sign Up</button>
    </div>
  );
};

export default Page;
