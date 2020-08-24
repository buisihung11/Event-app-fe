
import { Component } from 'react';
import { Select } from 'antd';

import { formatMessage } from 'umi-plugin-react/locale';
const { Option } = Select;
const children = [];
for (let i = 1; i < 10; i++) {
  children.push(<Option key={i.toString(36) + i}>{formatMessage({id:'events.list.filters.category'})+` ${i}`}</Option>);
}
class CategoryFilter extends Component {
  render = () => (

<Select size='large' mode='tags' la defaultValue={formatMessage({id:'events.list.filters.category'})} style={{width:'100%'}}>
          {children}
    </Select>
  );
}

export default CategoryFilter;
