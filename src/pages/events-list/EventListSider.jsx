import { Component } from 'react';
import { Radio, DatePicker, Divider, Layout } from 'antd';
const { Sider } = Layout;
class EventListSider extends Component {
  render = () => (
    <Sider
      className="event-list-sider"
      width={300}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
    >
      <Divider />
      <Radio.Group
        value={this.props.timeFilterValue}
        onChange={this.props.onTimeFilterChange}
        buttonStyle="solid"
        size="small"
      >
        <Radio.Button value="today">Today</Radio.Button>
        <Radio.Button value="tomorrow">Tomorrow</Radio.Button>
        <Radio.Button value="nextweek">Next week</Radio.Button>
        <Radio.Button value="nextmonth">Next month</Radio.Button>
        <DatePicker size="small" onChange={this.props.onDatePickerChange} />v
      </Radio.Group>
      <Divider />
      More filters go here
    </Sider>
  );
}
export default EventListSider;
