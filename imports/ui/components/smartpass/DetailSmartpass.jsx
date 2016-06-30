import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


export default class DetailSmartpass extends React.Component {

  render() {
    return(
      <div>
        <h3>The Bright Academy - {this.props.student.province}</h3>
        <div className="detail">
          <div>
            <div className="smart-pass-name"><i className="material-icons">person_pin</i><h4>{this.props.student.fullName}</h4></div>
            <div className="smart-pass-school"><i className="material-icons">store</i><h4>{this.props.student.schoolName}</h4></div>
          </div>
        </div>
      </div>
    )
  }
}

DetailSmartpass.propTypes = {
  student: PropTypes.object.isRequired,
};
