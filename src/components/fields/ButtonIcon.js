import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class ButtonIcon extends Component {

  render() {
    return (
        <Button variant="contained" color={this.props.color} className={this.props.button} 
        onClick={
          this.props.user ?
          (this.props.icon === 'save' && this.props.comments && (this.props.comments).length > 0 ?
          (e) =>{
            const movie_id = this.props.list._id
            var user_id = this.props.user.user._id
            user_id = user_id.toString()
            const comments = (this.props.comments).toString()
            
            this.props.updateComments(movie_id, user_id, comments)
            this.props.removeEdit()
            this.props.removeDelete()
          } : this.props.icon === 'edit' && (this.props.list.users_ratings_comments.map((usr)=>{ 
            if(usr.comments) {
              return true
            } else {
              return false
            }
          })) ?
          (e) => {
            this.props.setEdit()
          } : this.props.icon === 'delete' && (this.props.list.users_ratings_comments.map((usr)=>{ 
            if(usr.comments) {
              return true
            } else {
              return false
            }})) ?
          (e)=> {
            const movie_id = this.props.list._id
            var user_id = this.props.user.user._id
            user_id = user_id.toString()
            
            this.props.removeComments(movie_id, user_id)
            this.props.setEdit()
            this.props.setDelete()
          } :'') : (this.props.icon === 'save' || this.props.icon === 'edit' || this.props.icon === 'delete')
          ? (e) => alert("login to add your comments")
          : 'alert("login to add your comments")'
        }
        >
          {this.props.value}

          {this.props.icon ==='delete' ?
          <DeleteIcon className={this.props.rightIcon} /> : this.props.icon ==='edit' ? 
          <Icon className={this.props.rightIcon} /> : this.props.icon ==='save' ? 
          <SaveIcon className={this.props.leftIcon} /> : '' }

        </Button>
    );
  }
  
}

ButtonIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonIcon);