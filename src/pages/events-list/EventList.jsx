import { Component } from 'react';
import Content from './Content';
import EventListSider  from './EventListSider';
import { Layout } from 'antd';

const fakeEvents = [];
for (let i = 1; i <= 20; i++) {
  fakeEvents.push({
    name: 'Event name ' + i,
    location: 'Dongo 184 Crono, Canada',
    price: 40,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  });
}

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: fakeEvents,
      timeFilterValue: 'today',
      currentPage: 1,
      totalPages: 30,
    };
  }

  onTimeFilterChange = e => {
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
  componentDidMount() {}
  render = () => (
    <Layout className="event-list-wrapper" style={{ padding: '24px 0' }}>
      <EventListSider
        timeFilterValue={this.state.timeFilterValue}
        onTimeFilterChange={this.onTimeFilterChange}
        onDatePickerChange={this.onDatePickerChange}
      />
      <Content
        currentPage={this.state.currentPage}
        totalPages={this.state.totalPages}
        onPaginationChange={this.onPaginationChange}
      />
    </Layout>
  );
}
export default EventList;
