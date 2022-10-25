import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Home = () => {
    return (
        <>
            <h1>Photo Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm />
            <Nav />
        </>
    );
};

export default Home;
