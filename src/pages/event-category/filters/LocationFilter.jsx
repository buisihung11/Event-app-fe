
import { Component } from 'react';
import { Input } from 'antd';
import { BuildOutlined } from '@ant-design/icons';

import { formatMessage } from 'umi-plugin-react/locale';
class LocationFilter extends Component {
  render = () => (
    <Input size="large" placeholder={formatMessage({id:'events.list.filters.location.city'})} title="City"  prefix={<BuildOutlined />}  />
  );
}

export default LocationFilter;
