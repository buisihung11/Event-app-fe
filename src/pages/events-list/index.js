
import React from 'react';
import { enquireScreen } from 'enquire-js';

import './less/index.less';
import EventList from './EventList'
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <EventList className="event-list-wrapper" />
    ];
    return this.state.show && children;
  }
}


