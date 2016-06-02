import React from 'react';

// Component
import ItemPoster from '../../ui/components/mainpage/ItemPoster.jsx';
export default class KnowTheBright extends React.Component {

  getItemPoster() {
    return [
      { _id: 1, src: '/images/whythebright/know.jpg'}
    ];
  }

  renderposter() {
    return this.getItemPoster().map((picture) => (
      <ItemPoster key={picture._id} picture={picture} />
    ));
  }

  render() {
    return(
      <div className="know-the-bright">
        {this.renderposter()}
      </div>
    )
  }
}
