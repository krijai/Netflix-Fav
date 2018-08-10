import { Rate } from 'antd';
import React , {Component} from 'react';


class RateField extends Component {

  render() {

    var ratings = this.props.list.users_ratings_comments.map((detail)=> {

      if(detail.rating) {
        console.log('RateComponent',detail.rating.toFixed(1));
        return detail.rating.toFixed(1)
      } else {
        return 0
      }
    })

    ratings = parseFloat(ratings)

    return(
      <Rate allowHalf defaultValue={ratings} onChange={(e) =>{
        const movie_id = this.props.list._id
        var user_id = this.props.user.user._id
        user_id = user_id.toString()
        const rating = e

        this.props.updateRating(movie_id, user_id, rating)
      }} className={this.props.className}/>
    )
  }
}

export default RateField;