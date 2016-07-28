import React from 'react';

export default class GrayBar extends React.Component {

  render() {
    return(
      <div className="gray-bar">
        <div><span className="text-red">TheBright Hotline</span><span className="black-text"> 092-591-0006</span></div>
        <div className="icon-social">
          <li><a href="https://www.facebook.com/thebrightofficial"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/thebrightacademy/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCJQDdVxg_fFFY2HbzXUK4MA"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
          <li><a href=""><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        </div>
      </div>
    )
  }
}
