import React from 'react';
import { Card } from 'antd'

function Contact(){
    return(
    <div className="site-card-border-less-wrapper">
        <Card title="Contact" bordered={true} >
        <p>Jonathan MONDAUT</p>
        <p><a href="mailto: mondautjonathan@gmail.com">mondautjonathan@gmail.com</a></p>
        <p>+33 07 69 32 01 82</p>
        <p><img src="../img/png-wechat-text-logo.png" alt="Wechat"></img> jmondaut</p>
        </Card>
    </div>
    );

}

export default Contact