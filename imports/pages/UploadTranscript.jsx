import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { $ } from 'meteor/jquery';

// upload
import Dropzone from 'react-dropzone';

// Collection
import { Students } from '../api/Students.js';


export default class UploadTranscript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
    this.onClickUpload = this.onClickUpload.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);

      $('.modal-trigger').leanModal();

      $('select').material_select();
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    var componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/images/slip'
    };

  }

  onClickUpload() {
    const tb_id = this.refs.theBrightId.value;
    const optionPayment = this.refs.optionPayment.value;
    const date = this.refs.dateForTranfer.value;
    const time = this.refs.timeForTranfer.value;
    const amount = this.refs.amount.value;
    const slip = this.state.files[0];
    const previewFile = (file) => {
      var reader  = new FileReader();
      reader.onloadend = function () {
        console.log(reader.result); //this is an ArrayBuffer
      }
        reader.readAsArrayBuffer(file);
    }

    previewFile(slip);

    if(tb_id) {
      return this.props.items.map((item) => {
        if(item.tb_id === tb_id) {
          Students.update(
            { '_id' : item._id },
            {
              $set:
              {
               'optionPayment': optionPayment,
                'date': date,
                'time': time,
                'amount': amount,
                'slip': this.state.files[0].name,
              }
            }
          )
          FlowRouter.go('main');
        }
      });
    }

  }

  onDrop(files) {
      files.map((file) => {
        const name = file.name;
        console.log('Received files: ', file);

      })

      this.setState({
        files: files
      });
  }

  render() {
    return(
      <div className="upload-transcript-page">
        <div className="row space">
          <div className="col s12 l12"><br/></div>
        </div>

        <div className="row">
          <div className="col s1 l2"><br/></div>

          <div className="col s10 l8 form-section">
            <div className="col s12 l12 head-form">แจ้งการโอนเงิน</div>
            <div className="col s12 l12">
              <div className="col s0 l6"><br/></div>
              <div className="input-field col s12 l6">
                <input id="the-bright-id" ref="theBrightId" type="text" className="validate"/>
                <label for="the-bright-id">The Bright ID</label>
              </div>
            </div>
            <div className="input-field col s12 l6">
              <select ref="optionPayment" defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="tranfer">โอนเงิน</option>
                {/*<option value="paypal">paypal</option>*/}
              </select>
              <label>ช่องทางการชำระเงิน</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="date-for-tranfer" ref="dateForTranfer" type="date" className="datepicker"/>
              <label for="date-for-tranfer">วันที่ชำระ</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="time-for-tranfer" ref="timeForTranfer" type="text" className="validate"/>
              <label for="time-for-tranfer">เวลาที่ชำระเงิน</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="amount" ref="amount" type="number" className="validate"/>
              <label for="amount">จำนวนเงิน</label>
            </div>
            <div className="input-field upload-slip col s12 l12">
              {this.state.files.length > 0 ? <div>
                <div>{this.state.files.map((file) => <img key={file.name} src={file.preview} /> )}</div>
                </div> :
                <Dropzone
                  onDrop={this.onDrop}
                  config={this.componentConfig}>
                  <div><span>วางรูป หรือ คลิ๊กที่นี้ เพื่ออัพโหลดสลิป</span></div>
                </Dropzone>
              }

            </div>
            <div className="input-field col s12 l12">
              <div className="col s0 l4"><br/></div>
              <div className="col s12 l4 section-button">
                <a href="#modal1" className="waves-effect waves-light btn modal-trigger green btn-upload-transcription">แจ้งชำระเงิน</a>
                  <div id="modal1" className="modal">
                   <div className="modal-content">
                     <h4>Confirm</h4>
                     <p>ยืนยันการแจ้งชำระ ?</p>
                   </div>
                   <div className="modal-footer">
                     <a href="" className="modal-action modal-close waves-effect waves-green btn-flat">DISAGREE</a>
                     <a onClick={this.onClickUpload} href="" className="modal-action modal-close waves-effect waves-green btn-flat">AGREE</a>
                   </div>
                 </div>
              </div>
              <div className="col s0 l4"><br/></div>
            </div>
          </div>

          <div className="col s1 l2"><br/></div>
        </div>

        <div className="row space">
          <div className="col s12 l12"><br/></div>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    items: Students.find({}).fetch(),
  };
}, UploadTranscript);
