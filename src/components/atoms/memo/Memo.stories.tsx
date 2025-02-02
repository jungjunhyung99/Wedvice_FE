import type { Meta, StoryObj } from '@storybook/react';
import { Memo } from './Memo';

const meta: Meta<typeof Memo> = {
  title: 'Components/Memo',
  component: Memo,
  argTypes: {
    isEditMode: {
      control: 'boolean',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Memo>;

export const SmallMemo: Story = {
  args: {
    isEditMode: false,
    size: 'small',
    text: '오늘도 화이팅!',
  },
};

export const MediumMemo: Story = {
  args: {
    isEditMode: false,
    size: 'medium',
    text: '메모 테스트 메모 테스트 메모 테스트 메모 테스트 메모 테스트',
  },
};

export const NoText: Story = {
  args: {
    isEditMode: false,
    size: 'small',
    text: '',
  },
};

export const EditableMemo: Story = {
  args: {
    isEditMode: true,
    size: 'medium',
    text: '편집 모드',
  },
};
