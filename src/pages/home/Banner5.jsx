import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from './utils';
import { Row, Card, Input, Col, Button, Typography, Space } from 'antd';

class Banner5 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    const { dataSource } = tagProps;
    delete tagProps.dataSource;
    delete tagProps.isMobile;
    const animType = {
      queue: 'bottom',
      one: {
        y: '+=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
    };
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            {...dataSource.childWrapper}
            componentProps={{
              md: dataSource.childWrapper.md,
              xs: dataSource.childWrapper.xs,
            }}
          >
            <div className="banner5-title-wrapper">
              <h1 className="banner5-title">Find your Event</h1>
              <div className="banner5-explain">Checkout all the available event</div>
            </div>
            <div className="banner5-search-wrapper">
              <Card>
                <Space direction="vertical">
                  <Typography.Text>
                    <Typography.Text strong>Events near me. </Typography.Text>
                    More than <Typography.Text strong>186 million</Typography.Text> events based on
                    my interests. Worldwide.
                  </Typography.Text>
                  <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                    <Col flex={1}>
                      <Input placeholder="City" size="large" />
                    </Col>
                    <Col>
                      {/* <div className="banner5-button-wrapper"> */}
                      <Button className="banner5-button" type="primary">
                        Search
                      </Button>
                      {/* </div> */}
                    </Col>
                  </Row>
                </Space>
              </Card>
            </div>
          </QueueAnim>
          <TweenOne animation={animType.one} key="title" {...dataSource.image}>
            <img src={dataSource.image.children} width="100%" alt="img" />
          </TweenOne>
        </div>
      </div>
    );
  }
}
export default Banner5;
