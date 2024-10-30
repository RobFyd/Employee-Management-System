import { useState, useEffect } from 'react';
import { Header } from '@ems/common-ui'
import { OfferListDto } from '@ems/contracts';

import { OffersList } from '../features/offers/OffersList';
import { fetchOffers } from '../features/offers/offers.services';

export const CreateOfferPage = () => {
    const [data, setData] = useState<OfferListDto[]>([]);
    useEffect(() => {

        const loadData = async () => {
            const response = await fetchOffers();
            setData(response.data);
        };
        loadData();
    }, []);

    return (
        <div>
            <Header>Offers</Header>
            <OffersList data={data} />
        </div>
    )
};