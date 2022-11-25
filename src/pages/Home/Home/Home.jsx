import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import GetUpdate from '../GetUpdate/GetUpdate';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <Category></Category>
            <GetUpdate></GetUpdate>
        </div> 
    );
};

export default Home;