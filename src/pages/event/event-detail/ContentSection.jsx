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
import { formatDate } from '../../../utils';
import Image from '../../../components/Image/Image';
import { BuyBtn } from './EventDetail';

const { useBreakpoint } = Grid;
const { Title, Text, Paragraph } = Typography;

const ContentSection = ({ event }) => {
  const { description, name, time, location, tickets, address, organizer, similarEvents } =
    event || {};
  const [tabKey, setTabKey] = useState('workingHour');
  const { lg, md, sm } = useBreakpoint();

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

  const buyBtn = <BuyBtn />;

  // TODO: GET FROM API
  const tabContents = {
    workingHour: (
      <section>
        {/* <Title level={4}>Opening Hours</Title> */}
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.monday' })}</Title>

            <Paragraph type="secondary">08.00am - 05.00pm</Paragraph>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            {buyBtn}
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.tueday' })}</Title>

            <Paragraph type="secondary">08.00am - 05.00pm</Paragraph>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            {buyBtn}
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.wednesday' })}</Title>

            <Paragraph type="secondary">08.00am - 05.00pm</Paragraph>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            {buyBtn}
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.thrusday' })}</Title>

            <Paragraph type="secondary">08.00am - 05.00pm</Paragraph>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            {buyBtn}
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.friday' })}</Title>

            <Paragraph type="secondary">08.00am - 05.00pm</Paragraph>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            {buyBtn}
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.saturday' })}</Title>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <Paragraph type="warning">{formatMessage({ id: 'global.closed' })}</Paragraph>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col xs={24} flex={1}>
            <Title level={4}>{formatMessage({ id: 'global.timetable.sunday' })}</Title>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <Paragraph type="warning">{formatMessage({ id: 'global.closed' })}</Paragraph>
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
      <Row gutter={[16, 16]} justify="space-between" style={{ width: '100%', margin: 0 }}>
        <Col xs={24} lg={14} className="event-content-section">
          <Collapse expandIconPosition="right" defaultActiveKey="about">
            <Collapse.Panel
              key="about"
              id="about"
              header={
                <Title style={{ textTransform: 'uppercase' }} level={3}>
                  {formatMessage({ id: 'event-detail.about-title' })}
                </Title>
              }
            >
              <Space direction="vertical">
                <section className="event-info">
                  <Paragraph type="secondary" ellipsis={{ rows: 4, expandable: true }}>
                    {description}
                  </Paragraph>
                </section>
                <Title level={4}>{formatMessage({ id: 'event-detail.hoster-title' })}</Title>
                <div>
                  <Text>David Smith</Text>
                  <Paragraph type="secondary">Business Speaker, Investor, Author.</Paragraph>
                </div>
                <div>
                  <Text>Maria Rodriguez</Text>
                  <Paragraph type="secondary">Innovation Speaker, Business Professor.</Paragraph>
                </div>
                <Space direction="vertical">
                  <Title level={4}>{formatMessage({ id: 'event-detail.feature-title' })}</Title>
                  <Text>
                    <WifiOutlined /> Wifi
                  </Text>
                  <Text>
                    <UsergroupAddOutlined /> Meeting Spaces
                  </Text>
                </Space>
              </Space>
            </Collapse.Panel>
          </Collapse>

          <Collapse expandIconPosition="right" defaultActiveKey="ticket-info">
            <Collapse.Panel
              id="ticket-info"
              key="ticket-info"
              header={
                <Title style={{ textTransform: 'uppercase' }} level={3}>
                  {formatMessage({ id: 'event-detail.ticket-info' })}
                </Title>
              }
            >
              <Collapse accordion>
                {tickets.map(({ name, price, description, isAvailable }) => {
                  const extra = (
                    <Space
                      style={{ textAlign: 'right' }}
                      direction="vertical"
                      align="bottom"
                      justify="end"
                      size="small"
                    >
                      <Text style={{ textAlign: 'right' }}>{price} VND</Text>
                      <Text>
                        {!isAvailable && (
                          <Tag style={{ margin: 0 }} color="red">
                            Hết vé
                          </Tag>
                        )}
                      </Text>
                    </Space>
                  );
                  // if (!description) return <Title level={4}>{name}</Title>;
                  return (
                    <Collapse.Panel
                      key={name}
                      header={
                        <div className="event-ticket-title">
                          <Title level={4} style={{ display: 'inline-block' }}>
                            {name}
                          </Title>
                        </div>
                      }
                      extra={extra}
                      showArrow={false}
                      // disabled={!description}
                    >
                      <Paragraph>{description}</Paragraph>
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
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
                <Title style={{ textTransform: 'uppercase' }} level={3}>
                  {formatMessage({ id: 'event-detail.organizer' })}
                </Title>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={7}>
                  <Image
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={{
                      width: '100%',
                      maxWidth: '350px',
                      margin: '0 auto',
                      display: 'block',
                    }}
                  />
                </Col>
                <Col xs={24} md={17}>
                  <Title level={4}>ABC Company</Title>
                  <Paragraph ellipsis={{ rows: 4, expandable: true }}>
                    Glints là nền tảng tuyển dụng đến từ Singapore với sứ mạng rút ngắn khoảng cách
                    giữa đào tạo và nhu cầu doanh nghiệp bằng nền tảng tuyển dụng cho nhân sự trẻ.
                    Chúng tôi hỗ trợ các tài năng trẻ khám phá đam mê nghề nghiệp và phát triển kỹ
                    năng chuyên môn, đồng thời trao quyền cho doanh nghiệp trong việc thu hút nhân
                    tài phù hợp với chiến lược nhân sự công ty. Website: https://glints.vn Về Glints
                    ExpertClass Glints ExpertClass là chuỗi khoá học nhằm kết nối bạn học với các
                    chuyên gia trong các lĩnh vực Marketing, Sales, Human Resources, Accounting,
                    Data Science, Technology... đến từ Đông Nam Á. Tiếp nối thành công trên thị
                    trường Indonesia với hơn 3000 học viên, 70 diễn giả khách mời và 200 khoá học,
                    Glints ExpertClass nay đã có mặt tại Việt Nam. Với các buổi chia sẻ chuyên sâu,
                    workshop và các phiên hỏi-đáp trực tiếp, chuỗi sự kiện Glints ExpertClass hứa
                    hẹn sẽ mang lại cho bạn kiến thức thực tiễn và đưa chuyên môn nghiệp vụ của bạn
                    lên một tầm cao mới. Cùng rút ngắn khoảng cách với các chuyên gia, những nhà
                    lãnh đạo từ các công ty hàng đầu Đông Nam Á bằng các buổi sự kiện "all-in-one"
                    của Glints ExpertClass ngay hôm nay!
                  </Paragraph>
                  <Card
                    key="event-contact"
                    className="event-small-info"
                    title={formatMessage({ id: 'event-detail.contact' })}
                  >
                    <Row justify="space-between" align="bottom">
                      <Col>{formatMessage({ id: 'event-detail.contact.address' })}:</Col>
                      <Col>
                        <Text type="secondary">Quan 9 HCMC</Text>
                      </Col>
                    </Row>
                    <Divider />
                    <Row justify="space-between">
                      <Col>{formatMessage({ id: 'event-detail.contact.phone' })}:</Col>
                      <Col>
                        <Text type="secondary">(+84)123456791</Text>
                      </Col>
                    </Row>
                    <Divider />
                    <Row justify="space-between">
                      <Col>{formatMessage({ id: 'event-detail.contact.mail' })}: </Col>
                      <Col>
                        <Text type="secondary">company@gmail.com</Text>
                      </Col>
                    </Row>
                    <Divider />
                    <Row justify="space-between">
                      <Col>{formatMessage({ id: 'event-detail.contact.website' })}: </Col>
                      <Col>
                        <Text type="secondary">
                          <a href="https://google.com" target="_blank">
                            https://google.com
                          </a>
                        </Text>
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
            </Collapse.Panel>
          </Collapse>
        </Col>
        <Col xs={24} lg={9}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            {lg && (
              <Affix offsetTop={120} className="event-small-info">
                <Card>
                  <div className="event-header-title">
                    <h1 style={{ fontSize: '18px', margin: 0 }}>{name}</h1>
                  </div>
                  <Divider />
                  <Row justify="center" gutter={[16, 16]} align="middle" style={{ margin: '0' }}>
                    <Col span={24}>
                      <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
                        <Col span={2}>
                          <ClockCircleTwoTone />
                        </Col>
                        <Col span={22}>
                          <p className="event-info">{formatDate(time)}</p>
                        </Col>
                      </Row>
                      <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
                        <Col span={2}>
                          <CompassTwoTone />
                        </Col>
                        <Col span={22}>
                          <p className="event-info">{location}</p>
                          <Paragraph type="secondary" className="event-info">
                            {address}
                          </Paragraph>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <div style={{ marginBottom: '15px' }}>
                        <BuyBtn type="primary" danger style={{ width: '100%' }}>
                          {formatMessage({ id: 'event-detail.buy-ticket' })}
                        </BuyBtn>
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
              className={lg && 'event-small-info'}
              title={<Title level={4}>{formatMessage({ id: 'event-detail.similar' })}</Title>}
            >
              <Row gutter={[8, 8]}>
                <Col xs={24} md={12} lg={24}>
                  <div className="event-similar">
                    <img
                      src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      alt="Event"
                      className="event-similar-image"
                    />
                    <div className="event-similar-content">
                      <Title
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%' }}
                        level={3}
                      >
                        The City Theater
                      </Title>
                      <Text
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%', zIndex: 2 }}
                      >
                        155 1st Avenue, New York
                      </Text>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12} lg={24}>
                  <div className="event-similar">
                    <img
                      src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      alt="Event"
                      className="event-similar-image"
                    />
                    <div className="event-similar-content">
                      <Title
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%' }}
                        level={3}
                      >
                        The City Theater
                      </Title>
                      <Text
                        ellipsis={{ rows: 2 }}
                        style={{ color: '#fff', height: '50%', zIndex: 2 }}
                      >
                        155 1st Avenue, New York
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            {/* </QueueAnim> */}
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default ContentSection;
