import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CategoryPage from './pages/EventByCategories/EventByCategories';
import Profile from './pages/Profile/Profile';
import EventDetail from './pages/EventDetail/EventDetail'
import Payment from './pages/Payment/Payment'
import MyTicket from './pages/MyTicket/MyTicket'
import AddEvent from './pages/AddEvent/AddEvent'
import AllPayment from './pages/AllPayment/AllPayment'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/orders/myticket">
            <MyTicket />
          </Route>
          <Route path="/event/:id">
            <EventDetail />
          </Route>
          <Route path="/event">
            <AddEvent />
          </Route>
          <Route path="/payments">
            <AllPayment />
          </Route>
          <Route path="/payment/:id">
            <Payment />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/category/:id/event">
            <CategoryPage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
