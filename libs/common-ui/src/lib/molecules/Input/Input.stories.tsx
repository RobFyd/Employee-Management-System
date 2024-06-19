import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
    title: 'UI/molecules/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Default Input',
    },
};

export const Primary: Story = {
    args: {
        label: "Primary Input",
    },
};