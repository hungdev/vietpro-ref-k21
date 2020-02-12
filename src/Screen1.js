import React, { Component } from 'react';
import { Button } from 'antd';
import ModalRef from './ModalRef'
import TableRef from './ModalRef2'

export default class componentName extends Component {
  onShowModal1() {
    this.modalRef1.showModal('Cee')
  }
  getData() {
    this.tableRef.getDataFromAI()
  }


  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column',
        height: '100%'
      }}>
        <Button type="primary"
          onClick={() => this.onShowModal1()}>Show modal 1</Button>
        <Button type="primary" style={{ marginTop: 50 }}
          onClick={() => this.getData()}>create note</Button>
        <ModalRef
          onRef={ref1 => { this.modalRef1 = ref1 }}
        />
        <input />
        <TableRef
          ref={refx => { this.tableRef = refx }}
        />
      </div>
    );
  }
}
