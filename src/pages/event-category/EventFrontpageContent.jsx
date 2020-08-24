import { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import EventItem from '../../components/event-item';
import { Layout,  Button, Carousel, Typography } from 'antd';
import Image from '../../components/Image/Image';
import {  FormattedMessage } from 'umi-plugin-react/locale';
const { Title  } = Typography;
class EventFrontpageContent extends Component {
  render = () => (
    <Layout className="site-layout">
      <Row style={{ width: '100%', margin: '0' }} justify="center">
        <Col span={24}>
          <Carousel
             style={{ marginBottom: '20px' }}
            span={24}
            afterChange={this.props.onCarouselChange}
            autoplay
          >
            {this.props.carouselContent.map((item) => (
              <div class="carousel-item">
                <Image src={item} className="event-promo-img" alt="Events gallery" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Row style={{ width: '100%', margin: '0',textAlign:'center' }} justify="center">
            <Col span={8}>
              <Title>
                <FormattedMessage id="events.list.featured-event" />
              </Title>
            </Col>
          </Row>
          <Row style={{ width: '100%', margin: '0', padding:'0',textAlign:'center' }} justify="center">
            <Col span={1}>
              <Divider  style={{margin:'0',backgroundColor:'black'}}/>
            </Col><Col span={1}>
            </Col>
            <Col span={8}>
              
            <Divider style={{margin:'0',backgroundColor:'black'}}/>
            </Col><Col span={1}>
            </Col>
            <Col span={1}>
              <Divider style={{margin:'0',backgroundColor:'black'}}/>
            </Col>
          </Row>
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
        <Col span={24} style={{textAlign:'center'}}>
          <Button type="primary" shape="round" size='large' >
            <h3>

            <FormattedMessage id="button.more" />
            </h3>
          </Button>

        </Col>

        <Col span={24} style={{ margin: '30px 0' }}>
          <Row style={{ width: '100%', margin: '0',textAlign:'center' }} justify="center">
            <Col span={8}>
              <Title>
                <FormattedMessage id="events.list.new-event" />
              </Title>
            </Col>
          </Row>
          <Row style={{ width: '100%', margin: '0', padding:'0',textAlign:'center' }} justify="center">
            <Col span={1}>
              <Divider  style={{margin:'0',backgroundColor:'black'}}/>
            </Col><Col span={1}>
            </Col>
            <Col span={8}>
              
            <Divider style={{margin:'0',backgroundColor:'black'}}/>
            </Col><Col span={1}>
            </Col>
            <Col span={1}>
              <Divider style={{margin:'0',backgroundColor:'black'}}/>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginTop: '20px' }}>
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
        <Col span={24} style={{textAlign:'center'}}>
          <Button type="primary" shape="round" size='large' >
            <h3>

            <FormattedMessage id="button.more" />
            </h3>
          </Button>

        </Col>
      </Row>
    </Layout>
  );
}
export default EventFrontpageContent;
