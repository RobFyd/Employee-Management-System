import type { Meta } from '@storybook/react';
// import type { StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta = {
  title: 'Layout/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const _Menu = () => <Menu />;
