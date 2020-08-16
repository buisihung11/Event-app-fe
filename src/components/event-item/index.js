import React from 'react';
import moment from 'moment';
import { Link, router } from 'umi';
import { EnvironmentTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import './index.less';
import { Badge, Card, Space } from 'antd';

moment.defaultFormat = 'DD-MM-YYYY';

const EventItem = ({
  id = 1,
  name,
  location,
  price,
  imageURL,
  description,
  time = '12-12-2020',
}) => {
  return (
    <Card
      className="event-wrapper"
      hoverable
      cover={
        <Badge.Ribbon text={`$${price}` || 'N/A'} color="yellow">
          <img src={imageURL} alt="Event Thumbnail" className="event-image" />
        </Badge.Ribbon>
      }
      onClick={() => router.push(`/events/${id}`)}
    >
      <Card.Meta
        title={<h4 className="event-font">{name}</h4>}
        description={
          <Space direction="vertical" className="event-content">
            <p className="event-font" style={{ marginBottom: '0' }}>
              <EnvironmentTwoTone twoToneColor="orange" /> {location}
            </p>
            <p className="event-font">
              <ClockCircleTwoTone /> {moment(time).format('dddd, DD-M-YYYY')}
            </p>
          </Space>
        }
      />
    </Card>
  );
};

export default EventItem;
