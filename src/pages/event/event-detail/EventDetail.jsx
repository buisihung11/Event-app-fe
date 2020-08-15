import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  NotificationOutlined,
  ClockCircleTwoTone,
  WifiOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Row, Space, Typography, Carousel, Col, Button, Card, Divider, Affix } from 'antd';
import './index.less';
import useMobile from '../../../hooks/useMobile';

const contentStyle = {
  height: '250px',
  color: '#fff',
  margin: '0 10px',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// TODO: Change carouselSetting when screen size is mobile

const carouselSettings = {
  slidesToShow: 3, // nb of items per slide
  slidesToScroll: 2, // total slide
  className: 'center',
  //   centerMode: true,
  centerPadding: '60px',
};

const EventDetail = (props) => {
  const {
    params: { id },
  } = props.match;

  const isMobile = useMobile();
  const [settings, setSettings] = useState(carouselSettings);

  useEffect(() => {
    setSettings({
      ...carouselSettings,
      slidesToShow: isMobile ? 1 : carouselSettings.slidesToShow,
      slidesToScroll: isMobile ? 1 : carouselSettings.slidesToScroll,
    });
  }, [isMobile]);

  const [{ name, channel, time, description }, setEvent] = useState({
    name: 'Conference on Sustainable Development',
    channel: 'Solution Network',
    time: '12-12-2020 11:00 AM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error si voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  });

  console.log('id', id);
  return (
    <Space style={{ width: '100%' }} direction="vertical" size="large">
      <section className="event-header">
        <Row gutter={[0, 16]} align="middle">
          <Col flex={1}>
            <Space direction="vertical" align="start">
              <Typography.Title level={1}>{name}</Typography.Title>
              <Typography.Text type="secondary">
                By - <Typography.Text strong>{channel}</Typography.Text>
              </Typography.Text>
              <Typography.Text type="secondary">
                <ClockCircleTwoTone /> {moment(time).format('dddd, DD-M-YYYY')}
              </Typography.Text>
            </Space>
          </Col>
          <Col>
            <Button type="primary" icon={<NotificationOutlined />}>
              Subcrice
            </Button>
          </Col>
        </Row>
      </section>
      <section className="event-gallery">
        <Carousel {...settings}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </section>
      <section className="event-content-wrapper">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={16}>
            <Space direction="vertical">
              <section className="event-info">
                <Typography.Title>About this event</Typography.Title>
                <Typography.Paragraph type="secondary">{description}</Typography.Paragraph>
              </section>
              <section className="event-host">
                <Space direction="vertical">
                  <Typography.Title level={4}>Hoster</Typography.Title>
                  <div>
                    <Typography.Text>David Smith</Typography.Text>
                    <Typography.Paragraph type="secondary">
                      Business Speaker, Investor, Author.
                    </Typography.Paragraph>
                  </div>
                  <div>
                    <Typography.Text>Maria Rodriguez</Typography.Text>
                    <Typography.Paragraph type="secondary">
                      Innovation Speaker, Business Professor.
                    </Typography.Paragraph>
                  </div>
                </Space>
                <Divider />
                <Space direction="vertical">
                  <Typography.Title level={4}>Features</Typography.Title>
                  <Typography.Text>
                    <WifiOutlined /> Wifi
                  </Typography.Text>
                  <Typography.Text>
                    <UsergroupAddOutlined /> Meeting Spaces
                  </Typography.Text>
                </Space>
                <Divider />
              </section>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" size="middle">
              {!isMobile && <Card className="event-location event-small-info">Map</Card>}
              <Affix offsetTop={70}>
                <Card className=" event-small-info">
                  <Typography.Title level={4}>Opening Hours</Typography.Title>
                  <Row justify="space-between" align="bottom">
                    <Col>Monday</Col>
                    <Col>
                      <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Tuesday</Col>
                    <Col>
                      <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Wednesday</Col>
                    <Col>
                      <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Thrusday</Col>
                    <Col>
                      <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Friday</Col>
                    <Col>
                      <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Saturday</Col>
                    <Col>
                      <Typography.Text type="warning">Closed</Typography.Text>
                    </Col>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Col>Sunday</Col>
                    <Col>
                      <Typography.Text type="warning">Closed</Typography.Text>
                    </Col>
                  </Row>
                </Card>
              </Affix>
              <Card className="event-small-info">
                <Space direction="vertical">
                  <Typography.Title level={4}>You may also like</Typography.Title>
                  <div className="event-similar">
                    <img
                      src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      alt="Event"
                      className="event-similar-image"
                    />
                    <div className="event-similar-content">
                      <Typography.Title
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%' }}
                        level={3}
                      >
                        The City Theater
                      </Typography.Title>
                      <Typography.Text
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%', zIndex: 2 }}
                      >
                        155 1st Avenue, New York
                      </Typography.Text>
                    </div>
                  </div>
                  <div className="event-similar">
                    <img
                      src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      alt="Event"
                      className="event-similar-image"
                    />
                    <div className="event-similar-content">
                      <Typography.Title
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%' }}
                        level={3}
                      >
                        The City Theater The City Theater The City Theater The City Theater
                      </Typography.Title>
                      <Typography.Text
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%', zIndex: 2 }}
                      >
                        155 1st Avenue, New York
                      </Typography.Text>
                    </div>
                  </div>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </section>
      {/* NAME IMAGE INFO FEATURES */}
    </Space>
  );
};

export default EventDetail;
