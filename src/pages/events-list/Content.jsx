import { Component } from 'react';
import { Row, Col } from 'antd';
import EventItem from '../../components/event-item';
import { Layout, Input, Pagination,Button } from 'antd';
import { SearchOutlined,FilterOutlined } from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-react/locale';
class Content extends Component {
  render = () => (
    <Layout className="site-layout">
      <Row style={{ width: '100%', margin: '0' }} justify="center">
        <Col xs={4} sm={4} md={2} lg={0} style={{ marginBottom: '10px' }}>
          
      <Button hidden={!this.props.isMobile} style={{width:'100%', height:'100%'}} type="default" onClick={this.props.triggerDrawer}>
            <FilterOutlined />
      </Button>
        </Col>
        <Col xs={20} sm={20} md={22} lg={24} style={{ marginBottom: '10px' }}>
      
          <Input size="large" placeholder={formatMessage({id:'events.list.search'})} prefix={<SearchOutlined />} />
        </Col>
        <Col span={24}>
          <Row
            justify="center"
            style={{ width: '100%', margin: '0' }}
            gutter={[16, { xs: 8, sm: 8, md: 16 }]}
          >
            {this.props.events.map((e, index) => (
              <Col xs={22} sm={22} md={12} lg={8} xl={6} key={`event_${index}`}>
                <EventItem {...e} key={`event_${index}`} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row style={{ width: '100%', margin: '30px 0' }} justify="center">
        <Pagination
        simple
          current={this.props.currentPage}
          pageSize={1}
          total={this.props.totalPages}
          onChange={this.props.onPaginationChange}
        />
      </Row>
    </Layout>
  );
}
export default Content;
