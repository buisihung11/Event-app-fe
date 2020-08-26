import { Component } from 'react';
import { Divider, Button, Typography, Row, Col } from 'antd';
import EventItem from '../../components/event-item';
import { FormattedMessage } from 'umi-plugin-react/locale';

const { Text, Title } = Typography;
class EventsSection extends Component {
  render = () => (
    <Col span={24} style={{ padding: '30px 0' }}>
      <Col span={24}>
        <Row style={{ width: '100%', margin: '0', textAlign: 'center' }} justify="center">
          <Col lg={8} md={10} sm={12} xs={20}>
            <Title style={{color:'#F9A619'}}>{this.props.title}</Title>
          </Col>
        </Row>
        <Row
          style={{ width: '100%', margin: '0', padding: '0 0 30px 0', textAlign: 'center' }}
          justify="center"
        >
          <Col span={1}>
            <Divider style={{ margin: '0', backgroundColor: 'black' }} />
          </Col>
          <Col span={1}></Col>
          <Col lg={8} md={10} sm={12} xs={20}>
            <Divider style={{ margin: '0', backgroundColor: 'black' }} />
          </Col>
          <Col span={1}></Col>
          <Col span={1}>
            <Divider style={{ margin: '0', backgroundColor: 'black' }} />
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ paddingBottom: '30px' }}>
        <Row
          justify="center"
          style={{ width: '100%', margin: '0' }}
          gutter={[16, { xs: 8, sm: 8, md: 16 }]}
        >
          {this.props.events.map((e, index) => (
            <Col xs={22} sm={22} md={12} lg={8} xl={6} key={`section-event_${index}`}>
              <EventItem {...e} key={`section-event-item_${index}`} />
            </Col>
          ))}
        </Row>
      </Col>
      <Row span={24} justify="space-between" align="middle">
        <Col flex="auto">
          <Divider style={{ margin: '0' }} />
        </Col>

        <Col flex={this.props.isMobile ? '150px' : '100px'} style={{ textAlign: 'center' }}>
          <Button style={{backgroundColor:"#1890ff"}} shape="round" size="large">
            <Text style={{color:"#fff"}} strong>
              <FormattedMessage id="button.more" />
            </Text>
          </Button>
        </Col>
        <Col flex="auto">
          <Divider style={{ margin: '0' }} />
        </Col>
      </Row>
    </Col>
  );
}
export default EventsSection;
