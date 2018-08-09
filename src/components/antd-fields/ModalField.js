import { Modal, Button } from 'antd';
import React , {Component} from 'react';
import '../../assets/styles/modal.scss'

class ModalField extends Component {
  state = {
    modal2Visible: false,
    player: false
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  startTrailer = () => {
    this.setState({ player: true });
  }

  stopTrailer = (e) => {
    this.setState({ player: false });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => {
          this.setModal2Visible(true)
          this.startTrailer()
        }
        }>Watch Trailer</Button>
        <Modal
          title={`${this.props.list.title} - Trailer`}
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => {this.setModal2Visible(false)
          this.stopTrailer()}}
          footer={null}
          keyboard={true}
          width ={850}
          height={500}
        >
          <iframe id="player_id" name="playerid" width="100%" height="100%" src={this.state.player ? `https://www.youtube.com/embed/${this.props.list.video}?enablejsapi=1&cc_load_policy=0&controls=1&showinfo=0&rel=0&modestbranding=0&loop=1&autoplay=1` : ''} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen" 
          ></iframe>
        </Modal>
      </div>
    );
  }
}

export default ModalField;