import { Component } from 'react';
import { Layout, Carousel ,Row, Col } from 'antd';
import Image from '../../components/Image/Image';
import EventsSection from './EventsSection';
import { FormattedMessage } from 'umi-plugin-react/locale';
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
        <EventsSection isMobile={this.props.isMobile} title={<FormattedMessage id="events.list.featured-event" />} events={this.props.featuredEvents}/>

        <EventsSection isMobile={this.props.isMobile} title={<FormattedMessage id="events.list.new-event" />} events={this.props.newEvents}/>
        
      </Row>
    </Layout>
  );
}
export default EventFrontpageContent;
