import React from 'react';
import moment from 'moment';
import { EnvironmentTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import './index.less';

moment.defaultFormat = 'DD-MM-YYYY';

const EventItem = ({ name, location, price, imageURL, description, time = '12-12-2020' }) => {
  return (
    <div className="event-wrapper">
      <div className="event-image-wrapper">
        <div className="event-image-info">
          <div className="event-price">
            <p>${price || 'N/A'}</p>
          </div>
        </div>
        <img src={imageURL} alt="Event Thumbnail" className="event-image" />
      </div>
      <div className="event-content-wrapper">
        <div className="event-content">
          <h4 className="event-font">{name}</h4>
          <p className="event-font" style={{ marginBottom: '0' }}>
            <EnvironmentTwoTone twoToneColor="orange" /> {location}
          </p>
          <p className="event-font">
            <ClockCircleTwoTone /> {moment(time).format('dddd, DD-M-YYYY')}
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
