import React from 'react';
import NextHeader from './NextHeader';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

interface ILayout {
  children: React.ReactNode;
}

const Layout = (props: ILayout): React.ReactElement => {
  const { children } = props;
  return (
    <React.StrictMode>
      <NextHeader />
      <Header />

      <Container>
        <main>
          <Row>
            <Col lg={3} xs={12}><aside id="sidebar"><Sidebar /></aside></Col>
            <Col lg={9} xs={12}><section id="content">{children}</section></Col>
          </Row>
        </main>
      </Container>
    </React.StrictMode>
  );
}
export default Layout;