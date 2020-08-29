
import { Component } from 'react';
import { Select } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
const { Option } = Select;
const options = [
    {
        key:"all",
        name:formatMessage({id:'events.list.filters.price.all'})
    },
    {
        key:"free",
        name:formatMessage({id:'events.list.filters.price.free'})
    },
    {
        key:"paid",
        name:formatMessage({id:'events.list.filters.price.paid'})
    }
];
const children = options.map(item=>(
    <Option key={item.key} >{item.name}</Option>
))
class PriceFilter extends Component {
  render = () => (
    <Select size="large" defaultValue={options[0].key} style={{ width: '100%' }}>
          {children}
    </Select>
  );
}

export default PriceFilter;
