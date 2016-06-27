import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Navigator from '../ui/components/navigator/Navigator.jsx';
import Footer from '../ui/components/footer/Footer.jsx';

// Collaction
import { Students } from '../api/Students.js';

const styleBoxAddFriend = {
  width: '60%',
}

export default class RegisterCamp extends React.Component {
  constructor(props) {
    super(props);
    this.onClickRegister = this.onClickRegister.bind(this);
    this.checkNum = this.checkNum.bind(this);
    this.onClickAddFriend = this.onClickAddFriend.bind(this);
    this.state = {
      friendId: 0,
    }
  }

  componentDidMount() {
    // Scroll page on top
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    // Parallax
      $('select').material_select();
      $('.parallax').parallax();

      return false;
    });

    // Date picker form
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

  }

  onClickAddFriend() {
    // Form Add Friend
    var divTarget = $('#formFriend');
    let friendId = this.state.friendId;
    $(`<div className="input-field col s8 l8"><input id="friend-name${friendId}" type="text" className="validate"/><label for="friend-name">ชื่อ-นามสกุล</label></div><div style="margin-top: -1em" className="input-field col s4 l4"><input id="friend-nick-name${friendId}" type="text" className="validate"/><label for="friend-nick-name">ชื่อเล่น</label></div>`).appendTo(divTarget);
    this.setState({
      friendId: ++friendId,
    })
  }

  checkNum(e){
    if (isNaN(this.refs.pinCode.value)){
      Materialize.toast('กรุณาใส่ตัวเลข', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
      this.refs.pinCode.value = '';
    }
	}

  onClickRegister() {
    const province = this.props.province;
    const prefix = this.refs.prefix.value;
    const fullName = this.refs.fullName.value;
    const pinCode = this.refs.pinCode.value;
    const nickName = this.refs.nickName.value;
    const birthday = this.refs.birthday.value;
    const schoolName = this.refs.schoolName.value;
    const sClass = this.refs.sClass.value;
    const program = this.refs.program.value;
    const address = this.refs.address.value;
    const tel = this.refs.tel.value;
    const email = this.refs.email.value;
    const facebook = this.refs.facebook.value;
    const lineId = this.refs.lineId.value;
    const parentsName = this.refs.parentsName.value;
    const relation = this.refs.relation.value;
    const parentsTel = this.refs.parentsTel.value;
    const approve = "no"
    let friendName = () => {
      let currentId = this.state.friendId - 1;
      let friendGroup = [];
      for( i = currentId; i >= 0; i-- ){
        let data = $(`#friend-name${i}`).val()+"("+ $(`#friend-nick-name${i}`).val() +")"+" , ";
        friendGroup.push(data);
      }
      return friendGroup;
    }

    const students = {
      province,
      prefix,
      fullName,
      pinCode,
      nickName,
      birthday,
      schoolName,
      sClass,
      program,
      address,
      tel,
      email,
      facebook,
      lineId,
      parentsName,
      relation,
      parentsTel,
      approve,
      friendName: friendName()
    }

    Students.insert(students);
  }

  render() {
    return(
      <div>
        <Navigator />
        <div className="register-page">
          <div className="row space">
            <div className="col s12 l12"><br/></div>
          </div>

          <div className="row">
            <div className="col s1 l2"><br/></div>

            <div className="col s10 l8 form-section">
              <div className="col s12 l12 head-form">ลงทะเบียนเรียน</div>
              <div className="input-field col s4 l2">
                <select ref="prefix" defaultValue="0">
                  <option value="0" disabled>Choose</option>
                  <option value="Mr">นาย</option>
                  <option value="Ms">นางสาว</option>
                </select>
                <label>คำนำหน้า</label>
              </div>
              <div className="input-field col s8 l6">
                <input id="name" ref="fullName" type="text" className="validate"/>
                <label for="name">ชื่อ-นามสกุล</label>
              </div>
              <div className="input-field col s12 l4">
                <input onKeyDown={this.checkNum} ref="pinCode" id="pin-code" type="text" className="validate" maxLength="13"/>
                <label for="pin-code">เลขประจำตัวประชาชน</label>
              </div>
              <div className="input-field col s12 l6">
                <input ref="nickName" id="nick-name" type="text" className="validate"/>
                <label for="nick-name">ชื่อเล่น</label>
              </div>
              <div className="input-field col s12 l6">
                <input ref="birthday" id="birthday" type="date" className="datepicker"/>
                <label for="birthday">วันเกิด</label>
              </div>
              <div className="input-field col s12 l12">
                <input ref="schoolName" id="school-name" type="text" className="validate"/>
                <label for="school-name">โรงเรียน</label>
              </div>
              <div className="input-field col s6 l6">
                <select ref="sClass" defaultValue="0">
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
                <input ref="lineId" id="line-id" type="text" className="validate"/>
                <label for="line-id">ID Line</label>
              </div>
              <div className="input-field col s12 l6">
                <input ref="parentsName" id="parents-name" type="text" className="validate"/>
                <label for="parents-name">ชื่อผู้ปกครอง</label>
              </div>
              <div className="input-field col s12 l6">
                <input ref="relation" id="relation" type="text" className="validate"/>
                <label for="relation">ความสัมพันธ์</label>
              </div>
              <div className="input-field col s12 l6">
                <input ref="parentsTel" id="parents-tel" type="text" className="validate"/>
                <label for="parents-tel">เบอร์โทรผู้ปกครอง</label>
              </div>
              <div className="input-field col s12 l12">
                <div className="col s6 l6 friend">
                  <span>มีเพื่อนมาเรียนด้วย</span>
                </div>
                <div className="col s6 l6 friend-button ">
                  <a onClick={this.onClickAddFriend} className="waves-effect waves-light btn green btn-add-friend">+ เพิ่มเพื่อน</a>
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
                      onClick={this.onClickRegister}
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
        <Footer />
      </div>
    )
  }
}
