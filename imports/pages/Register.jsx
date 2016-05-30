import React from 'react';

export default class Register extends React.Component {

  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  render() {
    return(
      <div className="register-page">
        <div className="row">
          <div className="col s12 l12"><br/></div>
        </div>

        <div className="row">
          <div className="col s1 l2"><br/></div>

          <div className="col s10 l8 form-section">
            <div className="col s12 l12 head-form">ลงทะเบียนเรียน</div>
            <div className="input-field col s12 l12">
              <select defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="1">เดอะไบร์ท ติว ติด มันส์ พลัส - หาดใหญ่</option>
                <option value="2">เดอะไบร์ท ติว ติด มันส์ พลัส - ขอนแก่น</option>
                <option value="3">เดอะไบร์ท ติว ติด มันส์ - พิษณุโลก</option>
              </select>
              <label>คอร์สเรียน</label>
            </div>
            <div className="input-field col s4 l2">
              <select defaultValue="0">
                <option value="0" disabled>Choose</option>
                <option value="m">นาย</option>
                <option value="f">นางสาว</option>
              </select>
              <label>คำนำหน้า</label>
            </div>
            <div className="input-field col s8 l6">
              <input id="name" type="text" className="validate"/>
              <label for="name">ชื่อ-นามสกุล</label>
            </div>
            <div className="input-field col s12 l4">
              <input id="pin-code" type="number" className="validate"/>
              <label for="pin-code">เลขประจำตัวประชาชน</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="nick-name" type="text" className="validate"/>
              <label for="nick-name">ชื่อเล่น</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="birthday" type="date" className="datepicker"/>
              <label for="birthday">วันเกิด</label>
            </div>
            <div className="input-field col s12 l12">
              <input id="school-name" type="text" className="validate"/>
              <label for="school-name">โรงเรียน</label>
            </div>
            <div className="input-field col s6 l6">
              <input id="class" type="text" className="validate"/>
              <label for="class">ชั้นปี</label>
            </div>
            <div className="input-field col s6 l6">
              <input id="program" type="text" className="validate"/>
              <label for="program">สาย</label>
            </div>
            <div className="input-field col s12 l12">
              <textarea id="address" className="materialize-textarea"></textarea>
              <label for="address">ที่อยู่</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="tel" type="text" className="validate"/>
              <label for="tel">เบอร์โทร</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="email" type="text" className="validate"/>
              <label for="email">อีเมล์</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="facebook" type="text" className="validate"/>
              <label for="facebook">Facebook</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="line-id" type="text" className="validate"/>
              <label for="line-id">ID Line</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="parents-name" type="text" className="validate"/>
              <label for="parents-name">ชื่อผู้ปกครอง</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="relation" type="text" className="validate"/>
              <label for="relation">ความสัมพันธ์</label>
            </div>
            <div className="input-field col s12 l6">
              <input id="parents-tel" type="text" className="validate"/>
              <label for="parents-tel">เบอร์โทรผู้ปกครอง</label>
            </div>
            <div className="input-field col s12 l12">
              <div className="col s0 l4"><br/></div>
              <div className="col s12 l4 section-button">
                <a className="waves-effect waves-light btn green btn-signup">ลงทะเบียนเรียน</a>
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
