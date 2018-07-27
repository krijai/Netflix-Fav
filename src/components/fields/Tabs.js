import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../../assets/styles/tabs.scss';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    maxHeight:"100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class MainTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className="tab-wrapper">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Movies" className="movies-tab"/>
            <Tab label="My Fav" className="my-fav-tab"/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{this.props.list}</TabContainer>}
        {value === 1 && <TabContainer>{this.props.myFav}</TabContainer>}
      </div>
    );
  }
}

MainTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainTabs);