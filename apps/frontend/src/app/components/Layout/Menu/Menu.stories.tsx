import { Meta, StoryObj } from '@storybook/react';
import { Menu } from '../Menu';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ROUTE } from '../../../routes';

const meta = {
    title: 'Components/Menu',
    component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const _Menu = () => (
    <MemoryRouter initialEntries={[ROUTE.ABOUT]}>
        <Routes>
            <Route path={ROUTE.ABOUT} element={<Menu />} />
        </Routes>
    </MemoryRouter>
);