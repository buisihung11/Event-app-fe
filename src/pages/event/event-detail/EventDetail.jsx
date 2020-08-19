import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import moment from 'moment';
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
  HeartOutlined,
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
  Timeline,
  Tag,
  Avatar,
  Menu,
  Affix,
  Grid,
} from 'antd';
import './index.less';
import useMobile from '../../../hooks/useMobile';
import { formatMessage } from 'umi-plugin-locale';
// import CommentSection from './CommentSection';

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

const { useBreakpoint } = Grid;

const EventDetail = (props) => {
  const {
    params: { id },
  } = props.match;
  const { lg } = useBreakpoint();

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

  const [{ name, channel, time, description, location, banner }, setEvent] = useState({
    banner:
      'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/109228393_1721419681330083_8289757739294266576_n.png?_nc_cat=108&_nc_sid=730e14&_nc_ohc=kJ1wlKlftDgAX_eQQwE&_nc_ht=scontent.fsgn5-5.fna&oh=893db861ef7bab72a3f6708806554426&oe=5F604201',
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
      tab: formatMessage({ id: 'event-detail.working-hour' }),
    },
    {
      key: 'agenda',
      tab: formatMessage({ id: 'event-detail.agenda' }),
    },
  ];

  const tabContents = {
    workingHour: (
      <section>
        {/* <Typography.Title level={4}>Opening Hours</Typography.Title> */}
        <Row justify="space-between" align="bottom">
          <Col>{formatMessage({ id: 'global.timetable.monday' })}</Col>
          <Col>
            <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.tueday' })}</Col>
          <Col>
            <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.wednesday' })}</Col>
          <Col>
            <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.thrusday' })}</Col>
          <Col>
            <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.friday' })}</Col>
          <Col>
            <Typography.Text type="secondary">08.00am - 05.00pm</Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.saturday' })}</Col>
          <Col>
            <Typography.Text type="warning">
              {formatMessage({ id: 'global.closed' })}
            </Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>{formatMessage({ id: 'global.timetable.sunday' })}</Col>
          <Col>
            <Typography.Text type="warning">
              {formatMessage({ id: 'global.closed' })}
            </Typography.Text>
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
    <div
      className="event-detail"
      style={{ width: '100%', backgroundColor: '#f1f1f1' }}
      direction="vertical"
      size="large"
    >
      <section>
        <img src={banner} alt="Event Banner" className="event-image-banner" />
      </section>
      <section className="event-header-wrapper">
        <Row
          className="event-header"
          justify="center"
          gutter={[16, 16]}
          align="middle"
          style={{ margin: '0' }}
        >
          <Col flex={1}>
            <div className="event-header-title">
              <h1>{name}</h1>
            </div>
            {/* <Typography.Title level={4} type="secondary">
                {formatMessage({ id: 'event-detail.by' })} -{' '}
                <Typography.Title level={4} strong>
                  {channel}
                </Typography.Title>
              </Typography.Title> */}
            <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
              <Col span={2}>
                <ClockCircleTwoTone />
              </Col>
              <Col span={22}>
                <p className="event-info">
                  {moment(time).format('dddd, DD-M-YYYY')} <Tag color="processing">In-coming</Tag>
                </p>
              </Col>
            </Row>
            <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
              <Col span={2}>
                <CompassTwoTone />
              </Col>
              <Col span={22}>
                <p className="event-info">{location}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <div style={{ marginBottom: '15px' }}>
              <Button
                type="primary"
                danger
                style={{ width: '100%' }}
                size="large"
                // icon={<NotificationOutlined />}
              >
                {formatMessage({ id: 'event-detail.buy-ticket' })}
              </Button>
            </div>
            <Button size="large" icon={<NotificationOutlined />}>
              {formatMessage({ id: 'event-detail.join-btn' })}
            </Button>
            <Button size="large" icon={<HeartOutlined />}>
              <Typography.Text style={{ color: 'pink' }}>
                {formatMessage({ id: 'event-detail.follow' })}
              </Typography.Text>
            </Button>
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <Typography.Text type="secondary">1 người quan tâm</Typography.Text>
            </div>
          </Col>
        </Row>
        {!isMobile && (
          <Affix offsetTop={65} style={{ zIndex: '90' }}>
            <Menu
              mode="horizontal"
              style={{ textAlign: 'left', padding: '0rem 3rem', borderTop: '1px solid #e4e5e6' }}
            >
              <Menu.Item key="mail">
                <a href="#about">{formatMessage({ id: 'event-detail.about-title' })}</a>
              </Menu.Item>
              <Menu.Item key="app">
                <a href="#agenda">{formatMessage({ id: 'event-detail.agenda' })}</a>
              </Menu.Item>
              <Menu.Item key="alipay">
                <a href="#organizer">{formatMessage({ id: 'event-detail.organizer' })}</a>
              </Menu.Item>
            </Menu>
          </Affix>
        )}
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
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} lg={14} className="event-content-section">
            <Card
              id="about"
              title={
                <Typography.Title level={3}>
                  {formatMessage({ id: 'event-detail.about-title' })}
                </Typography.Title>
              }
            >
              <Space direction="vertical">
                <section className="event-info">
                  <Typography.Paragraph type="secondary">{description}</Typography.Paragraph>
                </section>
                <Typography.Title level={4}>
                  {formatMessage({ id: 'event-detail.hoster-title' })}
                </Typography.Title>
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
                <Space direction="vertical">
                  <Typography.Title level={4}>
                    {formatMessage({ id: 'event-detail.feature-title' })}
                  </Typography.Title>
                  <Typography.Text>
                    <WifiOutlined /> Wifi
                  </Typography.Text>
                  <Typography.Text>
                    <UsergroupAddOutlined /> Meeting Spaces
                  </Typography.Text>
                </Space>
              </Space>
            </Card>
            <Card
              id="agenda"
              key="event-overview"
              tabList={tabList}
              activeTabKey={tabKey}
              onTabChange={setTabKey}
            >
              {tabContents[tabKey]}
            </Card>
            <Card
              id="organizer"
              style={{ width: '100%' }}
              title={
                <Typography.Title>
                  {formatMessage({ id: 'event-detail.organizer' })}
                </Typography.Title>
              }
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="ABC Company"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} lg={9}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {/* <QueueAnim key="event-info-1" type={animType.queue} ease={['easeOutCubic', 'easeInCubic']} leaveReverse> */}
              {/* {!isMobile && (
                <Card key="event-location" className="event-location event-small-info">
                  Map
                </Card>
              )} */}
              {lg && (
                <Affix offsetTop={128} className="event-small-info">
                  <Card>
                    <div className="event-header-title">
                      <h1 style={{ fontSize: '18px' }}>{name}</h1>
                    </div>
                    <Divider />
                    <Row justify="center" gutter={[16, 16]} align="middle" style={{ margin: '0' }}>
                      <Col span={24}>
                        <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
                          <Col span={2}>
                            <ClockCircleTwoTone />
                          </Col>
                          <Col span={22}>
                            <p className="event-info">
                              {moment(time).format('dddd, DD-M-YYYY')}{' '}
                              <Tag color="processing">In-coming</Tag>
                            </p>
                          </Col>
                        </Row>
                        <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
                          <Col span={2}>
                            <CompassTwoTone />
                          </Col>
                          <Col span={22}>
                            <p className="event-info">{location}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <div style={{ marginBottom: '15px' }}>
                          <Button
                            type="primary"
                            danger
                            style={{ width: '100%' }}

                            // icon={<NotificationOutlined />}
                          >
                            {formatMessage({ id: 'event-detail.buy-ticket' })}
                          </Button>
                        </div>
                        <Button style={{ width: '50%' }} icon={<NotificationOutlined />}>
                          {formatMessage({ id: 'event-detail.join-btn' })}
                        </Button>
                        <Button style={{ width: '50%' }} icon={<HeartOutlined />}>
                          {formatMessage({ id: 'event-detail.follow' })}
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Affix>
              )}
              <Card
                key="event-contact"
                className="event-small-info"
                title={formatMessage({ id: 'event-detail.contact' })}
              >
                <Row justify="space-between" align="bottom">
                  <Col>{formatMessage({ id: 'event-detail.contact.address' })}:</Col>
                  <Col>
                    <Typography.Text type="secondary">Quan 9 HCMC</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>{formatMessage({ id: 'event-detail.contact.phone' })}:</Col>
                  <Col>
                    <Typography.Text type="secondary">(+84)123456791</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>{formatMessage({ id: 'event-detail.contact.mail' })}: </Col>
                  <Col>
                    <Typography.Text type="secondary">company@gmail.com</Typography.Text>
                  </Col>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Col>{formatMessage({ id: 'event-detail.contact.website' })}: </Col>
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
              <Card
                key="event-similar"
                className="event-small-info"
                title={formatMessage({ id: 'event-detail.similar' })}
              >
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
    </div>
  );
};

export default EventDetail;
