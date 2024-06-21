import type { Meta, StoryObj } from '@storybook/react';

import { ViewPort } from './ViewPort';

const meta = {
    title: 'UI/molecules/ViewPort',
    component: ViewPort,
    tags: ['autodocs'],
} satisfies Meta<typeof ViewPort>;

export default meta;

type Story = StoryObj<typeof ViewPort>;

export const Default: Story = {
    args: {
        label: 'Default ViewPort',
    },
};