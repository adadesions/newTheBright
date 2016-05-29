import React from 'react';

export default class UploadTranscript extends React.Component {

  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  render() {
    return(
      <div className="upload-transcript-page">
        <div className="row">
          <div className="col s12 l12"><br/></div>
        </div>

        <div className="row">
          <div className="col s1 l2"><br/></div>

          <div className="col s10 l8 form-section">
            <div className="col s12 l12 head-form">แจ้งการโอนเงิน</div>
            <div className="col s12 l12">
              <div className="col s0 l6"><br/></div>
              <div className="input-field col s12 l6">
                <input id="the-bright-id" type="text" className="validate"/>
                <label for="the-bright-id">The Bright ID</label>
              </div>
            </div>
            <div className="input-field col s12 l6">
              <select defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="1">โอนเงิน</option>
                <option value="2">paypal</option>
              </select>
              <label>ช่องทางการชำระเงิน</label>
            </div>
            <div className="input-field col s12 l3">
              <input id="day-for-tranfer" type="date" className="datepicker"/>
              <label for="day-for-tranfer">วันที่ชำระ</label>
            </div>
            <div className="input-field col s12 l3">
              <input id="time-for-tranfer" type="text" className="validate"/>
              <label for="time-for-tranfer">เวลาที่ชำระเงิน</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="money-number" type="text" className="validate"/>
              <label for="money-number">จำนวนเงิน</label>
            </div>
            <div className="file-field input-field col s12 l6">
              <div className="btn btn-upload-file">
                <span>File</span>
                <input type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" placeholder="สลิปธนาคาร" type="text"/>
              </div>
            </div>
            <div className="input-field col s12 l12">
              <div className="col s0 l4"><br/></div>
              <div className="col s12 l4 section-button">
                <a className="waves-effect waves-light btn green btn-upload-transcription">แจ้งชำระเงิน</a>
              </div>
              <div className="col s0 l4"><br/></div>
            </div>
          </div>

          <div className="col s1 l2"><br/></div>
        </div>

        <div className="row">
          <div className="col s12 l12"><br/></div>
        </div>
      </div>
    )
  }
}
