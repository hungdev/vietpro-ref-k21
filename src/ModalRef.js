import React from 'react';
import { Modal, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom'
class ModalRef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      name: ''
    }
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  showModal(name) {
    this.setState({
      visible: true,
      name
    });
  };

  handleOk() {
    this.setState({
      visible: false,
    });
  };

  handleCancel() {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div>hello {this.state.name}</div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ModalRef)