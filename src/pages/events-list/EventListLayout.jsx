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
const fakeCategoryWithLink = [
  {name:'Phim ảnh',link:'phim-anh'},
  {name:'Thể thao',link:'the-thao'},
  {name:'Du lịch',link:'du-lich'},
  {name:'Khóa học',link:'khoa-hoc'},
  {name:'Nhạc sống',link:'nhac-song'},
  {name:'Nightlife',link:'nightlife'},
  {name:'Sân khấu - Nghệ thuật',link:'san-khau-nghe-thuat'},
];
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
      timeFilterValue: 'today',
      currentPage: 1,
      totalPages: 30,
      isDrawerShown: false,
      category:fakeCategoryWithLink,
      carouselContent:fakeCarouselLinks
    };
  }

  onTimeFilterChange = (e) => {
    this.setState({
      timeFilterValue: e.target.value,
    });
  };
  onDatePickerChange = (date, dateString) => {
    this.setState({
      timeFilterValue: dateString,
    });
  };
  onPaginationChange = (page, pageSize) => {
    this.setState({
      currentPage: page,
    });
  };
  triggerDrawer = () => {
    this.setState({
      isDrawerShown: true,
    });
  };
  onDrawerClose = () => {
    this.setState({
      isDrawerShown: false,
    });
  };
  onCarouselChange(a, b, c) {
  }
  render = () => (
    <Layout className="event-list-wrapper">
      <EventListCategory
        category={this.state.category}
        timeFilterValue={this.state.timeFilterValue}
        onTimeFilterChange={this.onTimeFilterChange}
        onDatePickerChange={this.onDatePickerChange}
      />
      <EventFrontpageContent
        featuredEvents={this.state.featuredEvents}
        newEvents={this.state.newEvents}
        currentPage={this.state.currentPage}
        totalPages={this.state.totalPages}
        isMobile={this.props.isMobile}
        triggerDrawer={this.triggerDrawer}
        onPaginationChange={this.onPaginationChange}
        onCarouselChange={this.onCarouselChange}
        carouselContent={this.state.carouselContent}
      />
    </Layout>
  );
}
export default EventList;
