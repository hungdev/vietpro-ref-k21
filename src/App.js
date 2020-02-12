import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import ModalRef from './ModalRef'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', flexDirection: 'column',
      height: '100%'
    }}>
      <Button type="primary">Primary</Button>
      <ModalRef
      />
    </div>
  );
}

export default App;
