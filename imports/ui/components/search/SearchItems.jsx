import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

export default class DetailStudent extends React.Component {
  constructor(props) {
    super(props);
    this.onCLickStudent = this.onCLickStudent.bind(this);
  }

  onCLickStudent() {
    const count = this.props.item.friendName.length;
    if(count > 0){
      FlowRouter.go(`/groupprofile/${this.props.item.tb_id}`);
    }
    else {
      FlowRouter.go(`/profile/${this.props.item.tb_id}`);
    }
  }

  render() {
    return(
      <li onClick={this.onCLickStudent} className="item-student">
        <div className="collapsible-header">
          <div className="row-item">
            <i className="material-icons">supervisor_account</i>
            <div className="detail-items-student">
              <span>{this.props.item.tb_id}</span>
              <span>{this.props.item.fullName}</span>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

DetailStudent.PropTypes = {
  item: PropTypes.object.isRequired,
};
