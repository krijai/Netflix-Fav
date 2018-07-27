import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class IconDelete extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton className={classes.button} aria-label="Delete" onClick={()=>{
          var movie_id = this.props.movie._id;
          movie_id = movie_id.toString();
          this.props.removeFromFav(movie_id);
        }}>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}

IconDelete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconDelete);