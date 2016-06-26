import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../api/Students.js';

export default class DetailStudent extends React.Component {

  render() {
    return(
      <div className="ind-profile-detail">
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.fullName}</h5></div>
      </div>
    )
  }
}

DetailStudent.propTypes = {
  students: PropTypes.object.isRequired,
};
