import React from 'react';
import NextHeader from './NextHeader';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container, Button } from 'react-bootstrap';

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
            <aside id="sidebar"><Sidebar /></aside>
            <section id="content">{children}</section>
          </main>
        </Container>
      </React.StrictMode>
    );
}
export default Layout;