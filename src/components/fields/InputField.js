import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginBottom: '10px',
    width: '100%'
  },
});

class InputField extends Component {
  constructor(props){
    super(props);
  }

  state = {
    error: {
      email: null
    }
  }

  handleChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Input
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
          id={this.props.id}
          type={this.props.type}
          className={classes.input}
          name={this.props.name}
          autoFocus={true}
          required={true}
          // error={this.props.emailValidation?true:false}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputField);