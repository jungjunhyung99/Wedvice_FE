'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Chip } from '../../../components/atoms/chip';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  argTypes: {
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// 기본 카드
export const Default: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.Checkbox checked={args.checked} />
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Card.CostSpan>400,000 원</Card.CostSpan>
        <Chip rounded="sm" size="sm">
          2024.11.19
        </Chip>
        <Chip type="blue" rounded="sm" size="sm">
          예랑
        </Chip>
      </Card>
    );
  },
};

// 가격 없는 카드
export const NoPriceCard: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.Checkbox checked={args.checked} />
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Chip rounded="sm" size="sm">
          2024.11.19
        </Chip>
        <Chip type="blue" rounded="sm" size="sm">
          예랑
        </Chip>
      </Card>
    );
  },
};

// 체크 박스 없는 카드
export const NoCheckboxCard: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Card.CostSpan>400,000 원</Card.CostSpan>
        <Chip rounded="sm" size="sm">
          2024.11.19
        </Chip>
        <Chip type="blue" rounded="sm" size="sm">
          예랑
        </Chip>
      </Card>
    );
  },
};

// 체크 박스, 가격 없는 카드
export const NoCheckboxAndNoCost: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Chip type="blue" rounded="sm" size="sm">
          예랑
        </Chip>
      </Card>
    );
  },
};
