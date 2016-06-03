import React from 'react';

// Components
import ItemsCourse from '../../ui/components/course/ItemsCourse.jsx';

export default class CourseCoachMe extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      if(screen.width > 1000){
        $('.parallax').parallax();
      }
    });
  }

  getItem() {
    return [
      { _id: 1, head: '/images/course/coachmeprogram/head.jpg', detail: '/images/course/coachmeprogram/poster.png'}
    ];
  }

  renderItems() {
    return this.getItem().map((poster) => (
      <ItemsCourse key={poster._id} poster={poster} />
    ));
  }

  render() {
    return(
      <div className="course-page parallax-container">
        <div className="parallax"><img src="/images/mainpage/bg-pl.jpg"/></div>
        {this.renderItems()}
      </div>
    )
  }
}
