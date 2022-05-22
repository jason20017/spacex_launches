import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import SearchBar from '../components/SearchBar';
import LaunchMissions from '../components/LaunchMissions';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import Logo from '../components/Logo/';

const GET_LAUNCH_INFO = gql`
    {
        launchesPast(limit: 19) {
            id
            mission_name
            launch_date_local
            rocket {
                rocket_name
            }
            links {
                flickr_images
            }
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(GET_LAUNCH_INFO);
    const [filter, setfilter] = useState('');
    const searchTerm = e => {
        setfilter(e.target.value);
    };
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    let launch = data.launchesPast.filter(
        item => item.links.flickr_images.length > 0 && item.mission_name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div className="home__container">
            <Logo />
            <SearchBar searchTerm={searchTerm} filter={filter} setfilter={setfilter} />
            <div className="card_container">
                <LaunchMissions launch={launch} />
            </div>
        </div>
    );
};

export default Home;
