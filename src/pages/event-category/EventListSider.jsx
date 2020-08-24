import { Component } from 'react';
import { Divider, Layout } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { CategoryFilter, LocationFilter, TimeFilter } from './filters';
import { FormattedMessage } from 'umi-plugin-react/locale';
const { Sider } = Layout;
class EventListSider extends Component {
  render = () => (
    <Sider
      className="event-category-sider"
      style={this.props.isMobile?{padding:'0'}:{padding:'10px'}}
      width={250}
      collapsed={this.props.isMobile}
      collapsedWidth={0}
      trigger={null}
    >
      <h1 className="sider-header">
        <FilterOutlined /> <FormattedMessage id="events.list.filters"/>
      </h1>
      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.time"/></h2>
      <TimeFilter
        timeFilterValue={this.props.timeFilterValue}
        onTimeFilterChange={this.props.onTimeFilterChange}
        onDatePickerChange={this.props.onDatePickerChange}
      />
      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.location"/></h2>
      <LocationFilter />
      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.category"/></h2>
      <CategoryFilter />
    </Sider>
  );
}
export default EventListSider;
