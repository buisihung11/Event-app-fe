import React from 'react';
import { Row, Grid, Col, Button, Typography, Affix, Menu, Tag } from 'antd';
import {
  ClockCircleTwoTone,
  CompassTwoTone,
  HeartOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-locale';

import moment from 'moment';

const { useBreakpoint } = Grid;

const HeaderSection = ({ name, time, location }) => {
  const { md } = useBreakpoint();

  return (
    <section className="event-header-wrapper">
      {!md && (
        <div className="event-header-title">
          <h1>{name}</h1>
        </div>
      )}
      <Row
        className="event-header"
        justify="center"
        gutter={[16, 16]}
        align="middle"
        style={{ margin: '0' }}
      >
        <Col md={{ order: 1, span: 16 }} xs={{ order: 2, span: 24 }} flex={1}>
          {md && (
            <div className="event-header-title">
              <h1>{name}</h1>
            </div>
          )}
          <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
            <Col span={1}>
              <ClockCircleTwoTone />
            </Col>
            <Col span={22}>
              <p className="event-info">
                {moment(time).format('dddd, DD-M-YYYY')} <Tag color="processing">In-coming</Tag>
              </p>
            </Col>
          </Row>
          <Row gutter={16} className="event-info-wrapper" style={{ width: '100%' }}>
            <Col span={1}>
              <CompassTwoTone />
            </Col>
            <Col span={22}>
              <p className="event-info">{location}</p>
            </Col>
          </Row>
        </Col>
        <Col md={{ order: 2, span: 8 }} xs={{ order: 1, span: 24 }}>
          <div className="event-header-right" style={{}}>
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
            <Button size="large" style={{ width: '50%' }} icon={<FacebookOutlined />}>
              {formatMessage({ id: 'event-detail.join-btn' })}
            </Button>
            <Button size="large" style={{ width: '50%' }} icon={<HeartOutlined />}>
              <Typography.Text style={{ color: 'pink' }}>
                {formatMessage({ id: 'event-detail.follow' })}
              </Typography.Text>
            </Button>
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <Typography.Text type="secondary">1 người quan tâm</Typography.Text>
            </div>
          </div>
        </Col>
      </Row>
      {md && (
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
  );
};

export default HeaderSection;
