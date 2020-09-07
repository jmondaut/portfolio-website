import React from 'react';
import { Button, Tooltip } from 'antd';

function PortfolioButton(){
    return(
        <Tooltip title="Under construction..." color="red" key="red">
            <Button type="primary" shape="round">
            Click here to see my work!
            </Button>
        </Tooltip>
    );
}

export default PortfolioButton;