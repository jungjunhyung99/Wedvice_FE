import type { Meta, StoryObj } from "@storybook/react";
import { Memo } from "./Memo";

const meta: Meta<typeof Memo> = {
    title: "Components/Memo",
    component: Memo,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["main", "none"],
        },
        size: {
            control: { type: "radio" },
            options: ["small", "medium"],
        },
        className: {
            control: "text",
        },
        children: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Memo>;

export const SmallMemo: Story = {
    args: {
        variant: "main",
        size: "small",
        children: "오늘도 화이팅!",
    },
};

export const MediumMemo: Story = {
    args: {
        variant: "main",
        size: "medium",
        children: "메모 테스트 메모 테스트 메모 테스트 메모 테스트 메모 테스트",
    },
};

export const NoText: Story = {
    args: {
        variant: "none",
        size: "small",
        children: null,
    },
};
