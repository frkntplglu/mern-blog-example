import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Articles from './components/Articles'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route path="/" component={Articles} />
      <Footer />
    </div>
  );
}

export default App;
