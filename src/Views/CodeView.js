import React from 'react';
import Iframe from 'react-iframe';

function CodeView(){
    return(
        <div className="site-layout-content">
            <Iframe url="https://codesandbox.io/embed/github/jmondaut/portfolio-website/tree/master/?codemirror=1&view=editor"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            width="100%"
            height="500px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
        </div>
    );
}

export default CodeView;