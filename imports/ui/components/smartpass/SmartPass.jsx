import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

// Components
import DetailSmartpass from './DetailSmartpass.jsx';

export default class SmartPass extends React.Component {

  constructor(props) {
    super(props);
    this.printSmartPass = this.printSmartPass.bind(this);
  }

  componentDidMount() {
    // Convert canvas to img
    var canvas1 = document.getElementById("qr-id");
      if (canvas1.getContext) {
         var ctx = canvas1.getContext("2d");
         var myImage = canvas1.toDataURL("image/png");
      }

      var imageElement = document.getElementById("img-qr");
      imageElement.src = myImage;
  }

  printSmartPass() {
    // Ready to print
    var printContents = document.getElementById('smart-print').innerHTML;
    var originalContents = document.body.innerHTML;

    // Print
    document.body.innerHTML = printContents;

    window.print(originalContents);

    document.body.innerHTML = originalContents;
  }

  renderDetial(student) {
    if( student ){
      return <DetailSmartpass student={student} />
    }
  }

  render() {
    return(
      <div className="smart-pass">
        <div className="print-btn">
          <a onClick={this.printSmartPass} className="waves-effect waves-light btn  indigo">print</a>
        </div>
        <div id="smart-print">
          <div id="smartItem" className="row smart-item">
            <div id="detail-print">
              <div className="col s2 l2 qr-code-img">
                <QRCode
                  value={`http://023ecd75.ngrok.io/profile/${this.props.tb_id}`}
                  size={180}
                  bgColor={"rgba(255,255,255,0)"}
                  fgColor={"#fff"}
                  level={"L"}
                />
              <img id="img-qr" src="" alt=""/>
              </div>
              <div className="col s8 l8 smart-pass-detail">
                <div>
                  <div className="tb-id-smartpass">
                    <h5>{this.props.tb_id}</h5>
                  </div>
                  { this.renderDetial(this.props.student) }
                </div>
              </div>
              <div className="col s2 l2 smart-pass-other">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SmartPass.propsTypes = {
  tb_id: PropTypes.string.isRequired,
}

export default createContainer((props) => {
  const params = props.tb_id;
  let student = Students.findOne({'tb_id': params});
  return {
    student,
  };
}, SmartPass);
