import React from 'react';
import { Row, Col } from 'antd';
import EventItem from '../../components/event-item';

const fakeEvents = [
  {
    name: 'Event name 1',
    location: 'Dongo 184 Crono, Canada',
    price: 40,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
  {
    name: 'Event name 2',
    location: 'Dongo 184 Crono, Canada',
    price: 40,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
  {
    name: 'Event name 3',
    location: 'Dongo 184 Crono, Canada',
    price: 40,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
];

const NewEventList = () => {
  return (
    <Row style={{ width: '100%', margin: '0' }} justify="center">
      <Col span={24}>
        <h1 className="event-list-title" style={{ textAlign: 'center' }}>
          Các Sự kiện mới:{' '}
        </h1>
      </Col>
      <Col span={24}>
        <Row
          justify="center"
          style={{ width: '100%', margin: '0' }}
          gutter={[16, { xs: 8, sm: 8, md: 16 }]}
        >
          {fakeEvents.map((e, index) => (
            <Col xs={22} sm={22} md={12} lg={8} xl={6}>
              <EventItem {...e} key={`event_${index}`} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default NewEventList;
