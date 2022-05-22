import React from 'react';

const LaunchMissions = ({ launch }) =>
    launch.map(item => {
        return (
            <div className="card" key={item.id} style={{ width: '18rem' }}>
                <img className="card-img-top" src={item.links.flickr_images} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Mission：{item.mission_name}</h5>
                    <p className="card-text">Rocket： {item.rocket.rocket_name}</p>
                    <p className="card-text">date： {item.launch_date_local}</p>
                </div>
            </div>
        );
    });

export default LaunchMissions;
