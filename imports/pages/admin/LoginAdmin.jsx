import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Admin } from '../../api/Admin.js';
import AdminApprove from './AdminApprove.jsx';

export default class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLogin = this.onClickLogin.bind(this);
  }

  onClickLogin() {
    const id = this.refs.username.value;
    const password = this.refs.password.value;
      this.props.admin.map((ad) => {
        if(ad.a_id === id && ad.password === password) {
          FlowRouter.go('adminapprove');
        }
        else {
          Materialize.toast('Username หรือ Password ผิด', 4000)
        }
      });
    }

  render() {
    return(
      <div className="container-login">
        <div className="box-login z-depth-1">
          <h3>Admin</h3>
          <div className="input-field col l12">
            <input id="username" ref="username" type="text" className="validate"/>
            <label for="username">Username</label>
          </div>
          <div className="input-field col l12">
            <input id="password" ref="password" type="password" className="validate"/>
            <label for="password">Password</label>
          </div>
          <a onClick={this.onClickLogin} className="waves-effect waves-light btn"><i className="material-icons left">vpn_key</i>button</a>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    admin: Admin.find({}).fetch(),
  };
}, LoginAdmin);
