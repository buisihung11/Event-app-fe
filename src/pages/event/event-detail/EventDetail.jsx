import React, { useState } from 'react';
import Image from '../../../components/Image/Image';
import './index.less';
import HeaderSection from './HeaderSection';
import GallerySection from './GallerySection';
import ContentSection from './ContentSection';
import { Skeleton, Button, Modal, Typography } from 'antd';
// import CommentSection from './CommentSection';

const EventDetail = (props) => {
  const {
    params: { id },
  } = props.match;

  const [
    { name, channel, time, description, location, banner, address, tickets },
    setEvent,
  ] = useState({
    banner:
      'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/109228393_1721419681330083_8289757739294266576_n.png?_nc_cat=108&_nc_sid=730e14&_nc_ohc=kJ1wlKlftDgAX_eQQwE&_nc_ht=scontent.fsgn5-5.fna&oh=893db861ef7bab72a3f6708806554426&oe=5F604201',
    name: 'Triển lãm Quốc tế Nguồn cung ứng Sản phẩm Cao cấp - VIPREMIUM 2020',
    channel: 'Solution Network',
    time: '12/12/2020 11:00 AM',
    location: 'Toa nha Landmark Quan BT HCM',
    address: '799 Nguyễn Văn Linh, Quận 7, Thành Phố Hồ Chí Minh',
    description: `TRIỂN LÃM QUỐC TẾ PHIM VÀ CÔNG NGHỆ TRUYỀN HÌNH VIỆT NAM LẦN THỨ 8 – TELEFILM 2020

      TELEFILM VIETNAM là nơi quy tụ nhiều công ty, nhà sản xuất, nhà cung cấp hàng đầu trong lĩnh vực phim và công nghệ truyền hình tại Việt Nam cũng như trên thế giới. Triển lãm là nơi giao dịch mua bán nội dung và công nghệ trong lĩnh vực Phim và Công nghệ Truyền hình, các thiết bị ứng dụng sáng tạo và những dịch vụ liên quan, được giới chuyên môn trong nước và quốc tế đánh giá cao. 
      
      Một sự kiện quốc tế uy tín và chuyên nghiệp nhất trong lĩnh vực Phim và Công nghệ Truyền hình.
      Hoạt động nổi bật diễn ra trong thời gian triển lãm – Chương trình Kết nối giao thương giữa các Doanh nghiệp Việt nam & Nước ngoài.
      Trải nghiệm các hệ thống ứng dụng sáng tạo truyền hình trên Internet của hơn 300 Doanh nghiệp đến từ 20 Quốc gia trên thế giới
      CÁC LĨNH VỰC CHÍNH:
      
      Nội dung
      Chương trình
      Thiết bị & Công nghệ
      Dịch vụ hậu cần`,
    tickets: [
      {
        name: 'VIP - Left',
        price: '5',
        description: 'Giá vé đã bao gồm phí dịch vụ',
        isAvailable: true,
      },
      {
        name: 'VIP - Right',
        price: '5',
        description: 'Giá vé đã bao gồm phí dịch vụ',
        isAvailable: false,
      },
      {
        name: 'Regular - Left',
        price: '5',
        description: 'Giá vé đã bao gồm phí dịch vụ',
        isAvailable: true,
      },
      {
        name: 'Regular - Right',
        price: '5',
        description: null,
        isAvailable: true,
      },
    ],
    reward: 5,
    category: '',
  });

  // TODO
  // 1. Them Category

  return (
    <div
      className="event-detail"
      style={{ width: '100%', backgroundColor: '#f1f1f1' }}
      direction="vertical"
      size="large"
    >
      <section className="event-image-banner">
        <Image src={banner} alt="Event Banner" />
        {/* <img src={banner} alt="Event Banner" /> */}
      </section>
      <HeaderSection name={name} time={time} location={location} address={address} />
      {/* <GallerySection /> */}
      <ContentSection
        description={description}
        name={name}
        time={time}
        location={location}
        address={address}
        tickets={tickets}
      />
    </div>
  );
};

export const BuyBtn = (props) => {
  const handleBuy = () => {
    Modal.info({
      title: 'Thông tin cách mua vé',
      centered: true,
      content: (
        <div>
          <Typography.Paragraph>
            Vui lòng chuyển khoản vào số tài khoản sau: 0010101011
          </Typography.Paragraph>
        </div>
      ),
      onOk() {},
    });
  };
  return (
    <Button
      danger
      type="primary"
      onClick={handleBuy}
      block
      style={{ maxWidth: '150px' }}
      {...props}
    >
      Mua vé ngay
    </Button>
  );
};

export default EventDetail;
