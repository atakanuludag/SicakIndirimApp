import React from 'react';
import NextHeader from '../components/NextHeader';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

interface ILayout {
  children: React.ReactNode;
}

const SidebarLayout = (props: ILayout): React.ReactElement => {
  const { children } = props;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
export default SidebarLayout;