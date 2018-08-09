import { Input } from 'antd';
import React, { Component } from 'react';

const { TextArea } = Input;

class TextAreaField extends Component {

  handleChange = e => {
    this.props.textAreaHandleChange(e.target.value)
  }

  render() {
    return(
      <TextArea className={this.props.className} rows={6} onChange={this.handleChange} defaultValue={this.props.defaultValue}/>
    )
  }
}


export default TextAreaField;