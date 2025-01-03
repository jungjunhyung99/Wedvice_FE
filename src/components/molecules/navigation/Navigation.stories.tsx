import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'components/Navigation',
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const NaviagtionStory: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
};
