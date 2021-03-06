import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from '../src/redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


import { checkUserSession } from './redux/user/user.actions';


import { connect } from 'react-redux';

const App = ({currentUser, checkUserSession}) => {
  
  useEffect(() => {checkUserSession()},[checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)}/>
      </Switch>
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(App);
