import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <main className='h-full w-full'>{children}</main>;
};

export default HomeLayout;
