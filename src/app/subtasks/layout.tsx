import { TopBar } from '@/components/molecules/topBar';
import { PropsWithChildren } from 'react';
import PlusDefaultGray from '@/assets/wed_icon/icon_20/plus_default_gray.svg';
import Alignment from '@/assets/wed_icon/icon_28/alignment_default.svg';

const SubtasksLayout = ({ children }: PropsWithChildren) => {
  const PrimaryButton = () => {
    return (
      <button className='text-white'>
        <PlusDefaultGray />
      </button>
    );
  };

  const SecondaryButton = () => {
    return (
      <button className='text-white'>
        <Alignment />
      </button>
    );
  };

  return (
    <main className='h-full w-full bg-gray-50'>
      <TopBar
        primaryButton={<PrimaryButton />}
        secondaryButton={<SecondaryButton />}
      />
      {children}
    </main>
  );
};

export default SubtasksLayout;
