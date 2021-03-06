import React, { useEffect, useState } from 'react';
import { Carousel, Grid } from 'antd';
import useMobile from '../../../hooks/useMobile';
import Image from '../../../components/Image/Image';

const contentStyle = {
  height: '250px',
};

// TODO: Change carouselSetting when screen size is mobile

const carouselSettings = {
  slidesToShow: 3, // nb of items per slide
  slidesToScroll: 2, // total slide
  className: 'center',
  //   centerMode: true,
  centerPadding: '60px',
};

const { useBreakpoint } = Grid;

const GallerySection = () => {
  const isMobile = useMobile();
  const [settings, setSettings] = useState(carouselSettings);
  const { md } = useBreakpoint();
  useEffect(() => {
    setSettings({
      ...carouselSettings,
      slidesToShow: !md ? 1 : carouselSettings.slidesToShow,
      slidesToScroll: !md ? 1 : carouselSettings.slidesToScroll,
    });
  }, [md]);

  return (
    <section className="event-gallery">
      <Carousel {...settings}>
        <div>
          <div style={contentStyle}>
            <Image
              className="event-gallery-img"
              alt="Event gallery"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              className="event-gallery-img"
              alt="Event gallery"
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              className="event-gallery-img"
              alt="Event gallery"
              src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              className="event-gallery-img"
              alt="Event gallery"
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default GallerySection;
