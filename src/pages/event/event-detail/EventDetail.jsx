import React, { useState, useEffect } from 'react';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';
import {
  NotificationOutlined,
  ClockCircleTwoTone,
  WifiOutlined,
  UsergroupAddOutlined,
  CompassTwoTone,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  StarTwoTone,
} from '@ant-design/icons';
import {
  Row,
  Space,
  Typography,
  Carousel,
  Col,
  Button,
  Card,
  Divider,
  Affix,
  Timeline,
  Tag,
} from 'antd';
import './index.less';
import useMobile from '../../../hooks/useMobile';
import CommentSection from './CommentSection';

const contentStyle = {
  height: '250px',
  // color: '#fff',
  // margin: '0 10px',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
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
  const [tabKey, setTabKey] = useState('workingHour');

  useEffect(() => {
    setSettings({
      ...carouselSettings,
      slidesToShow: isMobile ? 1 : carouselSettings.slidesToShow,
      slidesToScroll: isMobile ? 1 : carouselSettings.slidesToScroll,
    });
  }, [isMobile]);

  const [{ name, channel, time, description, location }, setEvent] = useState({
    name: 'Conference on Sustainable Development',
    channel: 'Solution Network',
    time: '12-12-2020 11:00 AM',
    location: 'Toa nha Landmark Quan BT HCM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error si voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  });

  console.log('id', id);

  const tabList = [
    {
      key: 'workingHour',
      tab: 'Working Hours',
    },
    {
      key: 'agenda',
      tab: 'Agenda',
    },
  ];

  const tabContents = {
    workingHour: (
      <section>
        {/* <Typography.Title level={4}>Opening Hours</Typography.Title> */}
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
      </section>
    ),
    agenda: (
      <section>
        <Timeline mode="alternate">
          <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
          <Timeline.Item>Technical testing</Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        </Timeline>
      </section>
    ),
  };

  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '+=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };

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
                <ClockCircleTwoTone /> {moment(time).format('dddd, DD-M-YYYY')}{' '}
                <Tag color="processing">In-coming</Tag>
              </Typography.Text>
              <Typography.Text type="secondary">
                <CompassTwoTone /> {location}
              </Typography.Text>
              <Typography.Text type="secondary">
                <StarTwoTone twoToneColor="yellow" /> 5 bean
              </Typography.Text>
            </Space>
          </Col>
          <Col>
            <Button type="primary" icon={<NotificationOutlined />}>
              Join
            </Button>
          </Col>
        </Row>
      </section>
      <section className="event-gallery">
        <Carousel {...settings}>
          <div>
            <div style={contentStyle}>
              <img
                className="event-gallery-img"
                alt="Event gallery"
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                className="event-gallery-img"
                alt="Event gallery"
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                className="event-gallery-img"
                alt="Event gallery"
                src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                className="event-gallery-img"
                alt="Event gallery"
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section className="event-content-wrapper">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={15}>
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
                {/* <Divider />
                <Card title={<Typography.Title level={3}>Comments</Typography.Title>}>
                  <CommentSection />
                  <Divider orientation="left">
                    <Typography.Title level={4}>Your comment</Typography.Title>
                  </Divider>
                  <CommentSection.Editor />
                </Card> */}
              </section>
            </Space>
          </Col>
          <Col xs={24} md={9}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {/* <QueueAnim key="event-info-1" type={animType.queue} ease={['easeOutCubic', 'easeInCubic']} leaveReverse> */}
              {!isMobile && (
                <Card key="event-location" className="event-location event-small-info">
                  Map
                </Card>
              )}
              <Card
                key="event-overview"
                hoverable
                className="event-small-info"
                tabList={tabList}
                activeTabKey={tabKey}
                onTabChange={setTabKey}
              >
                {tabContents[tabKey]}
              </Card>
              <Card key="event-contact" className="event-small-info" title="Contact">
                <Row justify="space-between" align="bottom">
                  <Col>Address:</Col>
                  <Col>
                    <Typography.Text type="secondary">Quan 9 HCMC</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>Phone:</Col>
                  <Col>
                    <Typography.Text type="secondary">(+84)123456791</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>Mail: </Col>
                  <Col>
                    <Typography.Text type="secondary">company@gmail.com</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>Website: </Col>
                  <Col>
                    <Typography.Text type="secondary">
                      <a href="https://google.com" target="_blank">
                        https://google.com
                      </a>
                    </Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Space
                  direction="horizontal"
                  style={{ width: '100%', justifyContent: 'flex-end' }}
                  align="end"
                >
                  <FacebookOutlined style={{ color: 'blue', fontSize: '1.5rem' }} />
                  <TwitterOutlined style={{ color: 'blueviolet', fontSize: '1.5rem' }} />
                  <InstagramOutlined style={{ color: 'red', fontSize: '1.5rem' }} />
                </Space>
              </Card>
              <Card key="event-similar" className="event-small-info" title="You may also like">
                <Space direction="vertical">
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
              {/* </QueueAnim> */}
            </Space>
          </Col>
        </Row>
      </section>
      {/* NAME IMAGE INFO FEATURES */}
    </Space>
  );
};

export default EventDetail;
