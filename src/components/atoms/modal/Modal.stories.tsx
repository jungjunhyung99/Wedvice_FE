import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const BasicModal: Story = {
  args: {
    children: (
      <div className='flex flex-col justify-center items-center w-[320px]'>
        <span className='text-white text-lg'>Title</span>

        <span className='text-gray-700 text-sm pt-3 pb-5'>Description</span>

        <div className='flex w-full justify-center gap-4'>
          <button className='w-[130px] h-[52px] rounded-md bg-gray-300 text-gray-800'>
            Text
          </button>
          <button className='w-[130px] h-[52px] rounded-md bg-red-200 text-white'>
            Text
          </button>
        </div>
      </div>
    ),
  },
};

export const ConfirmModal: Story = {
  args: {
    children: (
      <div className='flex flex-col justify-center w-[330px]'>
        <span className='text-white font-bold text-lg'>Title</span>

        <span className='text-gray-700 text-sm pt-3 pb-5'>Description</span>

        <div className='flex w-full justify-end gap-4'>
          <button className='w-[56px] h-[34px] rounded-md bg-gray-300 text-gray-800'>
            Text
          </button>
        </div>
      </div>
    ),
  },
};
