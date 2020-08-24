import { Component } from 'react';
import { Divider, Layout , List , Typography } from 'antd';

import { UnorderedListOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi-plugin-react/locale';
const { Sider } = Layout;
const { Link }=Typography;
class EventListCategory extends Component {
  render = () => (
    <Sider
      className="event-category-sider"
      width={300}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
    >
      <h1 className="sider-header">
        <UnorderedListOutlined /> <FormattedMessage id="events.list.category"/>
      </h1>
      
      <Divider style={{ backgroundColor: 'red' }} />
      <List
      size="large"
      dataSource={this.props.category}
      renderItem={item => 
        <List.Item>
          <Link href={item.link} color='#00000' style={{color:"#000000"}}>{item.name}</Link>
        </List.Item>
        }
    />
    </Sider>
  );
}
export default EventListCategory;
