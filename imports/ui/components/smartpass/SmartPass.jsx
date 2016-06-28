import React from 'react';

export default class GroupProfile extends React.Component {

  printSmartPass() {
     var printContents = document.getElementById('smartItem').innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
  }

  render() {
    return(
      <div className="smart-pass">
        <div className="print-btn">
          <a onClick={this.printSmartPass} className="waves-effect waves-light btn  indigo">print</a>
        </div>
        <div id="smartItem" className="row smart-item">
          <div className="col s2 l2 qr-code-img">
            <img src="/images/qr-code/test-qr.png"/>
          </div>
          <div className="col s8 l8 smart-pass-detail">
            <div className="tb-id-smartpass">
              <h5>TBP00001</h5>
            </div>
            <h3>The Bright Academy - Phitsanulok</h3>
            <div className="detail">
              <div>
                <div className="smart-pass-name"><i className="material-icons">person_pin</i><h4>Ada Kaminkure</h4></div>
                <div className="smart-pass-school"><i className="material-icons">store</i><h4>Assumption</h4></div>
              </div>
            </div>
          </div>
          <div className="col s2 l2 smart-pass-other">

          </div>
        </div>
      </div>
    )
  }
}
