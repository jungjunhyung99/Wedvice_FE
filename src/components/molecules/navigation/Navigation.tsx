import Notification from '@/assets/navigation/notification.svg';
import Logo from '@/assets/navigation/logo.svg';
import { Chip } from '@/components/atoms/chip';
import { SubIcon } from './SubIcon';
import { motion } from 'motion/react';

interface TopNavigationProps {
  active?: boolean;
}

export const Navigation = ({ active = false }: TopNavigationProps) => {
  return (
    <header className="sticky absolute top-0 left-0 flex w-full justify-between items-center px-[20px] h-[53px] text-white bg-gray-100 opacity-8">
      <SubIcon href="/" Icon={Logo} />
      <Chip>
        <button className="flex gap-2">
          <span className="text-primary-500">결혼까지</span>
          <span>D-173</span>
        </button>
      </Chip>
      <SubIcon href="/" Icon={Notification} active={active} color="gray-700" />
    </header>
  );
};
