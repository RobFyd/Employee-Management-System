import axios from 'axios';

import { CreateOfferDto } from './types';

const API_KEY = '1234'; // this should be stored in a .env file

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3000/api/offers', data, {
    headers: {
      Authorization: API_KEY,
    },
  });
};
