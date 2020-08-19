import React, { useState } from 'react';

import './index.less';
import HeaderSection from './HeaderSection';
import GallerySection from './GallerySection';
import ContentSection from './ContentSection';
// import CommentSection from './CommentSection';

const EventDetail = (props) => {
  const {
    params: { id },
  } = props.match;

  const [{ name, channel, time, description, location, banner }, setEvent] = useState({
    banner:
      'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/109228393_1721419681330083_8289757739294266576_n.png?_nc_cat=108&_nc_sid=730e14&_nc_ohc=kJ1wlKlftDgAX_eQQwE&_nc_ht=scontent.fsgn5-5.fna&oh=893db861ef7bab72a3f6708806554426&oe=5F604201',
    name: 'Conference on Sustainable Development',
    channel: 'Solution Network',
    time: '12-12-2020 11:00 AM',
    location: 'Toa nha Landmark Quan BT HCM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error si voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  });

  console.log('id', id);

  return (
    <div
      className="event-detail"
      style={{ width: '100%', backgroundColor: '#f1f1f1' }}
      direction="vertical"
      size="large"
    >
      <section className="event-image-banner">
        <img src={banner} alt="Event Banner" />
      </section>
      <HeaderSection name={name} time={time} location={location} />
      <GallerySection />
      <ContentSection description={description} name={name} time={time} location={location} />
    </div>
  );
};

export default EventDetail;
