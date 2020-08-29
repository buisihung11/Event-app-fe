
import { Component } from 'react';
import {  Drawer  } from 'antd';
import {Divider } from 'antd';

import { FormattedMessage,formatMessage } from 'umi-plugin-react/locale';
import {TimeFilter, CategoryFilter,LocationFilter,PriceFilter} from './filters';
class FilterDrawer extends Component {
  render = () => (
    <Drawer
          title={formatMessage({id:'events.list.filters'})}
          
          placement='left'
          closable={true}
          onClose={this.props.onDrawerClose}
          visible={this.props.isDrawerShown && this.props.isMobile}
        >
      
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.time"/></h2>
      <TimeFilter
        timeFilterValue={this.props.timeFilterValue}
        onTimeFilterChange={this.props.onTimeFilterChange}
        onDatePickerChange={this.props.onDatePickerChange}
      />

      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.location"/></h2>
      <LocationFilter/>

      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.category"/></h2>
      <CategoryFilter />

      <Divider />
      <h2 className="sider-filters"><FormattedMessage id="events.list.filters.price"/></h2>
      <PriceFilter />
        </Drawer>
  );
}

export default FilterDrawer;
