
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Col, Button, Row, Dropdown, Menu } from 'antd'
import EventListLayout from './EventListLayout'
import EventCategoryLayout from '../event-category/EventCategoryLayout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faMusic , faFootballBall, faGraduationCap, faFilm,faMoon, faTheaterMasks, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './less/menu.less'
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const { location = {} } = typeof window !== 'undefined' ? window : {};

const fakeCategoryWithLink = [
  { name: 'Phim ảnh', link: 'phim-anh' , icon: <FontAwesomeIcon className='menu-icons' icon={faFilm} /> },
  { name: 'Thể thao', link: 'the-thao' , icon: <FontAwesomeIcon className='menu-icons' icon={faFootballBall} />  },
  { name: 'Du lịch', link: 'du-lich' , icon: <FontAwesomeIcon className='menu-icons' icon={faPlane} />  },
  { name: 'Khóa học', link: 'khoa-hoc' , icon: <FontAwesomeIcon className='menu-icons' icon={faGraduationCap} /> },
  { name: 'Nhạc sống', link: 'nhac-song' , icon: <FontAwesomeIcon className='menu-icons' icon={faMusic} />  },
  { name: 'Nightlife', link: 'nightlife' , icon: <FontAwesomeIcon className='menu-icons' icon={faMoon} />  },
  { name: 'Sân khấu - Nghệ thuật', link: 'san-khau-nghe-thuat'  , icon: <FontAwesomeIcon className='menu-icons' icon={faTheaterMasks} /> },
];
export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      isFrontPage: true,
      category: fakeCategoryWithLink
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }

  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if ((nextProps.location.query.category === undefined) !== prevState.isFrontPage) {
      const category = nextProps.location.query.category
      return {
        isFrontPage: category === undefined
      }
    }
    return null;
  }
  render() {
    const menuOthers = (
      <Menu>
        {this.state.category.slice(2).map(item => (
          <Menu.Item>
            <a rel="noopener noreferrer" href={'events?category=' + item.link}>
        {item.icon} {item.name}
            </a>
          </Menu.Item>
        ))}
      </Menu>

    )
    let children = null;
    if (this.state.isFrontPage) {
      children = [
        (<Col lg={0} span={24} style={{ paddingTop: '15px', backgroundColor: '#F0F2F5' }}>
          <Row style={{ backgroundColor: 'inherit' }} justify='space-around'>
            {this.state.category.slice(0, 2).map(item => (
              <Button className='category-item' style={{ backgroundColor: '#fff' }} key={'link' + item.link}>
                <a href={'events?category=' + item.link} rel="noopener noreferrer">
            {item.icon} {item.name}
                </a>
              </Button>
            ))}

            <Dropdown overlay={menuOthers} placement="bottomLeft">
              <Button className='category-other'>Others <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faCaretDown} /></Button>
            </Dropdown>
          </Row>


        </Col>),
        <EventListLayout category={this.state.category} className="event-list-wrapper" isMobile={this.state.isMobile} />
      ];
    } else {
      children = [
        <EventCategoryLayout className="event-list-wrapper" isMobile={this.state.isMobile} />
      ];
    }

    return this.state.show && children;
  }
}


