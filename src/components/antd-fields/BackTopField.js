import { BackTop } from 'antd';
import React , {Component} from 'react';

// #components-back-top-demo-custom .ant-back-top {
//   bottom: 100px;
// }
// #components-back-top-demo-custom .ant-back-top-inner {
//   height: 40px;
//   width: 40px;
//   line-height: 40px;
//   border-radius: 4px;
//   background-color: #1088e9;
//   color: #fff;
//   text-align: center;
//   font-size: 20px;
// }

class BackTopField extends Component {

  render() {

    return(
<div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
  </div>
  );
  }
}

export default BackTopField;