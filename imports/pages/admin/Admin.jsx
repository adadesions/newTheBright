import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
// Collection
import { Students } from '../../api/Students.js';

// Components
import StudentItems from '../../ui/components/admin/StudentItems.jsx';
import StudentItemsApprove from '../../ui/components/admin/StudentItemsApprove.jsx';

export default class Admin extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }

  renderName() {
    return this.props.students.map((names) => (
      <StudentItems key={names._id} names={names} />
    ));
  }

  renderNameApprove() {
    return this.props.studentsApprove.map((names) => (
      <StudentItemsApprove key={names._id} names={names} />
    ));
  }

  render() {
    return(
      <div className="admin">
        <div className="row">
          <div className="col l6">
            <h4>Students</h4>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderName()}
            </ul>
          </div>
          <div className="col l6">
            <h4>Students Approve</h4>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderNameApprove()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    students: Students.find({"approve": "no"}).fetch(),
    studentsApprove: Students.find({"approve": "yes"}).fetch(),
  };
}, Admin);
