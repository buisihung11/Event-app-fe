import { Component } from 'react';
import EventFrontpageContent from './EventFrontpageContent';
import EventListCategory from './EventListCategory';
import { Layout } from 'antd';

import './less/index.less';
const fakeNewEvents = [];
const fakeFeaturedEvents = [];
for (let i = 1; i <= 7; i++) {
  fakeNewEvents.push({
    name: 'Sự kiện mới ' + i,
    location: 'Dongo 184 Crono, Canada',
    price:  i === 2 ? 0 : i * 20,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  });
  fakeFeaturedEvents.push({
    name: 'Sự kiện nổi ' + i,
    location: 'Dongo 184 Crono, Canada',
    price:  i === 2 ? 0 : i * 20,
    imageURL:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  });
}
fakeNewEvents.push({
  name: 'Sự kiện mới cuoi',
  location: 'Dongo 184 Crono, Canada',
  price: 10,
  imageURL:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
});
fakeFeaturedEvents.push({
  name: 'Sự kiện nổi cuoi',
  location: 'Dongo 184 Crono, Canada',
  price: 10,
  imageURL:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
});
const fakeCarouselLinks=[
  'https://freestocks.org/fs/wp-content/uploads/2016/08/forest_wedding_photoshoot-1000x667.jpg',
  'https://freestocks.org/fs/wp-content/uploads/2018/08/helium_cartoon_ballons_closeup-1000x667.jpg',
  'https://freestocks.org/fs/wp-content/uploads/2018/08/helium_cartoon_ballons_closeup_2-1000x667.jpg'
]
class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredEvents: fakeFeaturedEvents,
      newEvents: fakeNewEvents,
      carouselContent:fakeCarouselLinks,
      category:this.props.category
    };
  }

  onCarouselChange(a, b, c) {
  }
  render = () => (
    <Layout className="event-list-wrapper">
      <EventListCategory
        category={this.state.category}
      />
      <EventFrontpageContent
        featuredEvents={this.state.featuredEvents}
        newEvents={this.state.newEvents}
        isMobile={this.props.isMobile}
        onCarouselChange={this.onCarouselChange}
        carouselContent={this.state.carouselContent}
      />
    </Layout>
  );
}
export default EventList;
