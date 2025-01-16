import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <main className="w-full h-full">{children}</main>;
};

export default HomeLayout;
