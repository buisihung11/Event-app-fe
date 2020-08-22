import { Component } from 'react';
import Content from './Content';
import EventListSider from './EventListSider';
import { Layout } from 'antd';
import FilterDrawer from './FilterDrawer';

const fakeEvents = [];
for (let i = 1; i <= 9; i++) {
  fakeEvents.push({
    name: 'Sự kiện ' + i,
    location: 'Dongo 184 Crono, Canada',
    price:  i === 2 ? 0 : i * 20,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  });
}
fakeEvents.push({
  name: 'Sự kiện cuoi',
  location: 'Dongo 184 Crono, Canada',
  price: 10,
  imageURL:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
});

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: fakeEvents,
      timeFilterValue: 'today',
      currentPage: 1,
      totalPages: 30,
      isDrawerShown: false,
    };
  }

  onTimeFilterChange = (e) => {
    this.setState({
      timeFilterValue: e.target.value,
    });
  };
  onDatePickerChange = (date, dateString) => {
    this.setState({
      timeFilterValue: dateString,
    });
  };
  onPaginationChange = (page, pageSize) => {
    this.setState({
      currentPage: page,
    });
  };
  triggerDrawer = () => {
    this.setState({
      isDrawerShown: true,
    });
  };
  onDrawerClose = () => {
    this.setState({
      isDrawerShown: false,
    });
  };
  render = () => (
    <Layout className="event-list-wrapper">
      <FilterDrawer
        isDrawerShown={this.state.isDrawerShown}
        timeFilterValue={this.state.timeFilterValue}
        onTimeFilterChange={this.onTimeFilterChange}
        onDatePickerChange={this.onDatePickerChange}
        onDrawerClose={this.onDrawerClose}
        isMobile={this.props.isMobile}
      />
      <EventListSider
        timeFilterValue={this.state.timeFilterValue}
        onTimeFilterChange={this.onTimeFilterChange}
        onDatePickerChange={this.onDatePickerChange}
      />
      <Content
        events={this.state.events}
        currentPage={this.state.currentPage}
        totalPages={this.state.totalPages}
        isMobile={this.props.isMobile}
        triggerDrawer={this.triggerDrawer}
        onPaginationChange={this.onPaginationChange}
      />
    </Layout>
  );
}
export default EventList;
