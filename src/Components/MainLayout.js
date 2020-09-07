//REACT
import React, { useState } from 'react';
import { BrowserRouter as Router,
          Switch,
          Route,
          Redirect 
        } from "react-router-dom"

//ANT DESIGN --- UI
import 'antd/dist/antd.less';
import { Layout,
          Switch as AntSwitch } from 'antd';

//CUSTOM COMPONENTS
import CodeView from '../Views/CodeView'
import MainContent from '../Views/MainContent'

function MainLayout(){
  const [switchOn, setSwitchOn] = useState(false);

  //ANT DESIGN LAYOUT
  const { Header, Content, Footer } = Layout;
  return(
  <Layout className="layout" >
    <Router>
      <Header>
        <img src="../img/NavLogo.png" alt='JM' className="logo" />
        <AntSwitch checkedChildren="Code View" unCheckedChildren="Site View" onChange={() => setSwitchOn(!switchOn) }/>
        {switchOn ? <Redirect to="/code" /> : <Redirect to="/home" />}
      </Header>

      <Content style={{ padding: '0 50px' }}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <MainContent />
        </Route>
        <Route path="/code">
          <CodeView />
        </Route>
      </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Jonathan MONDAUT ©2020</Footer>
    </Router>
  </Layout>
  );
}

export default MainLayout