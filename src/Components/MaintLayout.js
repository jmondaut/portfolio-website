//REACT
import React from 'react';
//REACT-SPRING --- Animations

//ANT DESIGN --- UI
import 'antd/dist/antd.less';
import { Layout } from 'antd';

//CUSTOM COMPONENTS
import CodeView from './CodeView'
import MainContent from './MainContent'
import NavMenu from './NavMenu'

function MainLayout(){
  //ANT DESIGN LAYOUT
  const { Header, Content, Footer } = Layout;
  return(
  <Layout className="layout">
    <Header>
      <img src="../img/NavLogo.png" className="logo" />
      <NavMenu />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <MainContent />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Jonathan MONDAUT ©2020</Footer>
  </Layout>
  );
}

export default MainLayout