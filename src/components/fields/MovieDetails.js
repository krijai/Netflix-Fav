import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MovieDetails extends React.Component {
  render() {

    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.props.list.title}
              </Typography>
              <Button color="inherit" onClick={this.props.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <List>
                  <ListItem button>
                    <ListItemText primary="Genres:" secondary={this.props.list.genres} />
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem button>
                    <ListItemText primary="Release Date" secondary={this.props.list.release_date} />
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem button>
                    <ListItemText primary="Description" secondary={this.props.list.description} />
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                </List>
              </div>
              <div className="col-lg-6">
                <p>Content Right</p>
              </div>
            </div>
          </div>

        </Dialog>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetails);