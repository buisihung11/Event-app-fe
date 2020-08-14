import React from 'react';
import { EnvironmentTwoTone, DollarTwoTone } from '@ant-design/icons';
import './index.less';
import { Typography, Space } from 'antd';

const EventItem = ({ name, location, price, imageURL, description }) => {
  return (
    <div className="event-wrapper">
      <img src={imageURL} alt="Event Thumbnail" className="event-image" />
      <div className="event-content-wrapper">
        <div className="event-content">
          <Space direction="vertical">
            <Typography.Title style={{ color: '#ffffff' }} level={4}>
              {name}
            </Typography.Title>
            <Typography.Text style={{ color: '#ffffff' }}>
              <EnvironmentTwoTone twoToneColor="orange" />
              {location}
            </Typography.Text>
            <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: false, symbol: 'more' }}
              style={{ color: '#ffffff' }}
            >
              {description}
            </Typography.Paragraph>
          </Space>
        </div>
        <div className="event-content-extra">
          <Typography.Text style={{ color: 'rgb(255, 215, 98)' }} strong>
            ${price || 'N/A'}
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
