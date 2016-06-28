import React, { PropTypes } from 'react';

export default class ItemsCourse extends React.Component {

  render() {
    return(
      <div className="items-course">
        <div className="header-course">
          <img src={this.props.poster.head}/>
        </div>
        <div className="poster-course">
          <img src={this.props.poster.detail}/>
        </div>
        <div className="row">
          <div className="col s6 l3 item-menu-course">
            <a href=""><img src="/images/course/regis-btn.png"/></a>
            <span>Register</span>
          </div>
          <div className="col s6 l3 item-menu-course">
            <a href=""><img src="/images/course/print-btn.png"/></a>
            <span>Print Bill</span>
          </div>
          <div className="col s6 l3 item-menu-course">
            <a href=""><img src="/images/course/pay-btn.png"/></a>
            <span>Pay</span>
          </div>
          <div className="col s6 l3 item-menu-course">
            <a href=""><img src="/images/course/acc-btn.png"/></a>
            <span>Accomodation</span>
          </div>
        </div>
      </div>
    )
  }
}

ItemsCourse.propTypes = {
  poster: PropTypes.object.isRequired,
};
