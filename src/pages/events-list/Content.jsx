import { Component } from 'react';
import { Row, Col } from 'antd';
import EventItem from '../../components/event-item';
import { Layout, Input, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class Content extends Component {
  render = () => (
    <Layout className="site-layout">
      <Row style={{ width: '100%', margin: '0' }} justify="center">
        <Col span={24} style={{ marginBottom: '10px' }}>
          <Input size="large" placeholder="Search for more events" prefix={<SearchOutlined />} />
        </Col>
        <Col span={24}>
          <Row
            justify="left"
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
