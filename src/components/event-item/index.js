import React from 'react';
import moment from 'moment';
import { Link } from 'umi';
import { EnvironmentTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import './index.less';
import { Badge, Typography } from 'antd';

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
    <Link to={`events/${id}`}>
      <div className="event-wrapper">
        <div className="event-image-wrapper">
          <Badge.Ribbon text={`$${price}` || 'N/A'} color="yellow">
            <img src={imageURL} alt="Event Thumbnail" className="event-image" />
          </Badge.Ribbon>
        </div>
        <div className="event-content-thumbnail-wrapper">
          <div className="event-content-thumbnail">
            <Typography.Title
              level={4}
              ellipsis={{ rows: 2, expandable: false }}
              className="event-font"
            >
              {name}
            </Typography.Title>
            <p className="event-font" style={{ marginBottom: '0' }}>
              <EnvironmentTwoTone twoToneColor="orange" /> {location}
            </p>
            <p className="event-font">
              <ClockCircleTwoTone /> {moment(time).format('dddd, DD-M-YYYY')}
            </p>
          </div>
          {/* <div className="event-content-extra">
          <Typography.Text style={{ color: 'rgb(255, 215, 98)' }} strong>
            ${price || 'N/A'}
          </Typography.Text>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
