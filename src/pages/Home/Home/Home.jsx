import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <Category></Category>
        </div> 
    );
};

export default Home;