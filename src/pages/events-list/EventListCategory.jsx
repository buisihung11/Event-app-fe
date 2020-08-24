import { Component } from 'react';
import { Divider, Layout , Menu ,Affix} from 'antd';

import { UnorderedListOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi-plugin-react/locale';
const { Sider } = Layout;
const { SubMenu } = Menu;
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
      <Menu className='category' mode="vertical">
        {this.props.category.map(item=>(
          <Menu.Item className='category-item' key={'link'+item.link}>
          <a href={'events?category='+item.link} rel="noopener noreferrer">
            {item.name}
          </a>
        </Menu.Item>
        ))}
        
      </Menu>
      
    </Sider>
  );
}
export default EventListCategory;
