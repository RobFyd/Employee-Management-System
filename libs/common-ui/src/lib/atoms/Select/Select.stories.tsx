import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
    title: 'UI/Atoms/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        name: 'select',
        id: 'select',
        size: 3,
        required: true,
    },
};

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};