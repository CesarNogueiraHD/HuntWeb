import React, {Component} from 'react';
import './App.css';
import './styles.css'

// Components
import Header from './components/Header'

// Pages
import Main from "./pages/main"

// Rotas
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;
