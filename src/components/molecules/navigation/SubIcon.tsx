import { FC, SVGProps } from 'react';
import { Route } from 'next';
import Link from 'next/link';

interface SubIconProps<T extends string> {
  href: Route<T>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  active?: boolean;
  color?: string;
}

export const SubIcon = <T extends string>({
  href,
  Icon,
  active,
  color = 'white',
}: SubIconProps<T>) => {
  return (
    <Link href={href} className="flex relative itmes-center">
      <Icon fill={color} className="" />
      {active && (
        <div className="absolute top-0 left-0 w-[5px] h-[5px] bg-red-200 rounded-xl2" />
      )}
    </Link>
  );
};
