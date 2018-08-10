import React, {Component} from 'react';
import '../../assets/styles/error.scss';

class Error extends Component {
  render() {

    if(this.props.loginMessage) {
      var note = <p className="note-wrapper">Note: We don't yet have Forget username/password feature, so try to remember your username/password, if not create a new gmail account and signup again :) Thanks!</p>
    } else if(this.props.signupMessage) {
      var note = <p className="note-wrapper">Note: There are only 3 fields to fill -  2 required field and 1 optional field</p>
    }

    return (
      <div className="error-wrapper">
        <p>{this.props.loginMessage ? this.props.loginMessage : this.props.signupMessage ? this.props.signupMessage : 'You are trying out of scope conditions'}</p>
        {note}
      </div>
    );
  }
}

export default Error;