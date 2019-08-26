import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%' ,
  },
  menu: {
    width: 200,
  },
});

class SearchField extends React.Component {

  state = {
    name: 'Cat in the Hat'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <TextField
          id="search"
          label="Search For Movies Here"
          type="search"
          className={`${classes.textField} ${this.props.className}`}
          onChange={this.props.searchHandleChange}
          name={this.props.name}
          margin="normal"
        />
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);