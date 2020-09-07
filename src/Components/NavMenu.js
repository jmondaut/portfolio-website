import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Switch } from 'antd'

function NavMenu(){
    const [switchOn, setSwitchOn] = useState(false);
    return(
        <Switch checkedChildren="Code View" unCheckedChildren="Site View" onChange={() => setSwitchOn(!switchOn) }/>
    );
}

export default NavMenu;