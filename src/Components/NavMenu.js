import React from 'react';
import { Menu, Switch } from 'antd'

function NavMenu(){
    return(
        <Switch checkedChildren="Code View" unCheckedChildren="Site View" />
    );
}

export default NavMenu;