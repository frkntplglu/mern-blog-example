import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Articles from './components/Articles'
import AddArticle from './components/AddArticle'
import Article from './components/Article'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route path="/" exact component={Articles} />
      <Route path="/add-articles" component={AddArticle} />
      <Route path="/article/:id" component={Article} />
      <Footer />
    </div>
  );
}

export default App;
