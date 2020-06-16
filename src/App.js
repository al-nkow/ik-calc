import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import Rome from './components/Rome';
import Portiere from './components/Portiere';
import Tulle from './components/Tulle';
import Cornice from './components/Cornice';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  min-height: 600px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Row = styled.div`
  display: flex;
  direction: row;
  margin-bottom: 100px;
`;

const Col = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  &.active {
    color: red;
  }
`;

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Container>
      <Row>
        <Col onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>
          Римская штора
        </Col> 
        <Col onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>
          Портьера
        </Col>
        <Col onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>
          Тюль
        </Col>
        <Col onClick={() => setActiveTab(4)} className={activeTab === 4 ? 'active' : ''}>
          Карниз
        </Col>
      </Row>
      {activeTab === 1 ? <Rome /> : null}
      {activeTab === 2 ? <Portiere /> : null}
      {activeTab === 3 ? <Tulle /> : null}
      {activeTab === 4 ? <Cornice /> : null}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Container>
  );
}

export default App;
