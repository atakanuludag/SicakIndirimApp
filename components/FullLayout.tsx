import React from 'react';
import NextHeader from './NextHeader';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

interface ILayout {
  children: React.ReactNode;
}

const FullLayout = (props: ILayout): React.ReactElement => {
  const { children } = props;
  return (
    <React.Fragment>
      <NextHeader />
      <Header />

      <Container>
        <main>
          <Row>
            <Col lg={12} xs={12}><section id="content">{children}</section></Col>
          </Row>
        </main>
      </Container>
    </React.Fragment>
  );
}
export default FullLayout;