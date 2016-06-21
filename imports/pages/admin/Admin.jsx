import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { $ } from 'meteor/jquery';
// Collection
import { Students } from '../../api/Students.js';

// Components
import StudentItems from '../../ui/components/admin/StudentItems.jsx';
import StudentItemsApprove from '../../ui/components/admin/StudentItemsApprove.jsx';

export default class Admin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      province: 1,
    }
    this.renderName = this.renderName.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });

    $('.menu-khonkaen').addClass('active');

    $('.menu-khonkaen').click(() => {
      $('.menu-khonkaen').addClass('active');
      $('.menu-hatyai').removeClass('active');
      $('.menu-phitsanulok').removeClass('active');
    })
    $('.menu-hatyai').click(() => {
      $('.menu-hatyai').addClass('active');
      $('.menu-khonkaen').removeClass('active');
      $('.menu-phitsanulok').removeClass('active');
    })
    $('.menu-phitsanulok').click(() => {
      $('.menu-phitsanulok').addClass('active');
      $('.menu-hatyai').removeClass('active');
      $('.menu-khonkaen').removeClass('active');
    })
  }

  renderName(e) {
    var province = 0;
    if(e.target.className == "menu-khonkaen active"){
      province = 1;
    }
    else if(e.target.className == "menu-hatyai active"){
      province = 2;
    }
    else if(e.target.className == "menu-phitsanulok active"){
      province = 3;
    }

    this.setState({
      province,
    })
  }

  renderList() {
    if(this.state.province == 1){
      return this.props.studentsKhonkaen.map((names) => (
        <StudentItems key={names._id} names={names} />
      ));
    }
    else if(this.state.province == 2){
      return this.props.studentsHatyai.map((names) => (
        <StudentItems key={names._id} names={names} />
      ));
    }
    else if(this.state.province == 3){
      return this.props.studentsPhitsanulok.map((names) => (
        <StudentItems key={names._id} names={names} />
      ));
    }
    else{

    }

  }

  renderListApprove() {
    if(this.state.province == 1){
      return this.props.studentsApproveKhonkaen.map((names) => (
        <StudentItemsApprove key={names._id} names={names} />
      ));
    }
    else if(this.state.province == 2){
      return this.props.studentsApproveHatyai.map((names) => (
        <StudentItemsApprove key={names._id} names={names} />
      ));
    }
    else if(this.state.province == 3){
      return this.props.studentsApprovePhitsanulok.map((names) => (
        <StudentItemsApprove key={names._id} names={names} />
      ));
    }
    else{

    }

  }

  render() {
    return(
      <div className="admin">
        <div className="row head-admin">
          <h3>Admin Site</h3>
        </div>
        <div className="row">
          <div className="col l2 menu-admin">
            <div onClick={this.renderName} className="menu-khonkaen">Khonkaen</div>
            <div onClick={this.renderName} className="menu-hatyai">Hatyai</div>
            <div onClick={this.renderName} className="menu-phitsanulok">Phitsanulok</div>
          </div>
          <div className="col l5 list-student">
            <h5>Students</h5>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderList()}
            </ul>
          </div>
          <div className="col l5 list-student">
            <h5>Approved</h5>
            <ul className="collapsible popout" data-collapsible="accordion">
              {this.renderListApprove()}
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
    studentsApproveHatyai: Students.find({"approve": "yes","province": "hatyai"}).fetch(),
    studentsApproveKhonkaen: Students.find({"approve": "yes","province": "khonkaen"}).fetch(),
    studentsApprovePhitsanulok: Students.find({"approve": "yes","province": "phitsanulok"}).fetch(),
  };
}, Admin);
