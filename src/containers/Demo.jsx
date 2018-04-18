import React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { increase, decrease } from '../action/demo';

const Demo = (props) => {
  return(
    <div>
      <div>{props.demo && props.demo.counter}</div>
      <div><Button onClick={props.increase}><Icon type="plus-circle-o" /></Button></div>
      <div><Button onClick={props.decrease}><Icon type="minus-circle-o" /></Button></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    demo: state.demo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
