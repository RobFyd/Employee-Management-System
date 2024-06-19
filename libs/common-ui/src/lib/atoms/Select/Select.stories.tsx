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
    args: {
        name: 'select',
        id: 'select',
        size: 2,
        required: true,
    },
};

export const Secondary: Story = {
    args: {
        name: 'select',
        id: 'select',
        size: 1,
        required: true,
    },
};