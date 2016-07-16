import React from 'react';

// Components
import BoxSocial from '../mainpage/BoxSocial.jsx';
import ItemSocials from '../mainpage/ItemSocials.jsx';

export default class Footer extends React.Component {
  componentDidMount() {
    $( document ).ready(function(){
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

  onClickContact() {
    FlowRouter.go('contact');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickCourseM4() {
    FlowRouter.go('coursem4');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickCourseM5() {
    FlowRouter.go('coursem5');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickCourseCoachMe() {
    FlowRouter.go('coursecoachme');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  onClickCheck() {
    FlowRouter.go('search');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    return(
      <div className="footer-social z-depth-1">
        <div className="row social-contact">
          <div className="col s6 l7 page-box">
            <BoxSocial />
          </div>
          <div className="col s6 l5">
            <ItemSocials />
              <div className="contact-center">
                <img src="/images/footer/contact.png"/>
              </div>
          </div>
        </div>
        <div className="footer">
          <div><span>© Copyright - Thebright</span></div>
          <div className="menu-navigator-component">
            <nav className="menu-navigator">
              <div className="nav-wrapper">
                {/*<a href="#" data-activates="mobile-list" className="button-collapse"><i className="fa fa-bars fa-5x" aria-hidden="true"></i></a>*/}
                <ul className="desktop-list">
                  <li><a id="mainPage-footer" onClick={this.onClickMainpage} href="">หน้าแรก</a></li>
                  <li><a id="course-footer" className="dropdown-button" href="" data-activates="course-list-footer">คอร์สเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
                  <li><a id="register-footer" className="dropdown-button" href="" data-activates="register-list-footer">สมัครเรียน<i className="material-icons right">arrow_drop_down</i></a></li>
                  <li onClick={this.onClickContact}><a id="contact-footer" href="">ติดต่อเรา</a></li>
                </ul>
              </div>
            </nav>
            <ul id="course-list-footer" className="dropdown-content">
              <li onClick={this.onClickCourseM4} className="list-course"><a id="m4" href="">ค่าย ติว ติด ชัวร์ ตุลา 59</a></li>
              <li onClick={this.onClickCourseM5} className="list-course"><a id="m5" href="">เดอะไบร์ท ติว ติด มันส์ 59</a></li>
              <li onClick={this.onClickCourseCoachMe} className="list-course"><a id="m6" href="">Coach Me Program</a></li>
            </ul>
            <ul id="register-list-footer" className="dropdown-content">
              <li onClick={this.onClickRegister}><a href="">ขั้นตอนการสมัคร</a></li>
              <li onClick={this.onClickUploadTranscript}><a href="">แจ้งการชำระเงิน</a></li>
              <li onClick={this.onClickCheck}><a href="">ตรวจสอบรายชื่อ</a></li>
              <li><a href="http://thebright.in.th/pdf/pay.pdf">ดาวน์โหลดใบชำระเงิน</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
