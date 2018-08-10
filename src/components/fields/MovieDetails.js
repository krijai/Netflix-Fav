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
import { Icon } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import TextAreaField from '../antd-fields/TextAreaField';
import ButtonIcon from './ButtonIcon'
import CardField from '../antd-fields/CardField'
import SnackBarField from '../fields/SnackBarField'
import '../../assets/styles/movie-details.scss'
import { DEFAULT_ECDH_CURVE } from 'tls';
import { isNull } from 'util';

const styles = {
  appBar: {
    position: 'relative',
    background: 'linear-gradient(to right, #000000 70%, #ff3300 100%)',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MovieDetails extends React.Component {

  state = {
    comment: this.props.list.users_ratings_comments.map((usr)=>{
      if(usr.comments) {
        return usr.comments
      } else {
        return null
      }
    }),
    edit: false,
    delete: false
  }

  textAreaHandleChange = e => {
    console.log(e);
    this.setState({ comment: e });
  }

  setEdit = () => {
    console.log('this.state.edit',this.state.edit)
    this.setState({edit: true})
  }

  removeEdit = () => {
    this.setState({edit: false})
  }

  setDelete = () => {
    this.setState({delete: true})
  }

  removeDelete = () => {
    this.setState({delete: false})
  }

  render() {
    console.log('MovieDetails Comment State',this.state.comment)
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
              <SnackBarField message="Work in Progress" buttonText="Add to Chat" className="snackbar-btn"/>
            </Toolbar>
          </AppBar>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 order-1">
                <CardField imageSrc = {this.props.list.image} imageAlt = {this.props.list.title} className="movie-details-card-image"/>           
              </div>
              <div className="col-md-8 order-2">
                <List className="list-wrapper">
                  <ListItem button className="list-item-wrapper">
                    <ListItemText primary="Genres" secondary={this.props.list.genres} className="list-item-text"/>
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem button className="list-item-wrapper">
                    <ListItemText primary="Release Date" secondary={this.props.list.release_date} className="list-item-text"/>
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem button className="list-item-wrapper">
                    <ListItemText primary="Description" secondary={this.props.list.description} className="list-item-text"/>
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem button className="list-item-wrapper">
                    <ListItemText primary="Rating" className="list-item-text" secondary={
                      (this.props.list.users_ratings_comments).length > 0 ?
                      this.props.list.users_ratings_comments.map((usr_rating)=>{
                      var emoji_icon = <Icon type={ usr_rating.rating<=2 ? "frown" : usr_rating.rating>2 && usr_rating.rating<=4 ? "meh" :"smile"} style={{ fontSize: 20, color:  usr_rating.rating<=2 ? "red" : usr_rating.rating>2 && usr_rating.rating<=4 ? "black" :"blue"  }} />
                      var current_rating = usr_rating.rating + '/5'
                      
                      return [current_rating," ", emoji_icon]
                    }): ['0/5',<Icon type="frown"  style={{ fontSize: 20, color: 'red'}} /> ]   }/>
                  </ListItem>
                  <Divider className="divider-wrapper"/>
                  <ListItem className="comments-wrapper list-item-wrapper">
                    <ListItemText primary="Comments" className="list-item-text" secondary={
                    <div>
                      {
                        (this.props.list.users_ratings_comments).length > 0 ?
                        this.props.list.users_ratings_comments.map((usr_comments) => {
                          var comments_text = usr_comments.comments !==null ? usr_comments.comments : null
                          if(comments_text && !this.state.edit) {
                           return  <blockquote className="quote-box"> 
                           <p class="quotation-mark">
                            “
                          </p>
                          <p class="quote-text">
                          {comments_text} 
                          </p>
                          </blockquote>
                          } else {
                              var default_value_check = Boolean(this.state.edit) && Boolean (usr_comments.comments) && !Boolean(this.state.delete)
                              console.log('default_value_check',default_value_check)
                              return  <TextAreaField className="comments-text-area" textAreaHandleChange={this.textAreaHandleChange.bind(this)} defaultValue={
                              default_value_check ? usr_comments.comments : ''
                          }/>
                        }

                      }) : <TextAreaField className="comments-text-area" textAreaHandleChange={this.textAreaHandleChange.bind(this)} defaultValue={''}/>}
                      <div className= "text-field-icon-wrapper">
                        <ButtonIcon icon="delete" color="secondary" value="Delete" removeComments={this.props.removeComments} list ={this.props.list} user={this.props.user} setEdit={this.setEdit} setDelete={this.setDelete}/>
                        <ButtonIcon icon="edit" color="primary" value="Edit" setEdit={this.setEdit} list ={this.props.list}/>
                        <ButtonIcon icon="save" color="green" value="Save" updateComments={this.props.updateComments} list={this.props.list} user={this.props.user} comments={this.state.comment ? this.state.comment : ''} removeEdit={this.removeEdit} removeDelete={this.removeDelete}/>
                      </div>
                    </div>
                    } />
                  </ListItem>
                </List>
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