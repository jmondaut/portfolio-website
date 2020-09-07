import React from 'react';
import { Row, Col, Comment, Avatar, Tooltip } from 'antd';
import moment from 'moment';

import PortfolioButton from '../Components/PortfolioButton';
import Contact from '../Components/Contact';
import Resume from '../Components/Resume';

function MainContent(){
    return(
        <div className="site-layout-content">
            <Row justify='center' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={{xs: 24, sm:12 }}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12}>
                            <img src='img/logo.png' alt="Logo" />
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12}>
                            <PortfolioButton />
                            <Comment
                                author={<span>Jonathan MONDAUT</span>}
                                avatar={
                                    <Avatar
                                    src="../img/jmondaut-avatar.jpg"
                                    alt="Jonathan MONDAUT"
                                    />
      }
      content={
        <p>
          Click on switch above to see website's code.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12}>
                            <Resume />
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={{xs: 24, sm:12 }}>
                    <Contact />
                </Col>
            </Row>

        </div>
    );
}

export default MainContent