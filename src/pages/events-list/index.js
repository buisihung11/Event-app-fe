
import React from 'react';
import { enquireScreen } from 'enquire-js';

import EventListLayout from './EventListLayout'
import EventCategoryLayout from '../event-category/EventCategoryLayout'

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
      isFrontPage: true
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
  static getDerivedStateFromProps(nextProps, prevState) {
    if ((nextProps.location.query.category ===undefined) !== prevState.isFrontPage){
      const category = nextProps.location.query.category
      return {
        isFrontPage:category===undefined
       }
   }
   return null;
 }
  render() {
    let children=null;
    if(this.state.isFrontPage){
      children= [
        <EventListLayout className="event-list-wrapper" isMobile={this.state.isMobile} />
      ];
    }else{
      children= [
        <EventCategoryLayout className="event-list-wrapper" isMobile={this.state.isMobile} />
      ];
    }
     
    return this.state.show && children;
  }
}


