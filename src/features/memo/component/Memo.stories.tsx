import { MemoProvider } from '@/contexts/memo/MemoProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { Memo } from './Memo';

const meta: Meta<typeof Memo> = {
  title: 'Components/Memo',
  component: Memo,
  decorators: [
    (Story) => (
      <MemoProvider>
        <Story />
      </MemoProvider>
    ),
  ],
  argTypes: {
    isEditMode: {
      control: 'boolean',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Memo>;

export const Default: Story = {
  args: {
    isEditMode: false,
    size: 'small',
  },
};
