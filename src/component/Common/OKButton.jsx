import React from 'react';
import Button from 'antd/lib/button';
import classNames from 'classnames';

export default function FormButtonArea(props) {
  return (
    <Button
      type="primary"
      disabled={props.disable}
      onClick={props.handleClick}
    >{props.labels || 'OK'}
    </Button>
  );
}
