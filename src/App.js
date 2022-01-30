import React from 'react';
import './App.css';
import BookStoreFronPage from './components/BookStoreFronPage'
import OrderSuccessfull from './components/OrderSuccessfull'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Lo from './pages/login/Lo';
import Si from './pages/signup/Si';
import { logDOM } from '@testing-library/react';
import Log from "../src/pages/signup/Sign"

function App() {
  return (
    <div className="appDiv">
      <BrowserRouter>
        <Switch>
          <Route path={"/BookStoreFronPage"} exact component={BookStoreFronPage} />
          <Route path={"/signup"} exact component={Log} />
          {/* <Route path={"/"} exact component={Sign} /> */}
          {/* <Route path={"/"} exact component={Lo} />
          <Route path={"/si"} exact component={Si} /> */}
          <Route path={"/cart"} exact component={Cart} />
          <Route path={"/ordersuccessfull"} exact component={OrderSuccessfull} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
