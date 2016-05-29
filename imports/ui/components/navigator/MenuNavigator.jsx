import React from 'react';

export default class MenuNavigator extends React.Component {

  componentDidMount() {

    $( document ).ready(function(){
      $(".button-collapse").sideNav({
        edge: 'right',
        menuWidth: 400
      });

      $(".dropdown-button").dropdown();
    });

  }

  onClickMainpage() {
    FlowRouter.go('main');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickRegister() {
    FlowRouter.go('register');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickUploadTranscript() {
    FlowRouter.go('paidform');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    return(
      <div className="menu-navigator-component">
        <nav className="menu-navigator">
          <div className="nav-wrapper">
            <a href="#" data-activates="mobile-list" className="button-collapse"><i className="fa fa-bars fa-5x" aria-hidden="true"></i></a>
            <ul className="desktop-list">
              <li><a id="mainPage" onClick={this.onClickMainpage} href="">หน้าแรก</a></li>
              <li><a id="whyTheBright" className="dropdown-button" href="" data-activates="why-the-bright-list">Why TheBright<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="teamTheBright" className="dropdown-button" href="" data-activates="team-the-bright-list">ทีมเดอะไบร์ท<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="course" className="dropdown-button" href="" data-activates="course-list">คอร์สเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="register" className="dropdown-button" href="" data-activates="register-list">สมัครเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a id="gallery" href="">ภาพประทับใจ</a></li>
              <li><a id="contact" href="">ติดต่อเรา</a></li>
            </ul>
            <ul className="side-nav" id="mobile-list">
              <li><a id="mainPage" className="button-left" onClick={this.onClickMainpage} href="">หน้าแรก</a></li>
              <li><a id="whyTheBright" className="button-left" href="">Why TheBright</a></li>
                <li><a className="button-right" href="">รู้จักเดอะไบร์ท</a></li>
                <li><a className="button-right" href="">ทำไมต้องเดอะไบร์ท</a></li>
                <li><a className="button-right" href="">ทำเนียบเด็กเก่ง</a></li>
              <li><a id="teamTheBright" className="button-left" href="">ทีมเดอะไบร์ท</a></li>
                <li><a className="button-right" href="">สุดยอดติวเตอร์</a></li>
                <li><a className="button-right" href="">เดอะไบร์ททีม</a></li>
              <li><a id="course" className="button-left" href="">คอร์สเรียน</a></li>
                <li><a className="button-right" href="">ค่าย ติว ติด ชัวร์ ตุลา 59</a></li>
                <li><a className="button-right" href="">เดอะไบร์ท ติว ติด มันส์ 59</a></li>
                <li><a className="button-right" href="">Coach Me Program</a></li>
              <li><a id="register" className="button-left" href="">สมัครเรียน</a></li>
                <li onClick={this.onClickRegister}><a className="button-right" href="">ขั้นตอนการสมัคร</a></li>
                <li onClick={this.onClickUploadTranscript}><a className="button-right" href="">แจ้งการชำระเงิน</a></li>
                <li><a className="button-right" href="">ดาวน์โหลดใบชำระเงิน</a></li>
              <li><a id="gallery" className="button-left" href="">ภาพประทับใจ</a></li>
              <li><a id="contact" className="button-left" href="">ติดต่อเรา</a></li>
            </ul>
          </div>
        </nav>
        <ul id="why-the-bright-list" className="dropdown-content">
          <li><a href="">รู้จักเดอะไบร์ท</a></li>
          <li><a href="">ทำไมต้องเดอะไบร์ท</a></li>
          <li><a href="">ทำเนียบเด็กเก่ง</a></li>
        </ul>
        <ul id="team-the-bright-list" className="dropdown-content">
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
