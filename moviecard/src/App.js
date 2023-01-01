import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Components/Cards";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>

      <Navbar />
      <div className='container'>
        <Card />
      </div>


    </>




  );
}

export default App;
