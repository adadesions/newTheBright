import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../api/Students.js';

// Components
import DetailStudent from '../../ui/components/profile/DetailStudent.jsx';

export default class IndividualProfile extends React.Component {

  renderListStudent() {
    return this.props.students.map((students) => (
      <DetailStudent key={students._id} students={students} />
    ));
  }

  render() {
    return(
      <div className="ind-profile">
        {this.renderListStudent()}
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    students: Students.find({"_id": "ZePaa4wJuYje8aCSf"}).fetch(),
  };
}, IndividualProfile);
