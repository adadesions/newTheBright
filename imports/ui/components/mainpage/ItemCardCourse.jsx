import React, { Component, PropTypes } from 'react';

export default class ItemCardCourse extends React.Component {
  render() {
    return(
      <div className="col s6 l3 item-card-course">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.items.src}/>
          </div>
          <div className="card-content">
            <div>
              <span className="card-title activator grey-text text-darken-4">สถานที่ : {this.props.items.title}</span>
              <p><a href={this.props.items.linktitle}>สมัครเข้าร่วมงาน</a></p>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>
    )
  }
}

ItemCardCourse.propTypes = {
  items: PropTypes.object.isRequired,
};
