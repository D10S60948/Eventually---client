import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';
import { connect } from 'react-redux';
import { setUser } from './redux/actions';

const userID = '5e2616c84f1ce248f9fd09e3';

const App = props => {
    const [imageSource, setImageSource] = useState('');

    useEffect(() => {
        fetch(`https://aqueous-fortress-81697.herokuapp.com/users/${userID}`)
            .then(response => response.json())
            .then(data => {
                props.setUser(data);
                setImageSource(data.profileImage);
            })
            .catch(error => console.log(error));
    });

    return (
        <div className="App" style={{ backgroundColor: '#F3EBE3' }} >
            <Header {...{imageSource}} />
            <Home />
            <Footer />
        </div>
    );
}

export default connect(null, { setUser })(App);
