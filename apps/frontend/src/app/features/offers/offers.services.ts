import axios from 'axios';

import { CreateOfferDto } from './types';

const API_KEY = import.meta.env.VITE_API_KEY;

export const createOffer = (data: CreateOfferDto) => {
  return axios.post(`${import.meta.env.VITE_API_BASE_URL}/offers`, data, {
    headers: {
      Authorization: API_KEY,
    },
  });
};
