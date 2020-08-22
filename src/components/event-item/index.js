import React from 'react';
import { Link } from 'umi';
import { EnvironmentTwoTone, ClockCircleTwoTone, TagOutlined } from '@ant-design/icons';
import './index.less';
import { Badge, Typography, Card, Space, Tag, Divider } from 'antd';
import Image from '../Image/Image';
import { formatDate } from '../../utils';

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
            <Image src={imageURL} alt="Event Thumbnail" className="event-image" />
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
            <p className="event-font">
              <ClockCircleTwoTone /> {formatDate(time)}
            </p>
            <p className="event-font" style={{ marginBottom: '0' }}>
              <EnvironmentTwoTone twoToneColor="orange" /> {location}
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
const EventItemDetail = ({
  id = 1,
  name,
  location,
  price = 0,
  imageURL,
  description,
  time = '12-12-2020',
  categories = ['Khác'],
  city = 'ho chi minh',
  ...otherProps
}) => {
  return (
    <Link to={`events/${id}`}>
      <Card
        className="event-wrapper"
        // hoverable
        style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,.3)' }}
        cover={
          <Badge.Ribbon
            text={
              <Typography.Text style={{ color: '#fff' }}>
                {price !== 0 && 'Từ '}
                <Typography.Text style={{ color: '#fff' }} strong>
                  {price === 0 ? 'Miễn Phí' : `${price} VND`}
                </Typography.Text>
              </Typography.Text>
            }
            color={price !== 0 ? '#E9C40C' : '#41B5A4'}
          >
            <img src={imageURL} alt="Event Thumbnail" className="event-image" />
          </Badge.Ribbon>
        }
        {...otherProps}
        // onClick={() => router.push(`/events/${id}`)}
      >
        <div>
          <Typography.Title
            level={4}
            style={{ margin: '0', fontSize: '16px', height: '50px' }}
            ellipsis={{ rows: 2, expandable: false }}
            className="event-font"
          >
            {name}
          </Typography.Title>
          <>
            <Typography.Paragraph strong className="event-font">
              <ClockCircleTwoTone /> {formatDate(time)}
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Tag>{city.toUpperCase()}</Tag>
              <Divider type="vertical" />
              <Space direction="horizontal">
                {categories.map((cate) => (
                  <Tag color="success" icon={<TagOutlined />}>
                    {cate}
                  </Tag>
                ))}
              </Space>
            </Typography.Paragraph>
            {/* 
              <p className="event-font" style={{ marginBottom: '0' }}>
                <EnvironmentTwoTone twoToneColor="orange" /> {location}
              </p> */}
          </>
        </div>
      </Card>
    </Link>
  );
};

export default EventItemDetail;
