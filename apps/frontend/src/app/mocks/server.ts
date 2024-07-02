import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Setup requests interception using the given request handlers.
export const server = setupServer(...handlers);