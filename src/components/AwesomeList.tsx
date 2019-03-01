import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAwesomeState, IAwesomeEntry } from '../typings';

class AwesomeList extends Component<IAwesomeState> {
  render() {
    const awesomeList = this.props.lists.find((list: any) => list.type === 'Awesome');
    if (!awesomeList) {
      // TODO: Wasn't there some new React thingy for this?
      return null;
    }

    return (
      <div className="awesome-list">
        <h1>Contents</h1>
        <ul>
          {awesomeList.content.map((content: IAwesomeEntry) => (
            <li key={content.linkHref}><a href={content.linkHref}>{content.linkText}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state: IAwesomeState) => state)(AwesomeList);
