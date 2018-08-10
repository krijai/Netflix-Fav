import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 70,
    height: 70,
  },
};

class AvatarField extends Component {
  render(){
    const { classes } = this.props;
    return(
    <div className={`${classes.row} ${this.props.className}`}>
      <Avatar
        alt={this.props.movie_title}
        src={this.props.image_src}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      {this.props.children}
    </div>
    )
  }
}

AvatarField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarField);