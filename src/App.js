import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import ModalRef from './ModalRef'



export default class App extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column',
        height: '100%'
      }}>
        <Button type="primary" onClick={() => this.onShowModal()}>Primary</Button>
        <ModalRef
        />
      </div>
    )
  }
}
