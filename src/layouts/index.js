import { BackTop } from 'antd';
import { Nav30DataSource, Footer10DataSource } from '../pages/home/data.source';
import Nav3 from '../pages/home/Nav3';
import Footer1 from '../pages/home/Footer1';
import { useState, useEffect, useCallback } from 'react';
import useMobile from '../hooks/useMobile';
import './layout.less';

const { location = {} } = typeof window !== 'undefined' ? window : {};

function BasicLayout(props) {
  const isMobile = useMobile();
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
        <div style={{ marginTop: scrolled ? '64px' : '0px', minHeight: '80vh' }}>
          {props.children}
        </div>
        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={isMobile}
        />
        <BackTop />
      </div>
    )
  );
}

export default BasicLayout;
