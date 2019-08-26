import { Rate } from 'antd';
import React , {Component} from 'react';


class RateField extends Component {

  render() {

    var ratings = this.props.list.users_ratings_comments ? this.props.list.users_ratings_comments.map((detail)=> {

      if(detail.rating) {
        console.log('RateComponent',detail.rating.toFixed(1));
        return detail.rating.toFixed(1)
      } else {
        return 0
      }
    }) : null

    ratings = parseFloat(ratings)

    var disabled = this.props.user ? false : true;
    console.log('disabled', disabled, this.props.user)

    return(
      <Rate allowHalf defaultValue={ratings} disabled = {disabled} onChange={(e) => {
        if(this.props.user) {
          const movie_id = this.props.list._id
          var user_id = this.props.user.user._id
          user_id = user_id.toString()
          const rating = e
  
          this.props.updateRating(movie_id, user_id, rating)
        }else {
          return alert("Login to add ratings for the movie");
        }
      }
    } onKeyDown={() => alert("Login to add ratings for the movie")} className={this.props.className}/>
    )
  }
}

export default RateField;