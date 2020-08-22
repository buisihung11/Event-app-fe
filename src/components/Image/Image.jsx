import React from 'react';
import { Img } from 'react-image';
import { Skeleton } from 'antd';
import ImageLoading from '../../assets/image_loader.svg';
const Image = ({ src, loader, unloader, ...imgProps }) => {
  return (
    <Img
      src={[src]}
      loading="lazy"
      loader={
        loader || (
          <img style={{ width: '100%', height: '200px' }} src={ImageLoading} alt="Loading" />
        )
      }
      unloader={unloader || <Skeleton.Image />}
      // style={{ width: '100%', height: '100%' }}
      {...imgProps}
    />
  );
};

export default Image;
