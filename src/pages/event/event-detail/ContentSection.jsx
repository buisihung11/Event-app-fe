import React, { useState } from 'react';
import { formatMessage } from 'umi-plugin-locale';
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
  HeartOutlined,
} from '@ant-design/icons';
import {
  Row,
  Space,
  Typography,
  Col,
  Button,
  Card,
  Divider,
  Tag,
  Avatar,
  Affix,
  Collapse,
  Timeline,
  Grid,
} from 'antd';
import useMobile from '../../../hooks/useMobile';

const { useBreakpoint } = Grid;

const ContentSection = ({ description, name, time, location }) => {
  const [tabKey, setTabKey] = useState('workingHour');
  const isMobile = useMobile();
  const { lg, md } = useBreakpoint();

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

  return (
    <section className="event-content-wrapper">
      <Row gutter={[16, 16]} justify="space-between">
        <Col xs={24} lg={14} className="event-content-section">
          <Collapse expandIconPosition="right" defaultActiveKey="about">
            <Collapse.Panel
              key="about"
              id="about"
              header={
                <Typography.Title style={{ textTransform: 'uppercase' }} level={3}>
                  {formatMessage({ id: 'event-detail.about-title' })}
                </Typography.Title>
              }
            >
              <Space direction="vertical">
                <section className="event-info">
                  <Typography.Paragraph type="secondary" ellipsis={{ rows: 4, expandable: true }}>
                    {description}
                  </Typography.Paragraph>
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
            </Collapse.Panel>
          </Collapse>

          <Card
            id="agenda"
            key="event-overview"
            tabList={tabList}
            activeTabKey={tabKey}
            onTabChange={setTabKey}
          >
            {tabContents[tabKey]}
          </Card>

          <Collapse expandIconPosition="right" defaultActiveKey="organizer">
            <Collapse.Panel
              id="organizer"
              key="organizer"
              style={{ width: '100%' }}
              header={
                <Typography.Title style={{ textTransform: 'uppercase' }} level={3}>
                  {formatMessage({ id: 'event-detail.organizer' })}
                </Typography.Title>
              }
            >
              <Card.Meta
                avatar={
                  <Avatar
                    size={!isMobile && 120}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                }
                title="ABC Company"
                description={
                  <Row>
                    <Col span={24}>
                      <Typography.Paragraph ellipsis={{ rows: 4, expandable: true }}>
                        The LIN Center for Community Development (LIN) is a Vietnamese,
                        non-governmental and not-for-profit organization under the Vietnam Union of
                        Science and Technology Associations (Registration Number A-840, 29 June
                        2009, by the Ministry of Science & Technology). Our mission is to help local
                        NPOs, skilled volunteers, and donors to fulfill their potential as vehicles
                        for sustainable development, poverty alleviation, and citizen participation
                        in Vietnam. LIN works with individuals and organizations across all sectors,
                        including: • Vietnamese not-for-profit organizations (NPOs) who are looking
                        for financial, technical and human resources to improve their work; •
                        Individual and corporations looking to engage in philanthropy; • Individual
                        and Corporations looking to strengthen community engagement programs in
                        Vietnam; • International non-governmental organizations who are looking for
                        local partners in the South of Vietnam, and; • Researchers and individuals
                        studying community development and the role of not-for-profit organizations
                        in Vietnam
                      </Typography.Paragraph>
                    </Col>
                    <Col span={24}>
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
                    </Col>
                  </Row>
                }
              />
            </Collapse.Panel>
          </Collapse>
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
              <Affix offsetTop={120} className="event-small-info">
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
                        <Button type="primary" danger style={{ width: '100%' }}>
                          {formatMessage({ id: 'event-detail.buy-ticket' })}
                        </Button>
                      </div>
                      <Button style={{ width: '50%' }} icon={<FacebookOutlined />}>
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
  );
};

export default ContentSection;
