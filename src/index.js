import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './components/Landing';
import ExampleApi from './components/ExampleApi.jsx/ExampleApi';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacts from './components/Contactos/Contacts';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     {/* <NavBar /> */}
   <Landing/>
    {/*<Contacts/>*/}
     {/* <Button/>  */}
     {/* <CartWidget/>  */}
    {/* <ExampleApi/>*/}
     {/*<ItemDetailContainer/>*/}
  </>
);

