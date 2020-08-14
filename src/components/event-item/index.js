import React from 'react';
import { EnvironmentTwoTone, DollarTwoTone } from '@ant-design/icons';
import './index.less';
import { Typography, Space } from 'antd';

const EventItem = ({ name, location, price, imageURL, description }) => {
  return (
    <div className="event-wrapper">
      <div className="event-image-wrapper">
        <div className="event-image-info">
          <div>
            <p style={{ color: 'rgb(255, 215, 98)' }}>${price || 'N/A'}</p>
          </div>
        </div>
        <img src={imageURL} alt="Event Thumbnail" className="event-image" />
      </div>
      <div className="event-content-wrapper">
        <div className="event-content">
          <h4 className="event-font">{name}</h4>
          <p className="event-font">
            <EnvironmentTwoTone twoToneColor="orange" />
            {location}
          </p>
          {/* <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: false, symbol: 'more' }}
              className="event-font"
            >
              {description}
            </Typography.Paragraph> */}
        </div>
        {/* <div className="event-content-extra">
          <Typography.Text style={{ color: 'rgb(255, 215, 98)' }} strong>
            ${price || 'N/A'}
          </Typography.Text>
        </div> */}
      </div>
    </div>
  );
};

export default EventItem;
