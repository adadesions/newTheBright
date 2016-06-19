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

  renderNameHatyai() {
    return this.props.studentsHatyai.map((names) => (
      <StudentItems key={names._id} names={names} />
    ));
  }
  renderNameKhonkaen() {
    return this.props.studentsKhonkaen.map((names) => (
      <StudentItems key={names._id} names={names} />
    ));
  }
  renderNamePhitsanulok() {
    return this.props.studentsPhitsanulok.map((names) => (
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
          <div className="col l3 s12">
            <h5>Hatyai</h5>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderNameHatyai()}
            </ul>
          </div>
          <div className="col l3 s12">
            <h5>Khonkaen</h5>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderNameKhonkaen()}
            </ul>
          </div>
          <div className="col l3 s12">
            <h5>Phitsanulok</h5>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderNamePhitsanulok()}
            </ul>
          </div>
          <div className="col l3 s12">
            <h5>Approved</h5>
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
    studentsHatyai: Students.find({"approve": "no","province": "hatyai"}).fetch(),
    studentsKhonkaen: Students.find({"approve": "no","province": "khonkaen"}).fetch(),
    studentsPhitsanulok: Students.find({"approve": "no","province": "phitsanulok"}).fetch(),
    studentsApprove: Students.find({"approve": "yes"}).fetch(),
  };
}, Admin);
