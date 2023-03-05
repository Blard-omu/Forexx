import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Exchanges, HomePage, News, CryptoCurrencies, CryptoDetails, Navbar } from './components'
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
        <BrowserRouter>
          <Router>
            <Route index element={<HomePage/>}/>
            <Route path='/exchanges' element={<Exchanges/>} />
            <Route path='/cryptocurrencies' element={<CryptoCurrencies/>} />
            <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
            <Route path='/news' element={<News/>} />
          </Router>
        </BrowserRouter>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
            Forexx Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);
export default App;
