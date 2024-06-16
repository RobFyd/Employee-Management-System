import { Meta, StoryObj } from '@storybook/react';
import { RegistrationForm } from './RegistrationForm';

const meta = {
    title: 'Components/RegistrationForm',
    component: RegistrationForm,
    tags: ['autodocs'],
  } satisfies Meta<typeof RegistrationForm>;

// export default {
//     title: 'Components/RegistrationForm',
//     component: RegistrationForm,
// } as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Default = Template.bind({});
// Default.args = {
//     // tutaj dodaj domyślne argumenty
// };

export const Default: Story = {
    args: {
        // tutaj dodaj domyślne argumenty
    },
  };