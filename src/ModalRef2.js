import React from 'react';
import { Modal, Table } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

class ModalRef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    // this.getDataFromAI()
  }

  getDataFromAI() {
    // call api
    this.setState({
      dataSource: [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ]
    })
  }

  render() {

    return (
      <div>
        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    );
  }
}
export default ModalRef