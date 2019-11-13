import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/layout/header/headerContainer';
import Footer from './components/layout/footer/footerContainer';
import Content from './components/content/content';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Content/>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;
