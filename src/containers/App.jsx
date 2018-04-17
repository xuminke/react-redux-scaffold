import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Link to="/demo">
        <Button type="primary">Button</Button>
      </Link>
    );
  }
}

export default App;
