import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class CardField extends Component {
  render() {
    return(
      <Card
      hoverable
      cover={<img alt={this.props.imageAlt} src={this.props.imageSrc} />}
      className={this.props.className}
    />
    )
  }
}

  export default CardField
