import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import ModalRef from './ModalRef'
import ModalRef2 from './ModalRef2'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Screen1} />
          <Route exact path="screen1" component={Screen1} />
          <Route exact path="screen2" component={Screen2} />
        </Switch>

      </BrowserRouter>
    )
  }
}
