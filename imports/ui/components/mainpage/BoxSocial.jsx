import React from 'react';

// Components
import FacebookBox from './social/FacebookBox.jsx';
import TwitterBox from './social/TwitterBox.jsx';
export default class BoxSocial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTab: "facebook",
    }
    this.onClickTabs = this.onClickTabs.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

  }

  onClickTabs(e) {
    let nameClass = e.target.className;
    if(nameClass == "tab-facebook active"){
      this.setState({
        nameTab: "facebook",
      })
    }
    else if(nameClass == "tab-twitter active"){
      this.setState({
        nameTab: "twitter",
      })
    }
    else if(nameClass == "tab-instagram active"){
      this.setState({
        nameTab: "instagram",
      })
    }
    else if(nameClass == "tab-youtube active"){
      this.setState({
        nameTab: "youtube",
      })
    }
  }

  renderContent(state) {
    let nameState = state;
    if(nameState == "facebook"){
      return <FacebookBox />

    }
    else if (nameState == "twitter") {
      return <TwitterBox />
    }

  }

  render() {
    return(
      <div className="col s10 l9 z-depth-1">
        <ul className="tabs">
          <li className="tab col s3"><a onClick={this.onClickTabs} className="tab-facebook active" href="">Facebook</a></li>
          <li className="tab col s3"><a onClick={this.onClickTabs} className="tab-twitter" href="">Twitter</a></li>
          <li className="tab col s3"><a onClick={this.onClickTabs} className="tab-instagram" href="">Instagram</a></li>
          <li className="tab col s3"><a onClick={this.onClickTabs} className="tab-youtube" href="">Youtube</a></li>
        </ul>
        {this.renderContent(this.state.nameTab)}
        {/*<div id="fb-root"></div>
        <div className="fb-page z-depth-1" data-href="https://www.facebook.com/thebrightofficial" data-tabs="timeline" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/thebrightofficial" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/thebrightofficial">TheBright สถาบันกวดวิชาเดอะไบร์ท</a></blockquote></div>*/}
      </div>
    )
  }
}
