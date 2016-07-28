import React from 'react';

// Component
import ItemPoster from '../../ui/components/mainpage/ItemPoster.jsx';
export default class WhyTheBright extends React.Component {

  getItemPoster() {
    return [
      { _id: 1, src: '/images/whythebright/why.jpg'}
    ];
  }

  renderposter() {
    return this.getItemPoster().map((picture) => (
      <ItemPoster key={picture._id} picture={picture} />
    ));
  }

  render() {
    return(
      <div className="why-the-bright">
        {this.renderposter()}
      </div>
    )
  }
}
