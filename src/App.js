import React from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import router from './routes';
import './reset.scss';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      {router}
      <Footer/>
    </div>
  );
}

export default App;
