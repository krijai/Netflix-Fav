import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AvatarField from './AvatarField'
import '../../assets/styles/favlist.scss'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class FavList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className="fav-list-wrapper">
        <AvatarField image_src = {this.props.movie.image} movie_title={this.props.movie_title} className="avatar-wrapper">
        <div className="fav-list-delete-btn">
              {this.props.children}
            </div>
        </AvatarField>
          <Toolbar className="fav-list-details">
            <div className="fav-list-movie-detail-wrapper">
            <Typography variant="title" color="inherit" className="detail-title">
              Title:
            </Typography>
            <p className="movie-details">{this.props.movie.title}</p>
            </div>
            <div className="fav-list-movie-detail-wrapper">
            <Typography variant="title" color="inherit" className="detail-title">
              Description:
            </Typography>
            <p className="movie-details"> {this.props.movie.description}</p>
            </div>
            <div className="fav-list-movie-detail-wrapper">
            <Typography variant="title" color="inherit" className="detail-title">
              Release Date:
            </Typography>
            <p className="movie-details">{this.props.movie.release_date}</p>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

FavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavList);