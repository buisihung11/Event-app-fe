import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div>
      <Spin size={50} tip="Đang tải" />
    </div>
  );
};

export default Loading;
