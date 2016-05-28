import React from 'react';

export default class MenuNavigator extends React.Component {

  componentDidMount() {
    $(".dropdown-button").dropdown();
  }

  onClickMainpage() {
    FlowRouter.go('main');
  }

  onClickRegister() {
    FlowRouter.go('register');
  }

  onClickUploadTranscript() {
    FlowRouter.go('paidform');
  }

  render() {
    return(
      <div className="menu-navigator-component">
        <nav className="menu-navigator">
          <div className="nav-wrapper">
            <ul>
              <li><a id="mainPage" onClick={this.onClickMainpage} href="">หน้าแรก</a></li>
              <li><a id="whyTheBright" className="dropdown-button" href="" data-activates="why-the-bright-list">Why TheBright<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="teamTheBright" className="dropdown-button" href="" data-activates="team-the-brgiht-list">ทีมเดอะไบร์ท<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="course" className="dropdown-button" href="" data-activates="course-list">คอร์สเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="register" className="dropdown-button" href="" data-activates="register-list">สมัครเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="gallery" href="">ภาพประทับใจ</a></li>
              <li><a id="contact" href="">ติดต่อเรา</a></li>
            </ul>
          </div>
        </nav>
        <ul id="why-the-bright-list" className="dropdown-content">
          <li><a href="">รู้จักเดอะไบร์ท</a></li>
          <li><a href="">ทำไมต้องเดอะไบร์ท</a></li>
          <li><a href="">ทำเนียบเด็กเก่ง</a></li>
        </ul>
        <ul id="team-the-brgiht-list" className="dropdown-content">
          <li><a href="">สุดยอดติวเตอร์</a></li>
          <li><a href="">เดอะไบร์ททีม</a></li>
        </ul>
        <ul id="course-list" className="dropdown-content">
          <li><a href="">ค่าย ติว ติด ชัวร์ ตุลา 59</a></li>
          <li><a href="">เดอะไบร์ท ติว ติด มันส์ 59</a></li>
          <li><a href="">Coach Me Program</a></li>
        </ul>
        <ul id="register-list" className="dropdown-content">
          <li onClick={this.onClickRegister}><a href="">ขั้นตอนการสมัคร</a></li>
          <li onClick={this.onClickUploadTranscript}><a href="">แจ้งการชำระเงิน</a></li>
          <li><a href="">ดาวน์โหลดใบชำระเงิน</a></li>
        </ul>
      </div>
    )
  }
}
