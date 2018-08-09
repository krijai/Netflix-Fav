import { BackTop } from 'antd';
import React , {Component} from 'react';
import '../../assets/styles/back-top.scss'


class BackTopField extends Component {

  render() {
    return(
      <div>
        <BackTop loading={{ delay: 1 }}>
          <div className="ant-back-top-inner">up</div>
        </BackTop>
      </div>
  );
  }
}

export default BackTopField;