import { Meta, StoryObj } from '@storybook/react';
import { AboutPage } from '../AboutPage';

const meta = {
    title: 'Pages/AboutPage',
    component: RegistrationForm,
    // tags: ['autodocs'],
  } satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};