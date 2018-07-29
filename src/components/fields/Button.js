import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Buttons extends Component {
  render() {
    return (
      <div>
        <Button type={this.props.type} variant="outlined" color="primary" className={this.props.button +' '+ this.props.className}>
          {this.props.value}
        </Button>
      </div>
    );
  }
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);