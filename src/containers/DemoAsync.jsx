import React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../action/demoAsync';

const Demo = (props) => {
  return (
    <div>
      <div>{props.demoAsync && props.demoAsync.payload.amount}</div>
      <div><Button onClick={props.increaseAsync}><Icon type="plus-circle-o" /></Button></div>
      <div><Button onClick={props.decreaseAsync}><Icon type="minus-circle-o" /></Button></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    demoAsync: state.demoAsync,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseAsync: () => dispatch(increaseAsync()),
    decreaseAsync: () => dispatch(decreaseAsync()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
