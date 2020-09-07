import React from 'react';
import { Card } from 'antd'

function Contact(){
    return(
    <div className="site-card-border-less-wrapper">
        <Card title="Contact" bordered={true} >
        <p>Jonathan MONDAUT</p>
        <p><a href="mailto: mondautjonathan@gmail.com">mondautjonathan@gmail.com</a></p>
        <p>0769320182</p>
        </Card>
    </div>
    );

}

export default Contact