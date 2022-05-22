import React from 'react';

const SearchBar = props => {
    let { filter, setfilter, searchTerm } = props;

    return (
        <div className="searchBar_container">
            <div className="searchBar">
                <label className="card_label h4">Search</label>
                <input
                    className="from-control"
                    placeholder="  Missions"
                    type="text"
                    value={filter}
                    onChange={searchTerm}
                />
            </div>
        </div>
    );
};

export default SearchBar;
