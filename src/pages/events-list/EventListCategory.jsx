import { Component } from 'react';
import { Divider, Layout , Anchor } from 'antd';

import { UnorderedListOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi-plugin-react/locale';
const { Sider } = Layout;
const { Link }=Anchor;
class EventListCategory extends Component {
  render = () => (
    <Sider
      className="event-list-sider"
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
    >
      <h1 className="sider-header" style={{padding:'0'}}>
        <UnorderedListOutlined /> <FormattedMessage id="events.list.category"/>
      </h1>
      
      <Divider />
      <Anchor affix={false} className='category'>
      {this.props.category.map(item => 
        (<Link key={`category-${item.link}`} className='category-item'  title={item.name} href={`/events?category=${item.link}`}/>)
        )}
      </Anchor>
    </Sider>
  );
}
export default EventListCategory;
