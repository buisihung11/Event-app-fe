import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Nav30DataSource, Footer10DataSource } from '../pages/home/data.source';
import Nav3 from '../pages/home/Nav3';
import Footer1 from '../pages/home/Footer1';
import { enquireScreen } from 'enquire-js';
import { useState, useEffect, useCallback } from 'react';

let isMobileConfig;
enquireScreen((b) => {
  isMobileConfig = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

function BasicLayout(props) {
  const [isMobile, setIsMobile] = useState(isMobileConfig);
  const [show, setShow] = useState(!location.port);
  const [scrolled, setScrolled] = useState(false);

  const handleChangeNavStyle = useCallback((event) => {
    const offset = window.scrollY;
    if (offset > 65) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleChangeNavStyle, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleChangeNavStyle);
    };
  }, [handleChangeNavStyle]);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  let newDataSrc = scrolled
    ? {
        ...Nav30DataSource,
        wrapper: { className: `${Nav30DataSource.wrapper.className} header3-fixed` },
      }
    : Nav30DataSource;

  return (
    show && (
      <div className="templates-wrapper">
        <Nav3 id="Nav3_0" key="Nav3_0" dataSource={newDataSrc} isMobile={isMobile} />
        {props.children}
        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={isMobile}
        />
      </div>
    )
  );
}

export default BasicLayout;
