
import { Component } from 'react';
import { Radio, DatePicker } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
class TimeFilter extends Component {
  render = () => (
    <Radio.Group
      value={this.props.timeFilterValue}
      onChange={this.props.onTimeFilterChange}
      buttonStyle="solid"
      size="small"
    >
      <Radio.Button value="today"><FormattedMessage id="events.list.filters.time.today"/></Radio.Button>
      <Radio.Button value="tomorrow"><FormattedMessage id="events.list.filters.time.tomorrow"/></Radio.Button>
      <Radio.Button value="nextweek"><FormattedMessage id="events.list.filters.time.nextweek"/></Radio.Button>
      <Radio.Button value="nextmonth"><FormattedMessage id="events.list.filters.time.nextmonth"/></Radio.Button>
      <DatePicker size="small" onChange={this.props.onDatePickerChange} />v
    </Radio.Group>
  );
}

export default TimeFilter;
