import React from 'react';

export default class MenuOther extends React.Component {

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

  onClickCourseCoachMe() {
    FlowRouter.go('coursecoachme');
  }

  onClickGallery() {
    FlowRouter.go('gallery');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    return(
      <div>
        <div className="col s6 l3 item-menu-other">
          <a onClick={this.onClickRegister} href=""><img src="/images/mainpage/button/booking.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a onClick={this.onClickUploadTranscript} href=""><img src="/images/mainpage/button/transfer.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a href="http://thebright.in.th/pdf/pay.pdf"><img src="/images/mainpage/button/download.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a href=""><img src="/images/mainpage/button/private.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a href=""><img src="/images/mainpage/button/expo.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a onClick={this.onClickGallery} href=""><img src="/images/mainpage/button/camp.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a onClick={this.onClickCourseCoachMe} href=""><img src="/images/mainpage/button/coach.png"/></a>
        </div>
        <div className="col s6 l3 item-menu-other">
          <a onClick={this.onClickGallery} href=""><img src="/images/mainpage/button/brochure.png"/></a>
        </div>
      </div>
    )
  }
}
