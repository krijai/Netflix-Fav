import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

/**
 * The example data is structured as follows:
 */

class MovieGridList extends Component {
  constructor(props){
    super(props);
  };

  selectFav = (e) => {
    console.log("selectFav hit")
    console.log(e.currentTarget)
    console.log([e.currentTarget.id])
    this.props.handleClose
    if(e.target.name === "id") {
      console.log(e.target.name + e.target.value)
    }


  }

  render(){
    const { classes } = this.props;

  return (
    <div className={classes.root} onClick={this.props.handleOpen} id="grid_list">
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          <GridListTile key={this.props.key} cols={this.props.list.title ? 2 : 1} rows={this.props.list.title ? 2 : 1}>
            <img src={this.props.list.image} alt={this.props.list.title} />
            <GridListTileBar
              title={this.props.list.title}
              titlePosition="top"
              onClick={this.selectFav}
              id="fav_icon"
              actionIcon={
                <IconButton className={classes.icon} onClick={() => {
                  var movie_id = this.props.list._id;
                  movie_id = movie_id.toString();
                  this.props.addToFav(movie_id);
                  }
                }>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
      </GridList>
    </div>
  );
  }
}


MovieGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieGridList);