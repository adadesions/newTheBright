import React from 'react';

const styleBoxAddFriend = {
  width: '60%',
}

export default class Register extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

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

    var divTarget = $('#formFriend');
    var i = $('#formFriend div').size() + 1;

    $('.btn-add-friend').on('click', function() {
            $('<div className="input-field col s8 l8"><input id="friend-name" type="text" className="validate"/><label for="friend-name">ชื่อ-นามสกุล</label></div><div style="margin-top: -1em" className="input-field col s4 l4"><input id="friend-nick-name" type="text" className="validate"/><label for="friend-nick-name">ชื่อเล่น</label></div>').appendTo(divTarget);
            i++;
            return false;
    });

    $('#remScnt').on('click', function() {
            if( i > 2 ) {
                    $(this).parents('p').remove();
                    i--;
            }
            return false;
    });
  }

  render() {
    return(
      <div className="register-page">
        <div className="row space">
          <div className="col s12 l12"><br/></div>
        </div>

        <div className="row">
          <div className="col s1 l2"><br/></div>

          <div className="col s10 l8 form-section">
            <div className="col s12 l12 head-form">ลงทะเบียนเรียน</div>
            <div className="input-field col s12 l12">
              <select ref="course" defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="1">เดอะไบร์ท ติว ติด มันส์ พลัส - หาดใหญ่</option>
                <option value="2">เดอะไบร์ท ติว ติด มันส์ พลัส - ขอนแก่น</option>
                <option value="3">เดอะไบร์ท ติว ติด มันส์ - พิษณุโลก</option>
              </select>
              <label>คอร์สเรียน</label>
            </div>
            <div className="input-field col s4 l2">
              <select ref="prefix" defaultValue="0">
                <option value="0" disabled>Choose</option>
                <option value="Mr">นาย</option>
                <option value="Ms">นางสาว</option>
              </select>
              <label>คำนำหน้า</label>
            </div>
            <div className="input-field col s8 l6">
              <input id="name" type="text" className="validate"/>
              <label ref="fullname" for="name">ชื่อ-นามสกุล</label>
            </div>
            <div className="input-field col s12 l4">
              <input ref="id-number" id="id-number" type="number" className="validate"/>
              <label for="id-number">เลขประจำตัวประชาชน</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="nick-name" id="nick-name" type="text" className="validate"/>
              <label for="nick-name">ชื่อเล่น</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="birthday" id="birthday" type="date" className="datepicker"/>
              <label for="birthday">วันเกิด</label>
            </div>
            <div className="input-field col s12 l12">
              <input ref="school-name" id="school-name" type="text" className="validate"/>
              <label for="school-name">โรงเรียน</label>
            </div>
            <div className="input-field col s6 l6">
              <select ref="class" defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="M4">ม.4</option>
                <option value="M5">ม.5</option>
                <option value="M6">ม.6</option>
              </select>
              <label for="class">ชั้นปี</label>
            </div>
            <div className="input-field col s6 l6">
              <select ref="program" defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="Science">สายวิทย์</option>
                <option value="Arts">สายศิลป์</option>
              </select>
              <label for="program">สาย</label>
            </div>
            <div className="input-field col s12 l12">
              <textarea ref="address" id="address" className="materialize-textarea"></textarea>
              <label for="address">ที่อยู่</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="tel" id="tel" type="text" className="validate"/>
              <label for="tel">เบอร์โทร</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="email" id="email" type="text" className="validate"/>
              <label for="email">อีเมล์</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="facebook" id="facebook" type="text" className="validate"/>
              <label for="facebook">Facebook</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="line-id" id="line-id" type="text" className="validate"/>
              <label for="line-id">ID Line</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="parents-name" id="parents-name" type="text" className="validate"/>
              <label for="parents-name">ชื่อผู้ปกครอง</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="relation" id="relation" type="text" className="validate"/>
              <label for="relation">ความสัมพันธ์</label>
            </div>
            <div className="input-field col s12 l6">
              <input ref="parents-tel" id="parents-tel" type="text" className="validate"/>
              <label for="parents-tel">เบอร์โทรผู้ปกครอง</label>
            </div>
            <div className="input-field col s12 l12">
              <div className="col s6 l6 friend">
                <span>มีเพื่อนมาเรียนด้วย</span>
              </div>
              <div className="col s6 l6 friend-button ">
                <a className="waves-effect waves-light btn green btn-add-friend">+ เพิ่มเพื่อน</a>
              </div>
            </div>
            <div style={styleBoxAddFriend} id="formFriend" className="row">

            </div>
            <div className="input-field col s12 l12">
              <div className="col s0 l4"><br/></div>
              <div className="col s12 l4 section-button">
                <button
                    type="button"
                    className="waves-effect waves-light btn green btn-signup"
                >
                   ลงทะเบียนเรียน
                 </button>
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
