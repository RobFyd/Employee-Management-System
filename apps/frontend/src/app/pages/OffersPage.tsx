import { Header } from '@ems/common-ui'
import { OffersList } from '../features/offers/OffersList';
import { fetchOffers } from '../features/offers/offers.services';
import { useApi } from '../hooks/useApi';
import { useState } from 'react';



export const CreateOfferPage = () => {
    //const { } = useApi();
    const [data, setData] = useState([]);

    return (
        <div>
            <Header>Offers</Header>
            <OffersList data={ } />
        </div>
    )
};