import React from 'react';

export default class LearningSystem extends React.Component {
  render() {
    return(
      <div className="row learning-row-menu">
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-01.png"/></a></div>
            <div><span>แผนการเรียน</span></div>
          </div>
        </div>
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-02.png"/></a></div>
            <div><span>ติดตาม</span></div>
          </div>
        </div>
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-03.png"/></a></div>
            <div><span>นอกห้องเรียน</span></div>
          </div>
        </div>
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-04.png"/></a></div>
            <div><span>Coach</span></div>
          </div>
        </div>
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-05.png"/></a></div>
            <div><span>Self</span></div>
          </div>
        </div>
        <div className="col s12 l4 item-menu-learning">
          <div className="menu-learning">
            <div><a href=""><img src="/images/mainpage/learning-system/emblem-06.png"/></a></div>
            <div><span>เด็กเก่ง</span></div>
          </div>
        </div>
      </div>
    )
  }
}
