import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Header from './Header'; // Import the Header component
import Cards from './Cards'; // Import the Cards component
import Footer from './Footer'; // Import the Footer component
import { data } from './data'; // Import the data array
import './App.css';
import Logo from './Logo';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component */}
      <Header />
      <Logo />
      {/* Pass each item from the data array as separate props */}
      <Cards item1={data[0]} item2={data[1]} item3={data[2]} />
      <Footer />
    </div>
  );
}

export default App;