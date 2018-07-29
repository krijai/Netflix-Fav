import React, {Component} from 'react';
import '../../assets/styles/error.scss';

class Error extends Component {
  render() {
    console.log('this.props.message')
    console.log(this.props.message)

    if(this.props.message) {
      var note = <p className="note-wrapper">Note: We don't yet have Forget username/password feature, so try to remember your username/password, if not create a new gmail account and signup again :) Thanks!</p>
    }

    return (
      <div className="error-wrapper">
        <p>{this.props.message}</p>
        {note}
      </div>
    );
  }
}

export default Error;