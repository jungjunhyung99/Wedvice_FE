import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import { Button } from '@/components/atoms/button';

const meta: Meta<typeof BottomSheet> = {
  title: 'components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onDismiss: { action: 'closed action' },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const contents = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

export const BasicBottomSheet: Story = {
  args: {
    open: true,
    header: <p className='flex text-xl text-white font-bold'>바텀 시트 제목</p>,
    footer: <Button>확인</Button>,
    children: (
      <ul className='w-full flex flex-col gap-4 items-center justify-between text-xl'>
        {contents.map((content, index) => (
          <li key={index} className='text-white'>{content}</li>
        ))}
      </ul>
    ),
  },
};