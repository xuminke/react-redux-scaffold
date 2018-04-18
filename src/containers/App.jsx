import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/demo">
          <Button type="primary">Button</Button>
        </Link>
        <Link to="/demoAsync">
          <Button type="primary">ButtonAsync</Button>
        </Link>
      </div>
    );
  }
}

export default App;
