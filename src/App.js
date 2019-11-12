import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/layout/header/headerContainer';
import Footer from './components/layout/footer/footerContainer';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            BODY
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
