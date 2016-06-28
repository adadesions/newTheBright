import React from 'react';

export default class Register extends React.Component {

  componentDidMount() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  }

  render() {
    return(
      <div className="register-page">
        <div className="row how-to-register">
          <div className="col l12">
            <img className="z-depth-1" src="/images/register/how-register.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}
