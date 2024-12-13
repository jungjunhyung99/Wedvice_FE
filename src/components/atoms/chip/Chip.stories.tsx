import type { Args, Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';
import React from 'react';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: [
          'wedding',
          'alarm',
          'primary300',
          'pink100',
          'teal100',
          'blue100',
          'yellow100',
          'gray100',
          'red100',
        ],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const WeddingChip: Story = {
  args: {
    children: (
      <div className="flex gap-2">
        <span className="text-primary-500">결혼까지 </span>
        <span>D-173</span>
      </div>
    ),
    type: 'wedding',
  },
  decorators: [
    (Story) => (
      <div className="flex w-[150px]">
        <Story />
      </div>
    ),
  ],
};

export const AlarmChip: Story = {
  args: {
    children: 'text',
    type: 'alarm',
  },
  decorators: [
    (Story) => (
      <div className="w-[56px]">
        <Story />
      </div>
    ),
  ],
};

export const PrimaryChip: Story = {
  args: {
    children: 'text',
    type: 'primary300',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};

export const PinkChip: Story = {
  args: {
    children: 'text',
    type: 'pink100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};
export const TealChip: Story = {
  args: {
    children: 'text',
    type: 'teal100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};

export const BlueChip: Story = {
  args: {
    children: 'text',
    type: 'blue100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};

export const YellowChip: Story = {
  args: {
    children: 'text',
    type: 'yellow100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};

export const GrayChip: Story = {
  args: {
    children: 'text',
    type: 'gray100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};

export const RedChip: Story = {
  args: {
    children: 'text',
    type: 'red100',
  },
  decorators: [
    (Story) => (
      <div className="w-[46px]">
        <Story />
      </div>
    ),
  ],
};
